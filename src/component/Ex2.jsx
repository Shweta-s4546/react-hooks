import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const URL = "https://jsonplaceholder.typicode.com"

//1.mount
    // useEffect(() => {
    //  
    // },[])
//2.update
    // useEffect(() => {
    //  
    // },[dependencies])
//3.unmount
    // useEffect(() => {
    //  return () => {
      
    //}
    // },[])

function Ex2(props) {

  const [posts,setPosts] = useState([])

  //pagination states
  const [currentItems,setCurrentItems] = useState([]) //current filtered data
  const [itemOffset,setItemOffset] = useState(0) // starting index
  const [pageCount,setPageCount] = useState(0)

  
  //useEffect => api calls, initial value
  const getPosts = async () => {
    await fetch(`${URL}/posts`)
    .then(res => res.json())
    .then(out => {
      // console.log('output =', out)
      setPosts(out)
    }).catch(err => console.log(err.message))
  }

  useEffect(() => {
    getPosts()
    const endOffset = itemOffset + props.itemsPerPage 
    // console.log(`init offset = ${itemOffset} - end offset = ${endOffset}`)
    const data = posts.slice(itemOffset,endOffset)
    setCurrentItems(data)
    const pCount = Math.ceil(posts.length / props.itemsPerPage)
    setPageCount(pCount)
  },[posts]) //update states

  const handler = (e) => {
    console.log('item =', e.selected)
    const newOffset =Number(e.selected * props.itemsPerPage) % posts.length;
    console.log("newoffset =", newOffset)
    setItemOffset(newOffset)
  }


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h5 className="display-3 text-center text-success">
               Example-2
            </h5>
        </div>
        </div>

        <div className="row">
          {
            //to print data
            currentItems && currentItems.map((item,index) => {
              return (
                <div className="col-md-4 col-sm-12 col-lg-4" key={index}>
                    <div className="card mt-2 mb-2">
                      <div className="card-header">
                        <h5 className="card-title text-center">{item.id} {item.title}</h5>
                      </div>
                      <div className="card-body">
                        <p className="text-success">
                          {item.body}
                        </p>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>

        <div className="row">
          <div className="col-md-12">
            <ReactPaginate pageCount =  {pageCount}
             className="pagination"
             pageClassName='page-item'
             pageLinkClassName='page-link'
             nextClassName='page-item'
             nextLinkClassName='page-link'
             previousClassName='page-item'
             previousLinkClassName='page-link'
             activeClassName='active'
             activeLinkClassName='active'
             onPageChange={handler}
            />
           
          </div>
        </div>
    </div>
  )
}

export default Ex2
