import { NextApiRequest,NextApiResponse } from "next"
import {students} from "./db";

export default function handler(req:NextApiRequest,res:NextApiResponse){

  if(req.method != "GET"){
    res.status(405).json({error:'metodo no soportado'})
    return;
  }
  res.status(200).json(students)
}