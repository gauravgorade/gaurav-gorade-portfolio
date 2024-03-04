import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import seoData from '../Data/seoData.json';

const Seo = ({ children, url }) => {
  const [seo, setSeo] = useState({
    seo_title: null,
    seo_description: null,
  });

  useEffect(() => {
    const currentPage = seoData.find(page => page.url === url) || {};
    setSeo({
      seo_title: currentPage.title,
      seo_description: currentPage.description,
    });
  }, [url]);

  const { seo_title, seo_description } = seo;
  
  return (
    <>
      <Helmet>
        <title>{seo_title}</title>
        <meta name="description" content={seo_description} />
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
