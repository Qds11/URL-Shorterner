import crypto from "crypto";
import { pool } from "../../utils/connection";
import { validateUrl } from "../../utils/url_validation";


export default async function handler(req, res) {
   console.log("Entered the serverless function");

   return { dummy: "data" };
}