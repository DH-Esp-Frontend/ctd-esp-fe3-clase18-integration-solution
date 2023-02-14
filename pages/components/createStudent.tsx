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
  const { register, handleSubmit, formState:{errors} } = useForm()

  function onSubmit(data: any) {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name"  {...register("example")} />
        {errors.name && <p>El nombre es requerido y debe tener al menos 2 caracteres</p>}
      </div>
      <div>
        <label htmlFor="course">Curso:</label>
        <input type="text" id="course"  {...register("example")} />
        {errors.course && <p>El curso es requerido y debe tener al menos 2 caracteres</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email"  {...register("example")} />
        {errors.email && <p>El email es requerido y debe ser válido</p>}
      </div>
      <div>
        <label htmlFor="birthdate">Fecha de nacimiento (opcional):</label>
        <input type="date" id="birthdate" name="birthdate" {...register} />
      </div>
      <div>
        <label htmlFor="average">Promedio:</label>
        <div>
        <label htmlFor="firstQuarter">Primer bimestre:</label>
        <input type="text" id="firstQuarter"  {...register("example")} />
        {errors.average?.firstQuarter && <p>El promedio del primer bimestre es requerido y debe ser una letra entre A y F</p>}
        </div>
        <div>
        <label htmlFor="secondQuarter">Segundo bimestre:</label>
        <input type="text" id="secondQuarter"  {...register("example")} />
        {errors.average?.secondQuarter && <p>El promedio del segundo b</p>}
        </div>
      </div>
      </form>
      )

}