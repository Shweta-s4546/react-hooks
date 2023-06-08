import React, { useState, useCallback} from 'react'
import Age from './sub/Age'
import Ageinfo from './sub/Ageinfo'


//useCallback =>  will return the memorised value of callback
//useMemo => will return the memorised function of callback

function Ex4() {

  const [age,setAge] = useState(10)

  const incrementAge = () => {
    setAge(age+1)
  }

  const userAge = `David age is ${age} years`

  // useCallback will return a memorised version of the callback that only changes if one of the inputs has changed 

  const updateAge = useCallback(() => {
      return userAge
  },[age])

return (
<div className='container'>
  <div className="col-md-12 text-center">
    <h5 className="display-3 text-center text-success">
      useCallback
    </h5>
  </div>
  <Age age={age} ageHandler={incrementAge}/>
  <Ageinfo Ageinfo={updateAge}/>
</div>
)
}

export default Ex4