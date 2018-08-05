import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SellerNewBtn() {
    const btnContent = (
        <span>
            <i className="fa fa-plus" /> Nuevo
        </span>
    );

    return (
        <DropdownButton
            id="dropdown-seller-new-btn"
            style={{ width: '100%' }}
            title={btnContent}
        >
            <li>
                <Link to="/seller/new/products">
                    Product
                </Link>
            </li>
        </DropdownButton>
    );
}

export default SellerNewBtn;