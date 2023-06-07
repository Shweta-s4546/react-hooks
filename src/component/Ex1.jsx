import React, { useState } from 'react'

//react hooks => use only in functional component
//react basics hooks are:
// 1. useState
// 2. useEffect
// 3.useContext

//syntax of useState:
// const [state,handler] = useState(initailValue) //declare react state in functional component
function Ex1() {

const [x,setX] = useState(10)
const [title,setTitle] = useState("welcome to React")
const [isView,setIsView] = useState(true)
const [colors,setColors] = useState(["red", "green", "blue"])
const [user,setUser] = useState({
name:"raju",
email:'raju@gmail.com'
})

return (
<div className='container'>
  <div className="row">
    <div className="col-md-12 text-center">
      <h5 className="display-3 text-center text-success">
        UseState
      </h5>
    </div>
  </div>

  <div className="row">
    <div className="col-md-12">
      <h3 className="text-warning">x = { x }</h3>
      <h3 className="text-warning">Title = { title }</h3>
      <h3 className="text-warning"> Name = { user.name }</h3>
      <h3 className="text-warning"> Email = { user.email }</h3>
      <h3 className="text-warning"> IsView = {isView ? true : false}</h3>
      <h3 className="text-warning"> Colors = { 
            colors.map((item,index) => {
              return(
                <h5 className="text-danger" key={index}> {item}</h5>
              )
            })
       }</h3>
    </div>
  </div>
</div>

)
}

export default Ex1