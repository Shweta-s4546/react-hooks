import React from 'react'

function Mark(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h6 className="display-3">Mark = {props.mark}</h6>
                <button className='btn btn-success' onClick={props.markHnadler}> Increment Marks</button>
            </div>
        </div>
    </div>
  )
}

export default Mark
