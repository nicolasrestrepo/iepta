import React from 'react';
import SellerDashboardLayout, { Content, Sidebar } from '../../components/layouts/seller-dashboard';
import SellerNavbar from '../../components/SellerNavbar';
import OrderTable from '../../components/order-table';

function SellerOrderListComponent() {
    const order = {
        product: 'Papa corazon de fuego',
        unitPrice: '6700',
        amount: '2',
        totalPrice: '13400',
    };

    const orderList = [];

    for (let id = 0; id <= 20; id++) {
        orderList.push({ ...order, id });
    }

    console.log('list', orderList);

    return (
        <SellerDashboardLayout>
            <Sidebar>
                <SellerNavbar />
            </Sidebar>
            <Content>
                <OrderTable orders={orderList}/>
            </Content>
        </SellerDashboardLayout>
    );
}

export default SellerOrderListComponent;