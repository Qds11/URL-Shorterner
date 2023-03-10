import { pool } from "../../utils/connection";

export default async function handler(req, res) {
  let { key } = req.query;
  const db = await pool.getConnection();
  let query = "SELECT * FROM url_information where short_url_key=? LIMIT 1";
  let result = await db.query(query, [key]);
    db.release();
    console.log(result[0][0]);
    res.redirect(`${ result[0][0].long_url }`);
}
