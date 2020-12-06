import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
const Blog = () => {
  return (
    <Layout>
      <SEO title='blogpost'/>
      {/* Blog content */}
      <p>This is the blog template</p>
    </Layout>
  )
};

export default Blog;

