import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../assets/_Ben Papac Dev Resume.pdf';
import './Resume.css';

const Resume = () => {
    return (
        <>
        <a className='resume-link' href="../../assets/Ben Papac Resume.pdf" download>Download
        </a>
        <div className="pdf">
            <Document file={resume} >
                <Page pageNumber={1}></Page>
            </Document>
        </div>
        </>
    );
};

export default Resume;