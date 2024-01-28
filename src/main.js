import React, { useState } from 'react'
import HomeComponent from './home';
import {Routes,Route} from 'react-router-dom';
import ProjectsComponent from './projects';
import CoursesComponent from './courses';
import ContactusComponent from './contactus';
import DemoFormikComponent from './DemoFormik';
import ReactHookFormDemo from './reacthookform';

export default function MainComponent() {



  
  return (
    <div className='main'>
      <Routes>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/projects" element={<ProjectsComponent/>}/>
        <Route path="/courses" element={<CoursesComponent/>}/>
        <Route path="/contactus" element={<ContactusComponent/>}/>
        <Route path="/demoformik" element={<DemoFormikComponent/>}/>
        <Route path="/demoreacthookform" element={<ReactHookFormDemo/>}/>
      </Routes>
      
    </div>
  )
}
