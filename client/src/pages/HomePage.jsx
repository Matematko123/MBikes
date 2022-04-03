import React from 'react';

import BikeSlider from '../components/BikeSelect/BikeSlider';
import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <BikeSlider></BikeSlider>
      <Categories></Categories>
      <Products
        children={undefined}
        category={undefined}
        filters={undefined}
        sort={undefined}
      />
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
