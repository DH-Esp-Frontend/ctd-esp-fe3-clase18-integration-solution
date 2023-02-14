import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "GET") {
    res.status(405).json({ error: "metodo no soportado" });
    return;
  }
 let result = students.filter((student) => {
   let { firstQuarter, secondQuarter } = student.average;
   return parseInt(firstQuarter) <= 6 || parseInt(secondQuarter) <= 6;
 });

  res.status(200).json(result);
}
