import { useCard } from "../context/CardContext";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    const cardContext = useCard();
    return (
        <nav className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img className="col-5 col-lg-auto mb-3 mb-lg-0 me-lg-3" src="src\assets\myntra.jpg" width={100} height={50} alt="" />
                    <span className="nav-item">Myntra</span>
                </Link>
                <form className="col-5 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>
                <MenuList />
                <button className="btn btn-primary col-5 col-lg-auto mb-3 mb-lg-0 me-lg-3" >
                    Card ({cardContext?.cardItems.length})
                </button>
            </header>
           
        </nav>
    );
}

export default Header;
