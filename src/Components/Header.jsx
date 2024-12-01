import { Link } from "react-router-dom";

export function Header(){

    return(
        <header className="border-bottom position-sticky top-0">
            <div className="d-flex justify-content-between px-3 py-2 bg-light align-items-center">
                <Link to={"/"} className="text-decoration-none text-dark"><h2>Free<span className="text-success">Wager</span></h2></Link>
                <nav>
                    <span className="me-3 fs-5 fw-medium">Find Wager</span>
                    <span className="me-3 fs-5 fw-medium">Sign In</span>
                    <span className="me-3 fs-5 fw-medium border border-2 border-success rounded-3 px-2 py-1">Join</span>
                </nav>
            </div>
        </header>
    )
}