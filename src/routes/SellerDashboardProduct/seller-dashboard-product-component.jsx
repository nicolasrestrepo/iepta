import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import SellerDashboardLayout, { Content, Sidebar } from '../../components/layouts/seller-dashboard';
import SellerNavbar from '../../components/SellerNavbar';
import ProductCard from '../../components/product-card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SellerDashboardProductComponent extends Component {
    productsRef = firebase.firestore().collection('/products');
    state = {
        products: [],
    };

    async componentDidMount() {
        try {
            await this.fetchProducts();
        } catch (e) {
            console.log(e);
        }
    }

    async fetchProducts() {
        try {
            const products = await this.productsRef.where('seller', '==', '/sellers/yc9LJrRCEUGq79aEcH2M').get();
            const nextProducts = [];
            products.forEach((product) => {
                nextProducts.push(product.data());
            });
            this.setState({ products: nextProducts });
        } catch (e) {
            console.log(e);
        }
    }

    renderProducts = () => {
        const { products } = this.state;
        return products.length > 0 ?
            products.map((product) => (
                <Col xs={12} sm={6} md={4}>
                    <ProductCard product={product} />
                </Col>
            )) :
            (<div className="text-center">
                <i className="fa fa-frown-o fa-3x" />
                <p>No tienes productos aun</p>
                <Link to="/seller/new/products" className="btn btn-primary">
                    <i className="fa fa-plus"/> Nuevo Producto
                </Link>
            </div>);
    };

    render() {
        return (
            <SellerDashboardLayout>
                <Sidebar>
                    <SellerNavbar />
                </Sidebar>
                <Content>
                    {this.renderProducts()}
                </Content>
            </SellerDashboardLayout>
        );
    }
}

export default SellerDashboardProductComponent;