import React, {useLayoutEffect, useState} from 'react'


const URL ='https://jsonplaceholder.typicode.com'

function Ex7() {

    const [users,setUsers] = useState([])

    const getUsers = async () => {
        await fetch(`${URL}/users`)
        .then(res => res.json())
        .then(out => {
            console.log('out =', out)
            setUsers(out)
        }).catch(err => console.log(err.message))
    }

    useLayoutEffect(()=> {
        getUsers()
    },[])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h2 className="text-success text-center">useLayoutEffect</h2>
            </div>
        </div>

        <div className="row">
            {
                users && users.map((item,index) => {
                    return(
                        <div className="col-md-3 mt-2 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-center text-success"> { item.name}</h5>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Ex7
