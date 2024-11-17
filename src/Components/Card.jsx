import './Card.css';

export function Card(prop) {

    return (
        <div className='ad-card '>
            <img src={prop.data.Image} alt="" />
            <div>
                <h4>{prop.data.Name}</h4>
                <p>{prop.data.Discription}</p>
                <span className='bi bi-star-fill'></span> <span>{prop.data.Rating}</span>
            </div>
        </div>
    )
}