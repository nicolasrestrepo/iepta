import React from 'react';

function SellerProfileSmall({ seller }) {
    return (
        <div className="seller-profile">
            <figure>
                <img
                    src={seller.photo}
                    alt={`${seller.firstName} ${seller.lastName}`}
                    className="img-responsive img-circle"
                    style={{height: '170px'}}
                />
            </figure>
            <h4 className="text-center">
                {`${seller.firstName} ${seller.lastName}`}
            </h4>
        </div>
    );
}

export default SellerProfileSmall;