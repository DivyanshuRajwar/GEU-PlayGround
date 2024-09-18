import React from 'react'
import DocumentaionPage from './DocumentaionPage';

function CodingDocumentation() {
    const language = localStorage.getItem('preferredLanguage');
  return (
    <div className='width height overflow-x-auto'>
      {
        language ==='Java' ?(
            <div>Java DocumentaionPage</div>
        ):(
          <DocumentaionPage />
        )
    }
    </div>
  )
}

export default CodingDocumentation
