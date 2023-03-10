import { pool } from "../../utils/connection";

export default async function handler(req, res) {
  let { key } = req.query;
  const db = await pool.getConnection();
  let query = "SELECT * FROM url_information where short_url_key=? LIMIT 1";
  console.log("jepl");
  let result = await db.query(query, [key]);
  db.release();
  res.redirect(result[0][0].long_url);
}
