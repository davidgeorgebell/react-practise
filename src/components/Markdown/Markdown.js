import React, { useState } from 'react';

import './Markdown.css';

export const Markdown = () => {
  const [markdown, setMarkdown] = useState('# Hi');
  return (
    <div className='markdown-wrapper'>
      <textarea onChange={e => setMarkdown(e.target.value)} value={markdown} />
      <div className='preview'>{markdown}</div>
    </div>
  );
};

/* =======================
This app requires a markdown package
============================== */
