import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './Carousel.css'


export function CarouselExample(props){

    var items = [
        {
            name: "AC Services",
            image: "ac-service.jpg"
        },
        {
            name: "Carpeneter",
            image: "carpenter.jpg"
        },
        {
            name: "Electricians",
            image: "electrician.jpg"
        },
        {
            name: "Home Renovate",
            image: "renovate-home.jpg"
        }
    ]

    return (
        <Carousel indicators={false} className='box'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}


function Item(props)
{
    return (
        <div className='hea'>
          
            <div>
                <img className='image' src={props.item.image} alt="" />
            </div>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </div>
    )
}
