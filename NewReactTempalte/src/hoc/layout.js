import React from 'react';
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

const dashboardRoutes = [];

const Layout = (props) => {
    return (
        <div>
            {/* <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Vital Clinic"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}    
            /> */}
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;