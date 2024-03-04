import React from 'react';
import Resume_pdf from '../assets/pdf/gaurav_resume.pdf';

function Resume() {  
  return (
    <div className="resume">
      <embed
        src={`${Resume_pdf}#&navpanes=0&scrollbar=0
        `}
        type="application/pdf" 
        style={{ margin: '0', padding: '0', border: 'none' , backgroundColor : '#ffffff' }}
      />
    </div>
  );
}

export default Resume;
