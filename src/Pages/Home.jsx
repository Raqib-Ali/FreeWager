import { useState } from 'react'
import { Card } from '../Components/Card'
import './Home.css'

export function Home() {

    const [categories, setCategories] = useState([{
        Category: "Ac Services",
        Discription: "Best AC Services near you"
    }]);

    return (
        <div>
            <div className="hero mb-2">
                <div className="col1">
                    <div className="title border-bottom border-success shadow rounded-4 p-4">
                        <h1 className="">Find a Wager<br /> at your Door Step!</h1>
                        <p className="">Looking for a Wager?<br /> Why not Free<span className="text-success">Wager</span> today?</p>
                    </div>
                </div>
                <div className="img">
                    <img src='5576597.jpg' />
                </div>
            </div>

            <div className='border-bottom'>
                <div>
                    <h3>Browse Categories</h3>
                </div>
                <div className='categories'>
                    {categories.map(category =>
                        <div className='cat-card rounded-2'>
                            <h3>{category.Category}</h3>
                            <p>{category.Discription}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className='border-bottom'>
                <h3>Recent Ads</h3>
                <div className='ads'>
                   
                </div>
            </div>
        </div>
    )
}