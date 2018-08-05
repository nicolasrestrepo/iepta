import React from 'react';
import SellerNavbar from '../../components/SellerNavbar';
import SellerDashboardLayout, {Sidebar, Content} from '../../components/layouts/seller-dashboard';

function SellerDashboardHome() {
    return (
        <SellerDashboardLayout>
            <Sidebar>
                <SellerNavbar />
            </Sidebar>
            <Content>
                Home Dashboard
            </Content>
        </SellerDashboardLayout>
    );
}

export default SellerDashboardHome;