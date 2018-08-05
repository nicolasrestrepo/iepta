import React from 'react';
import './styles.scss';

function StarsStat({ num }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <ul className="list-inline">
            {stars.map((star) => star <= num ?
                (<li className="on" key={star}><i className="fa fa-star" /></li>) :
                (<li key={star}><i className="fa fa-star" /></li>),
            )}
        </ul>
    );
}

export default StarsStat;