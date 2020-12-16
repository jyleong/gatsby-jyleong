import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme, mixins } from '../../styles';

interface BlogPost {
  title: string,
  date: string,
  id: string,
  slug: string,
}
interface WritingListProps {
  posts: BlogPost[]
}

const SectionContainer = styled.div`
  ${mixins.sectionContainer};
  background-color: ${theme.colors.secondaryBackground};
  ${mixins.flexCenter};
  display: grid;
  border-radius: 5px;
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const BlogPostCard = styled.div`
  ${mixins.divShadow};
`;

const TitleH2 = styled.h2`
  text-align: center;
  width: 100%;
  position: relative;
  display: block;
`;

const TitleH3 = styled.h3`
  ${mixins.inlineLink};
`;

const WritingsLink = styled(Link)`
  text-align: center;
  ${mixins.inlineLink};
`;

const SectionWriting: React.FC<WritingListProps> = (props) => {
  return (
    <SectionContainer id='writing'>
      <TitleH2>Recent Writings</TitleH2>
      <ListContainer>
        {props.posts.map((p) => {
          const { id, date, slug, title } = p;
          const yr = date.split("-")[0];
          const blogPath = `/blog/${yr}/${slug}`;
          let dateObj: Date;
          let formattedDate: string = '';
          if (date) {
            dateObj = new Date(date);
            formattedDate = dateObj.toDateString();
          }
          return (
            <BlogPostCard key={id}>
              <Link
                to={blogPath}
              >
              <TitleH3>{title}</TitleH3>
              <p>{formattedDate}</p>
              </Link>
            </BlogPostCard>
          )
        })}
      </ListContainer>

      <WritingsLink to='/writings/'>More writing ➤</WritingsLink>
    </SectionContainer>
  );
};

export default SectionWriting;
