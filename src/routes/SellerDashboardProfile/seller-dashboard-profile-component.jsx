import React from 'react';
import SellerDasboarLayout, {Sidebar, Content} from '../../components/layouts/seller-dashboard';
import SellerNavbar from '../../components/SellerNavbar';

function SellerDashboardProfile() {
    return (
        <SellerDasboarLayout>
            <Sidebar><SellerNavbar/></Sidebar>
            <Content>
                Seller profile
            </Content>
        </SellerDasboarLayout>
    )
}

export default SellerDashboardProfile;