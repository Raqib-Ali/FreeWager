import { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import './Ads.css'

export function Ads() {

    const [categories, setCategories] = useState(["AC Services", "Refrigerator Repair", "Painter", "Construction"]);
    const [ads, setAds] = useState([{}]);

    // useEffect(()=>{
    //   loadData();
    //   console.log("hi")
    // }, [])

    (function loadData(){
        fetch("https://dummyjson.com/products").then((response)=>{
            return response.json();
        }).then(data => {
            setAds(data.products)
        })
    })();
    

    return (
        <div>
            <nav className="cat-nav border border-1">
                {categories.map(category => 
                    <div className="">{category}</div>
                )}
            </nav>
            <h1>Ac Services</h1>
            <div className="card-wraper">
                {(ads)?ads.map(adDetails => <Card data={adDetails} />):null}
            </div>
        </div>
    )
}