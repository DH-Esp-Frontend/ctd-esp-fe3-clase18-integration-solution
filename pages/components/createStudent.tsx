import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit,setFocus, formState:{errors} } = useForm()

  function onSubmit(data: any) {
    console.log(data)
  }

  React.useEffect(()=>{
    setFocus("user")
  },[])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true, minLength: 2 })}
        />
        {errors.name?.type === "required" && (
          <p>Please, the name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p>Please, the name should have at least 2 chars</p>
        )}
      </div>
      <div>
        <label htmlFor="course">Curso:</label>
        <input
          type="text"
          id="course"
          {...register("course", { required: true, minLength: 2 })}
        />
        {errors.course?.type === "required" && (
          <p>Please, the course is required</p>
        )}
        {errors.course?.type === "minLength" && (
          <p>Please, the course should have at least 2 chars</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: true,
            minLength: 2,
            pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <p>Please, the email is required</p>
        )}
        {errors.email?.type === "minLength" && (
          <p>Please, the email should have at least 2 chars</p>
        )}
        {errors.email?.type === "pattern" && <p>formato no valido</p>}
      </div>
      <div>
        <label htmlFor="birthdate">Fecha de nacimiento (opcional):</label>
        <input
          type="date"
          id="birthdate"
        />
      
      </div>
      <div>
        <label htmlFor="average">Promedio:</label>
        <div>
          <label htmlFor="firstQuarter">Primer bimestre:</label>
          <input type="text" id="firstQuarter" {...register("firstQuarter")} />
        </div>
        <div>
          <label htmlFor="secondQuarter">Segundo bimestre:</label>
          <input type="text" id="secondQuarter" {...register("example")} />
        </div>
        <input type="submit" value="enviar" />
      </div>
    </form>
  );

}