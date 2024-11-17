import { useState } from "react";
import { Card } from "../Components/Card";
import './Ads.css'

export function Ads() {

    const [categories, setCategories] = useState(["AC Services", "Refrigerator Repair", "Painter", "Construction"]);
    const [ads, setAds] = useState([{

        Name:"Raqib Ali",
        Discription:"Aspiring Frontend Developer",
        Image: "../ad-image.png",
        Rating: "5.0"

    }]);
    

    return (
        <div>
            <div className="cat-nav border border-1">
                {categories.map(category => 
                    <div>{category}</div>
                )}
            </div>
            <h1>Ac Services</h1>
            <div className="card-wraper">
                {ads.map(adDetails => <Card data={adDetails} />)}
            </div>
        </div>
    )
}