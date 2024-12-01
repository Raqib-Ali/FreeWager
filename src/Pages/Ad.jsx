import './Ad.css'
import { useState } from 'react';
export function Ad() {

    const [ads, setAds] = useState({

        Name: "Raqib Ali",
        Discription: "Best Ac service in the Bareilly",
        Pricing: "$500",
        Image: "../ad-image.png",
        Rating: "5.0",
        ServiceMan: 'Yusuf Estes',
        Category: 'AC Service',
        Location: 'Zakhira, Bareilly 243001'
    });

    return (
        <div>
            <h1>{ads.Category}</h1>
            <div className="ad-layout">
                <div>
                    <img src="../ad-image.png" alt="" />
                    <div className='discription border border-2 rounded-2 mt-3'>
                        <div className='fs-2 fw-medium p-2  border-bottom'>Discription</div>
                        <div className='p-2'>
                            <pre>{ads.Discription}</pre>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="pricing border border-2 rounded-2">
                        {ads.Pricing}
                    </div>
                    <div className='Service-man border border-2 rounded-2'>
                        <div className='d-flex align-items-center'>
                            <div className='seller-prof'><img className='' src="" alt="" /></div>
                            <div className='fs-4'>{ads.ServiceMan}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}