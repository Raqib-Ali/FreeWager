import { useParams } from 'react-router-dom';
import './Ad.css'
import { useEffect, useRef, useState } from 'react';
export function Ad() {

    const param = useParams();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    const countRef = useRef(0);


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



    useEffect(() => {
        loadData();

        // const interval = setInterval(function imageSlider() {

        //     console.log(images.length);
        //     console.log(countRef.current);

        //     if (images.length - 1 === countRef.current) {
        //         setCount(0)
        //     } else {
        //         setCount((prevCount) => {
        //             const updatedCount = prevCount + 1;
        //             countRef.current = updatedCount; // Update the ref
        //             return updatedCount;
        //         }

        //         )

        //     }

        // }, 3000);

        // return () => {
        //     clearInterval(interval);
        // }

    }, [])

    console.log("hi");

    async function loadData() {
        try {
            const response = await fetch(`https://dummyjson.com/product/${param.id}`);
            const data = await response.json();
            setProduct(data);
            setImages(data.images);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }


    function handleImages(e) {

        if (e.target.id === "left") {
            if (count >= 1) {
                setCount((prev) => prev - 1)

            } else {
                setCount(images.length - 1);
            }
        } else {
            if (images.length - 1 === count) {
                setCount(0)

            } else {
                setCount((prev) => prev + 1)

            }
        }
    }







    return (
        <div>
            <h1>{String(product.category).toUpperCase()}</h1>
            <div className="ad-layout">
                <div>
                    <div className="position-relative">
                        <img className='' src={images[count]} />
                        {(images.length > 1) ? <div className='next-button'>
                            <button onClick={(e) => { handleImages(e) }} id='left' className='bi bi-arrow-left rounded-5  border border-1'></button>
                            <button onClick={(e) => { handleImages(e) }} className='bi bi-arrow-right rounded-5  border border-1'></button>

                        </div> : null}
                    </div>
                    <div className='bg discription border border-2 rounded-2 mt-3'>
                        <div className='fs-2 fw-medium p-2  border-bottom'>Description</div>
                        <div className='p-2'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="bg pricing border border-2 rounded-2">
                        ${product.price}
                    </div>
                    <div className=' bg Service-man border border-2 rounded-2'>
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