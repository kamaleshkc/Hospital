import Footer from "components/Footer/Footer";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "components/NavBar/index"
import Body from "components/Body/index"
import { Carousel } from "components/Carousel";
import Header from "components/Header";
const index = () => {
  
   

  return (
    <div
      style={{
            
      
      }}
    >
      <Header/>
      <NavBar></NavBar>
      <Carousel />

      <Body></Body>
      
     <Footer></Footer>
    </div>
  );
};

export default index;
