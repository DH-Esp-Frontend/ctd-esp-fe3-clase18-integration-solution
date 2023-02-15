import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const { name, course, firstQuarter, secondQuarter,email } = req.body;

    const newStudent = {
      id: `${students.length}`,
      name,
      course,
      email,
      average: {
        firstQuarter,
        secondQuarter,
      },
    };
    students.push(newStudent);
    res.status(200).json({ message: "agregado correctamente", newStudent });
    
  }
}
