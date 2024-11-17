import './Ad.css'
import { useState } from 'react';
export function Ad() {

    const [ads, setAds] = useState({

        Name: "Raqib Ali",
        Discription: "I will design responsive wordpress business website, wordpress website development",
        Pricing: "$500",
        Image: "../ad-image.png",
        Rating: "5.0"

    });

    return (
        <div>
            <h1>Ad</h1>
            <div className="ad-layout">
                <div>
                    <h2>{ads.Discription}</h2>
                    <img src="../ad-image.png" alt="" />
                    <div className='discription border border-1 mt-3'>
                        <div className='fs-1 fw-medium p-2 border border-1'>Discription</div>
                        <div className='p-2'>
                            <pre>{ads.Discription}</pre>
                        </div>
                    </div>
                </div>
                <div className='border border-1'>
                    <div className="pricing">
                        {ads.Pricing}
                    </div>
                    <div>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}