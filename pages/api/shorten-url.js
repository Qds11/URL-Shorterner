import crypto from "crypto";
import { pool } from "../../utils/connection";
import { validateUrl } from "../../utils/url_validation";


export default async function handler(req, res) {
  try {
    const { longurl } = req.body;
    const { BASE_URL } = process.env;

    if (!validateUrl(longurl)) {
      return res.status(400).json({ error: "Invalid URL format." });
    }

    const db = await pool.getConnection();
  
    let key;
    do {
      key = crypto.randomBytes(3).toString("hex");
    } while (
      (
        await db.query(
          "SELECT COUNT(*) FROM url_information WHERE short_url_key=?",
          [key]
        )
      )[0]["COUNT(*)"] > 0
    );
  
    const query =
      "INSERT INTO url_information (short_url_key, long_url) VALUES (?, ?)";
    await db.query(query, [key, longurl]);
      db.release();
      res.status(200).json({ shortUrl: `${BASE_URL}/api/${key}` });
  } catch(error){
     console.error("Error shortening url:", error);
     res.status(500).json({ error: "Internal Server Error." });
  }
}
