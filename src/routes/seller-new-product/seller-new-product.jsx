import React from 'react';
import ProductForm from '../../components/forms/product';
import { Content, Sidebar } from '../../components/layouts/seller-dashboard';
import SellerNavbar from '../../components/SellerNavbar';
import SellerDashboardLayout from '../../components/layouts/seller-dashboard';

function SellerNewProduct() {
    return (
        <SellerDashboardLayout>
            <Sidebar>
                <SellerNavbar />
            </Sidebar>
            <Content>
                <ProductForm />
            </Content>
        </SellerDashboardLayout>
    );
}

export default SellerNewProduct;