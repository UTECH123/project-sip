import React from 'react';
import home from "../images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Mari Membuat Design Anda Menjadi Lebih Baik' 
                imgsrc={home} 
                isCompName={true}
                compName=""
                visit='/services' 
                btnname="Download App" 
            />
        </>
    )
}

export default Home;