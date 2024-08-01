import { pool } from "../../utils/connection";
import { validateKey } from "../../utils/url_validation";

export default async function handler(req, res) {
  try {
    const { key } = req.query;

    if (!validateKey(key)) {
      return res.status(400).json({ error: "Invalid key format." });
    }

    const db = await pool.getConnection();
    const query = "SELECT * FROM url_information where short_url_key=? LIMIT 1";
    const result = await db.query(query, [key]);

    db.release();

    if (result.length === 0) {
      return res.status(404).json({ error: "URL not found." });
    }

    res.redirect(`${result[0][0].long_url}`);
    
  } catch (error) {
     console.error("Error fetching original url:", error);
     res.status(500).json({ error: "Internal Server Error." });
  }
}
