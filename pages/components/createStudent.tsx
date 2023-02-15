import React, { useState } from 'react'
import { useForm,Controller } from 'react-hook-form'
import { TextField, Typography, Box, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Student {
  name: string,
  course: string,
  firstQuarter: string,
  secondQuarter:string
}

const loginSchema = yup
  .object({
    name: yup
      .string()
      .required("Please, the field name is required")
      .min(2, "Please, the field name should have at least 2 chars"),
    course: yup
      .string()
      .required("Please, the field course is required")
      .min(2, "Please, the field course should have at least 2 chars"),
    email: yup
      .string()
      .required("Please, the field email is required")
      .email("Invalid mail"),
    firstQuarter: yup
      .number()
      .required("Please, the field firstQuarter is required"),
    secondQuarter: yup
      .number()
      .required("Please, the field firstQuarter is required")
  })
  .required();


export const Form: React.FC = () => {
  const [studentData, setStudentData] = useState <Student>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  function onSubmit(data: any) {
    fetch('/api/create', {method: "POST",headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(() => setStudentData(data))
    .catch(error => console.error(error.message));
  }

  return (
    <>
      <Link href="/">
        <Button variant="text">Show All</Button>
      </Link>
      <Link href="/average">
        <Button variant="text">
          filter by average <ArrowDownwardIcon />
        </Button>
      </Link>
      <form>
        <Box>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Create a new student
          </Typography>
          {/* INPUT NAME */}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                label={"Name:"}
                fullWidth
                inputRef={ref}
                onChange={onChange}
                value={value}
                error={!!errors.name}
                helperText={`${errors.name?.message || ""}`}
              />
            )}
          />
          {/* INPUT COURSE */}
          <Controller
            name="course"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                label={"Course:"}
                fullWidth
                inputRef={ref}
                onChange={onChange}
                value={value}
                error={!!errors.name}
                helperText={`${errors.course?.message || ""}`}
              />
            )}
          />
          {/* INPUT EMAIL */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                label={"Email:"}
                fullWidth
                inputRef={ref}
                onChange={onChange}
                value={value}
                error={!!errors.email}
                helperText={`${errors.email?.message || ""}`}
              />
            )}
          />
          <Typography variant="subtitle1" component="h2">
            Average
          </Typography>
          {/* INPUT FIRST QUARTER */}
          <Controller
            name="firstQuarter"
            control={control}
            defaultValue={0}
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                sx={{ width: "50%" }}
                label={"First Quarter:"}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                fullWidth
                inputRef={ref}
                type="number"
                onChange={onChange}
                value={value}
                error={!!errors.firstQuarter}
                helperText={`${errors.firstQuarter?.message || ""}`}
              />
            )}
          />
          {/* INPUT SECOND QUARTER */}
          <Controller
            name="secondQuarter"
            control={control}
            defaultValue={0}
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                sx={{ width: "50%" }}
                label={"Second Quarter:"}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                fullWidth
                inputRef={ref}
                type="number"
                onChange={onChange}
                value={value}
                error={!!errors.secondQuarter}
                helperText={`${errors.secondQuarter?.message || ""}`}
              />
            )}
          />
          <Button variant="text" onClick={handleSubmit(onSubmit)}>
            Crear
          </Button>
        </Box>
      </form>
      {studentData?.name && (
        <Box>
          <Typography variant="h3">Saved!</Typography>
          <h3>Student Name: {studentData?.name}</h3>
          <p>Course: {studentData?.course}</p>
          <h4>Average: </h4>
          <p>FirstQuarter : {studentData?.firstQuarter}</p>
          <p>Second Quarter: {studentData?.secondQuarter}</p>
        </Box>
      )}
    </>
  );

}