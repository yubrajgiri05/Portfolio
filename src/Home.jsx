import React from 'react';
import web from './Images/home.svg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
            name='Grow your business with' 
            imgsrc={web} 
            visit='/service' 
            btn_name='Get Started'/>
        </>
    );
}

export default Home;