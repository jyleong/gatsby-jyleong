import React from 'react';
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby' 


interface HeadProps {
  title: string,
  description: string,
  siteUrl: string,
  author?: string,
}
/*
Can send this query down from layout when fully fleshed
*/
const Head: React.FC<HeadProps> = (props) => {
  const { title, description, siteUrl } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={siteUrl} />


      <meta property='og:url' content={siteUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  )
};


export default Head;
