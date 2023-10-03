import React from 'react'
import { useState } from "react"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import './Slider.scss'
import useFetch from '../hooks/useFetch';

const Slider = () => {
    const { data, loading, error } = useFetch(
        `/categories?populate=*`

    )

    const [currentSlide, setCurrentSlide] = useState(0)

    

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev - 1);
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0: (prev) => prev + 1);

    }


  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {error
            ?"Something went wrong?"
            :loading
            ? "loading": 
            data.map((item )=>  <img src={import.meta.env.VITE_API_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />)}
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider