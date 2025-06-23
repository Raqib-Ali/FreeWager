import { useState, useEffect } from 'react'
import { Card } from '../Components/Card'
import './Home.css'
import { CarouselExample } from '../Components/Carousel';

export function Home() {

    const [categories, setCategories] = useState([{
        Category: "Ac Services",
        Discription: "Best AC Services near you"
    },
    {
        Category: "Ac Services",
        Discription: "Best AC Services near you"
    },
    {
        Category: "Ac Services",
        Discription: "Best AC Services near you"
    },
    {
        Category: "Ac Services",
        Discription: "Best AC Services near you"
    },
    {
        Category: "Ac Services",
        Discription: "Best AC Services near you"
    }


    ]);

    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products").then((response) => {
            return response.json();
        }).then(data => {
            console.log(data)
            setAds(data.products)
        })

    }, [])

    return (
        <div>

            {/* Hero Section */}

            <div className="hero">
                <div className="col1 rounded-4">
                    <div className="title border-bottom border-success shadow rounded-4">
                        <h1 className="">Find a Wager<br /> at your Door Step!</h1>
                        <p className="">Looking for a Wager?<br /> Why not Free<span className="text-success">Wager</span> today?</p>
                    </div>
                </div>
                <div className="img">
                    {/* <img src='5576597.jpg' /> */}
                    <CarouselExample />
                    
                </div>
            </div>

            <div className='containers'>
                <div>
                    <h2 className='h2'>Browse Services</h2>
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

            <div className='border-bottom containers'>
                <h2 className='h2'>Recent Services</h2>
                <div className='ads'>
                    {ads.map(adDetails => <Card data={adDetails} />)}
                </div>
            </div>
        </div>
    )
}