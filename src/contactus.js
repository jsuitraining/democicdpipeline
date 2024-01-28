import React, { useState } from 'react'

function ContactusComponent() {

  let registrationform = {
       "username":"",
       "email":"",
       "location":"",
       "password":"",
       "age":"",
 
  }

 const [registrationformdata,setRegistrationFormData] = useState(registrationform);

  return (
    <div>
      <form>
   
          <h1>Registration Form</h1>
          <div>
            <label>username: </label>
            <input type="text" 
                   name="username"
                   onChange={(e)=>setRegistrationFormData(
                    {...registrationformdata,username:e.target.value}
                    )} 
                   value={registrationformdata.username}/>
          </div>
          <div>
            <label>email: </label>
            <input type="email" 
                   name="email"
                   onChange={(e)=>setRegistrationFormData({...registrationformdata,email:e.target.value})} 
                   value={registrationformdata.email}/>
          </div>

          <div>
            <label>location: </label>
            <input type="text" 
                   name="location"
                   onChange={(e)=>setRegistrationFormData({...registrationformdata,location:e.target.value})} 
                   value={registrationformdata.location}/>
          </div>

          <div>
            <label>password: </label>
            <input type="password" 
                   name="password"
                   onChange={(e)=>setRegistrationFormData({...registrationformdata,password:e.target.value})} 
                   value={registrationformdata.password}/>
          </div>

          <div>
            <label>age: </label>
            <input type="number" 
                   name="age"
                   onChange={(e)=>setRegistrationFormData({...registrationformdata,age:e.target.value})} 
                   value={registrationformdata.age}/>
          </div>           




          <div>
            <button type="submit">submit</button>
          </div>
      </form>
      <p>{JSON.stringify(registrationformdata)}</p>
    </div>
  )
}

export default ContactusComponent