import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import List from '../../components/List/List'
import './Products.scss'
import useFetch from '../../components/hooks/useFetch'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(100)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading,error} = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`)
  
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats (
      isChecked
      ? [...selectedSubCats, value]
      : selectedSubCats.filter((item) => item !== value)
    )
  }

  console.log(selectedSubCats)



  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
          <div className="inputItem" key={item.id}>
          <input 
            type="checkbox" 
            name="" 
            id={item.id}  
            value={item.id} 
            onChange={handleChange}
          />
          <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>))}
          
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) =>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input 
              type="radio" 
              name="price" 
              value='asc' 
              id="asc" 
              onChange={(e)=>setSort('asc')}
             />
            <label htmlFor='asc'>Price (lowest first) </label>
          </div>
          <div className="inputItem">
            <input 
              type="radio" 
              value='desc' 
              name="price" 
              id="desc" 
              onChange={(e)=>setSort('desc')}
            />
            <label htmlFor='asc'>Price (Highest first) </label>
          </div>
          
        </div>
      </div>
      <div className="right">
        <img
          className='catImg'
          src='https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=""
          />
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products