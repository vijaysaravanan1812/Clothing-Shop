// MenuList.tsx
import { Link } from "react-router-dom";

const MenuList: React.FC = () => {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products-page">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about-page">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact-page">Contact us</Link>
                </li>
            </ul>
        </div>
    );
}

export default MenuList;