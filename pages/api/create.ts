import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { name, course } = req.body;
    students.push({
      id: `${students.length}`,
      name,
      course,
      average: {
        firstQuarter: "0",
        secondQuarter: "0",
      },
    });
    res.status(200).json({message:"agregado correctamente"});
    
  }
}
