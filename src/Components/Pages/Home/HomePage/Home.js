import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header'
import Banner from '../Banner/Banner';
import ProductsInHomePage from '../ProductsHome/ProductsInHomePage';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <ProductsInHomePage></ProductsInHomePage>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;