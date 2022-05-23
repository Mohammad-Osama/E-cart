import React, {useEffect, useState} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AllFood from "../images/allfood.jpg"
import ProductsList from "../components/ProductsList"
import PriceRangeSlider from '../components/PriceRangeSlider'
import ProductSorter from '../components/ProductSorter'
import SearchByCat from '../components/SearchByCat'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import {getProducts} from '../Redux/actions'

const PGallery = ({products, getAll, getProducts, category, sort, price, page, limit}) => {
  const [cat, setCat] = useState("All")

 useEffect(()=>{
   getProducts(category, sort.query, price, page, limit)
   console.log("am trying to get all products")
 },[])

  return (
    <React.Fragment>
    <Announcement/>
    <Navbar/>
    <BreadCrumb img={AllFood} cat={cat} catDesc={"Shop Through Millons Of Our Finest Products"}/>
    <div className='row justify-content-around align-items-center Categories-Filter px-4 pt-5 pb-3 m-0' >
        <div className="col-md-4 pt-3">
         <SearchByCat/>
        </div>
        <div className="col-md-4 SearchByCat">
            <PriceRangeSlider/>
        </div>
        <div className="col-md-4 Sort mt-3 mt-md-0">
            <ProductSorter/>
        </div>  
    </div>
    <div className="container">
      <div className="row justify-content-around align-items-center">
        
          <ProductsList products={products} name={"Our Products"}/>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

function mapStateToProps({products, categories}){
  return{
    products: products.products,
    nextPage: products.nextPage,
    previousPage: products.previousPage,
    totalDocuments: products.totalDocuments,
    totalPages: products.totalPages,
    category: categories.category,
    sort: categories.sort,
    price: categories.price,
    page: categories.page,
    limit: categories.limit
  }
}

export default connect(mapStateToProps, {getProducts})(PGallery)