import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent(props) {


  return (
    <header>
        <h1>{props.mytitle}</h1>
        <nav>
           {
            props.mynavitems ? props.mynavitems.map((item,index)=> {
              return <Link to={item} key={index}>{item}</Link>
            }):"no data available"
           }
        </nav>
    </header>
  )
}
