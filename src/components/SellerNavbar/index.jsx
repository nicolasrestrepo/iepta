import React from 'react';
import { Nav } from 'react-bootstrap';
import SellerNewBtn from '../seller-new-btn';
import { Link } from 'react-router-dom';

function SellerNavbar() {
    return (
        <React.Fragment>
            <SellerNewBtn /> <br />
            <Nav bsStyle="pills" stacked>
                <li>
                    <Link to="/seller/products">
                        Mis Productos
                    </Link>
                </li>
                <li>
                    <Link to="/seller/orders">
                        Mis Ordenes
                    </Link>
                </li>
            </Nav>
        </React.Fragment>
    );
}

export default SellerNavbar;