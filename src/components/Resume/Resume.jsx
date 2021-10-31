import React from 'react';
import {Document} from 'react-pdf';

const Resume = () => {
    return (
        <>
            <Document file='../../assets/_Ben Papac Dev Resume.pdf'/>
        </>
    );
};

export default Resume;