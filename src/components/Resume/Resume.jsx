import React from 'react';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../assets/_Ben Papac Dev Resume.pdf';

const Resume = () => {
    return (
        <>
            <Document file={resume} />
        </>
    );
};

export default Resume;