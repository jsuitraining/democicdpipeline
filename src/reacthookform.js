import React from 'react'
import { useForm } from "react-hook-form"


export default function ReactHookFormDemo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>login page using react hook form</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label>username</label>
        <input defaultValue="test" {...register("example")} />
      </div>



      {/* include validation with required or other standard HTML validation rules */}
      <div>
        <label>password</label>
        <input type="password" {...register("exampleRequired", { required: true })} />
      </div>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}