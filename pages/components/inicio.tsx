import * as React from "react";
import { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
interface Student {
  id: string;
  name: string;
  course: string;
  average: {
    firstQuarter: string;
    secondQuarter: string;
  };
}

export function Inicio() {

  const [students, setStudents] = useState<Student[]>();

  const fetchInformation = async () => {
    const response = await fetch("/api/students");
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <>
      <h1>List of all Students ({students?.length})</h1>
      <Link href="/average">
        <Button variant="text">
          filter by average <ArrowDownwardIcon />
        </Button>
      </Link>
      <Link href="/create">
        <Button variant="text">
          crear <ArrowDownwardIcon />
        </Button>
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