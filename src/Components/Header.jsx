import { Link, useLocation } from "react-router-dom";
import './Header.css';
import { useState } from "react";

export function Header(){
    const location = useLocation();
    const hideHeaderForPaths = ['/login', '/signup']; // Add the paths where you want to hide the header
    const [prop, setProp] = useState(false);
    const isLogin = false;
    const isWager = false;

    function navToggle(){
          setProp(!prop);
          console.log(prop)
    }

    function closeNav(){
        if(prop){
            setProp(!prop);
        }
    }

    if (hideHeaderForPaths.includes(location.pathname)) {
        return null; // or return <></> for an empty fragment
      }else{
        return(
            <header className="border-bottom position-sticky top-0 z-3 header">
                <div className="d-flex justify-content-between px-3 py-2 bg-light align-items-center">
                    <Link to={"/"} className="text-decoration-none text-dark"><h3 className="logo mb-0">Free<span className="text-success">Wager</span></h3></Link>
                    <form className="w-50 ">
                        <div className="input-group">
                            <input className="form-control border border-success border-1" placeholder="Search Plumber, Electrician and more..." type="search" name="" id="" />
                            <button className="bi bi-search btn btn-success"></button>
                        </div>
                    </form>
                    <nav id="menu" className={"navigation"} data-visible={prop}>

                        {
                            (!isLogin)?<span><Link onClick={closeNav} to={'/login'} className="fw-medium text-decoration-none text-dark">Sign in</Link></span>:null

                        }

                        {

                            (!isLogin || !isWager)?<span><Link onClick={closeNav} to={'ads/category'} className="border border-4 border-success rounded-5 py-1 px-3 fw-medium text-decoration-none text-dark">Become Wager</Link></span>:null

                        }
                    </nav>
                    <button className="button" onClick={navToggle} aria-controls="menu" aria-expanded={prop} ><span className="bi bi-justify"></span></button>
                </div>
            </header>
        )
      }

    
}