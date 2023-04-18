import React from 'react';
import web from './Images/technical-support-137-1087325.png';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common 
            name='Welcome to About page' 
            imgsrc={web} 
            visit='/contact' 
            btn_name='Contact Now'/>
        </>
    );
};

export default About;