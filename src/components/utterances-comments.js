import React, { useEffect, useRef } from 'react';

const UtterancesComments = () => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: 'liuchong/myblog',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    setTimeout(() => {
      ref.current.append(script);
    }, 300);
  }, []);

  return <div ref={ref} />;
};

export default UtterancesComments;
