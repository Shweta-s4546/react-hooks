import React from 'react'

function Age(props) {
  return (
    <div className='row'>
        <div className="col-md-12">
            <h3 className="display-3 text-danger">Age = {props.age}</h3>
            <button className="btn btn-primary" onClick={props.ageHandler}>Increment Age</button>
        </div>
    </div>
  )
}

export default Age
