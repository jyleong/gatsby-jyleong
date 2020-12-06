import React from 'react';
// import { Link } from "gatsby";

import Layout from '../components/layout';
import Content from '../components/content';
// import Image from "../components/image";
import SEO from '../components/seo';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title='Home' />
    <Content />
  </Layout>
);

export default IndexPage;
