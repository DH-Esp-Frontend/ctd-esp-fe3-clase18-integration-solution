import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableRow, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import Link from "next/link";
interface Student {
  id: string;
  name: string;
  course: string;
  average: {
    firstQuarter: string;
    secondQuarter: string;
  };
}

export function Average() {
  const [students, setStudents] = useState<Student[]>();

  const fetchInformation = async () => {
    const response = await fetch("/api/inprocess");
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <>
      <h1>Only Student Debtors ({students?.length})</h1>
      <Link href="/">
        <Button variant="text">Show All</Button>
      </Link>
      <TableContainer component={Paper} sx={{ width: 650 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">First Quarter</TableCell>
              <TableCell align="right">Second Quarter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students?.map((student: Student) => (
              <TableRow
                key={student.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right">{student.course}</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color:
                      parseInt(student.average.firstQuarter) <= 6
                        ? "red"
                        : null,
                  }}
                >
                  {student.average.firstQuarter}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color:
                      parseInt(student.average.secondQuarter) <= 6
                        ? "red"
                        : null,
                  }}
                >
                  {student.average.secondQuarter}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
