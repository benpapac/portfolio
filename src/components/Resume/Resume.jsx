import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../assets/_Ben Papac Dev Resume.pdf';

const Resume = () => {
    return (
        <>
            <Document file={resume} >
                <Page pageNumber={1}></Page>
            </Document>
        </>
    );
};

export default Resume;