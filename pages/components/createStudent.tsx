import React, { useState } from 'react'
import { useForm,Controller } from 'react-hook-form'
import { TextField, Typography,Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { width } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

const NameRules = {
  required: "Please, the field name is required",
  minLength: {value:2, message: "Please, the field name should have at least 2 chars"}
};

const CourseRules = {
  required: "Please, the field course is required",
  minLength: {
    value: 2,
    message: "Please, the field course should have at least 2 chars",
  },
};

const EmailRules = {
  required: "Please, the field course is required",
  minLength: {
    value: 2,
    message: "Please, the field course should have at least 2 chars",
  },
  pattern: {
    value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    message: "Invalid email, please enter a valid format"
  },
};

type StudentData = {
  name: string,
  course:string,
  email:string,
  birthdate?: string,
  average:{
    firstQuarter:string,
    secondQuarter:string
  }
  errors:"null "
};

export const Form: React.FC = () => {
  const { register,control, handleSubmit,setFocus, formState:{errors} } = useForm()
const [selectedDate, handleDateChange] = useState(new Date());
  function onSubmit(data: any) {
    console.log(data)
  }

  React.useEffect(()=>{
    setFocus("user")
  },[])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          rules={NameRules}
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
          rules={CourseRules}
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
          name="mail"
          control={control}
          rules={EmailRules}
          defaultValue=""
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              label={"Email:"}
              fullWidth
              inputRef={ref}
              onChange={onChange}
              value={value}
              error={!!errors.name}
              helperText={`${errors.mail?.message || ""}`}
            />
          )}
        />
        <Typography variant="subtitle1" component="h2">
          Promedio:
        </Typography>
        {/* INPUT FIRST QUARTER */}
        <Controller
          name="firstQuarter"
          control={control}
          defaultValue=""
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
            />
          )}
        />
        {/* INPUT SECOND QUARTER */}
        <Controller
          name="secondQuarter"
          control={control}
          defaultValue=""
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
            />
          )}
        />
      </Box>
    </form>
  );

}