import React from 'react'
import "./Categories.scss"
import { Link } from "react-router-dom"


const Categories = ({type}) => {
    
    
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
            
            <button>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
               <button>
                <Link className="link" to="/products/2">
                    New Season
                </Link>
                </button> 
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w-1600" alt="" />
                <button>
                <Link className="link" to="/products/3">
                    Men
                </Link>
                </button> 
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                <Link className="link" to="/products/4">
                    Accessories
                </Link>
                </button> 
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                        <Link className="link" to="/products/5">
                            Women
                        </Link>
                         </button> 
                    </div>
                </div>
                
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                <Link className="link" to="/products/6">
                    Shoe
                </Link>
                </button> 
            </div>
        </div>
    </div>
  )
}

export default Categories