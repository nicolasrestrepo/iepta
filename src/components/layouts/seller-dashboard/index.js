import React from 'react';
import './styles.scss';
import { Grid, Row } from 'react-bootstrap';

export function Content(props) {
    return (
        <main className="content">
            <Grid fluid>
                <Row>
                    {props.children}
                </Row>
            </Grid>
        </main>
    );
}

export function Sidebar(props) {
    return (
        <aside className="navbar">
            {props.children}
        </aside>
    );
}

function SellerDashboardLayout(props) {
    return (
        <section className="seller-dashboard">
            {props.children}
        </section>
    );
};

export default SellerDashboardLayout;