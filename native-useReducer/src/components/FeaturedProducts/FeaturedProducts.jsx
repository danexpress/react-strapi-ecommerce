import React from 'react'
import Card from '../Card/Card';
import "./FeaturedProducts.scss"
import useFetch from '../hooks/useFetch';

  


const FeaturedProducts = ({type}) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`

    )
 

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1> {type} products</h1>
            <p>
            Upgrade your wardrobe with our versatile and stylish UrrBAN! 
            Made from high-quality materials, this URRRban is perfect for any occasion. 
            Whether you're dressing up for a night out or keeping it casual on the weekends, 
            our UrrBAN has got you covered. Available in a variety of colors and sizes, 
            so you can find the perfect fit for your unique style. Shop now and elevate your fashion game!
            </p>
        </div>
        <div className="bottom">
            {error
            ?"Something went wrong?"
            :loading
            ? "loading": 
            data.map((item )=> (<Card item={item} key={item.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedProducts