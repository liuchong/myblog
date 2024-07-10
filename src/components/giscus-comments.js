import React, { useEffect, useRef } from 'react';

const GiscusComments = () => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    const config = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'liuchong/myblog',
      'data-repo-id': 'MDEwOlJlcG9zaXRvcnk4MzEyNjIyMA==',
      'data-category': 'Giscus comments',
      'data-category-id': 'DIC_kwDOBPRnzM4CgszK',
      'data-mapping': 'pathname',
      'data-strict': '1',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'light',
      'data-lang': 'zh-CN',
      'crossorigin': 'anonymous',
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

export default GiscusComments;
