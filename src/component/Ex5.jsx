import React, { useState, useMemo} from 'react'
import Mark from './sub/Mark'
import Markinfo from './sub/Markinfo'

function Ex5() {

    const [marks,setMarks] = useState(0)

    const incMarks = () => {
        setMarks(marks+1)
    }

    // useMemo will only recompute the memorised value when one of the dependencies has changed
    const updateMarks = useMemo(() => ({
        result: `Raju has scored ${marks} in maths`
    }),[marks])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h5 className="display-3 text-success text-center">useMemo()</h5>
            </div>
        </div>
        <Mark mark={marks} markHnadler={incMarks}/>
        <Markinfo info={updateMarks}/>
    </div>
  )
}

export default Ex5
