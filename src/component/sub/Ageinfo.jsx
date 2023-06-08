import React from 'react'

function Ageinfo(props) {
  return (
    <div  className='row'>
        <div className="col-md-12">
             <h5 className="display-3 text-warning"> {props.Ageinfo()}</h5>
        </div>
    </div>
  )
}

export default Ageinfo
