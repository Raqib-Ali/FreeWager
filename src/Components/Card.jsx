import { Link } from 'react-router-dom';
import './Card.css';

export function Card(prop) {

    if (prop) {
        return (
            <div className='ad-card '>
                {prop?<Link className='text-decoration-none text-black' to={`/ad/${prop.data.id}`}> 
                    <img src={prop.data.thumbnail} alt="" />
                    <div>
                        <h4>{prop.data.title}</h4>
                        <span className='bi bi-star-fill'></span> <span>{prop.data.rating}</span>
                    </div>
                </Link>:null}
            </div>
        )
    }
}