import {CartWidget} from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">
                <h2 className="navbar-brand">JS Optical</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active " aria-current="page" href="#">Item 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Item 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Item 3</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}