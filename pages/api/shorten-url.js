import crypto from "crypto";
import { pool } from "../../utils/DBConnection";

export default async function handler(req, res) {
  const { url } = req.body;

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
  await db.query(query, [key, url]);
  db.release();
  res.status(200).json({ key: key });
}
