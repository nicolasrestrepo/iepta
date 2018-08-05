import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';

// routes
import Home from './Home';
import ProductDetail from './ProductDetail';
import SellerDashboardHome from './SellerDashboardHome';
import SellerDashboardProfile from './SellerDashboardProfile';
import SellerDashboardProduct from './SellerDashboardProduct';
import SellerNewProduct from './seller-new-product/seller-new-product';
import SellerOrderList from './seller-order-list';
import Checkout from './checkout'

function AppRoutes() {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product-detail/:id" component={ProductDetail} />
                <Route exact path="/seller" component={SellerDashboardHome} />
                <Route exact path="/seller/profile" component={SellerDashboardProfile} />
                <Route exact path="/seller/products" component={SellerDashboardProduct} />
                <Route exact path="/seller/new/products" component={SellerNewProduct} />
                <Route exact path="/seller/orders" component={SellerOrderList} />
                <Route exact path="/checkout" component={Checkout} />
            </Switch>
        </App>
    );
}

export default AppRoutes;
