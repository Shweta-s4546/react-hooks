import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'


const url = "https://fakestoreapi.com"

function Ex3(props) {
  const [products,setProducts] = useState([])

  const [currentItems,setCurrentItems] = useState([])
  const [itemOffset,setItemOffset] = useState(0)
  const [pageCount,setPageCount] = useState(0)

  const getProducts = async () => {
      fetch(`${url}/products`)
        .then(res => res.json())
        .then(out => {
          // console.log("products=", out)
          setProducts(out)
        }).catch(err => console.log(err.message))
  }

  useEffect(() => {
    getProducts()
    const endOffset = itemOffset + props.itemsPerPage 
    // console.log(`init offset = ${itemOffset} - end offset = ${endOffset}`)
    const data = products ? products.slice(itemOffset,endOffset) : []
  
    setCurrentItems(data)
    const pCount = Math.ceil(products.length / props.itemsPerPage)
    setPageCount(pCount)
  },[products])

  const handler = (e) => {
    console.log('item =', e.selected)
    const newOffset =Number(e.selected * props.itemsPerPage) % products.length;
    console.log("newoffset =", newOffset)
    setItemOffset(newOffset)
  }

  // if(!products)
  // return(

  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-12">
  //       <h5 className="text-success text-center">Error</h5>
  //       </div>
  //     </div>
  //   </div>
  // )




  return (
    <div className='container'>
      <div className="row">
    <div className="col-md-12 text-center">
        <h5 className="display-3 text-center text-success">
           Example-3
        </h5>
    </div>
    </div>

    <div className="row">
      {
        currentItems && currentItems.map((item,index) => {
          return(
              <div className="col-md-12" key={index}>
                <div className="card mt-2 mb-2" >
                  <div className="card-header">
                    <h5 className="text-warning"> Id = {item.id}</h5>
                  </div>
                  <div className="card-body">
                  
                  <h5 className="text-success">Title = {item.title}</h5>
                    <h5 className="text-success">Description = {item.description}</h5>
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

export default Ex3
