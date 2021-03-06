import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../cart/CartWidget";
import logo from '../../assets/img/mate.png';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">
                        <img src={logo} alt="Online shop Icon" className="iconNav" />
                        ArgenSteam
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-3 align-items-center">
                            <NavLink activeClassName="active" className="nav-link nav-item" to="/category/games">
                                Juegos
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link nav-item mb-2 mb-sm-0" to="/category/hardware">
                                Hardware
                            </NavLink>

                            <NavLink className="nav-link nav-item active" to="/cart">
                                <CartWidget />
                            </NavLink>

                            <NavLink className="nav-link nav-item active" to="/user">
                                <FontAwesomeIcon icon={faUser} className="cart" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;