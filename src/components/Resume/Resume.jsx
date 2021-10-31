import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../assets/_Ben Papac Dev Resume.pdf';

const Resume = () => {
    return (
        <div className="pdf">
            <Document file={resume} >
                <Page pageNumber={1}></Page>
            </Document>
        </div>
    );
};

export default Resume;