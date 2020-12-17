import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme as ThemeStyle, mixins } from '../../styles';
import { ThemeContext } from '../../context/theme';
import { WritingListProps } from '../../types';
import TagDivs from '../../components/shared/tags';
import {
  BlogPostCard,
  TitleH3Link
} from '../../components/shared/sharedStyles';

const { colors } = ThemeStyle;

const SectionContainer = styled.div`
  ${mixins.sectionContainer};
  background-color: ${(props) => props.theme === 'dark' ? colors.secondaryBackgroundDark : colors.secondaryBackground };
  ${mixins.flexCenter};
  display: grid;
  border-radius: 5px;
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const TitleH2 = styled.h2`
  text-align: center;
  width: 100%;
  position: relative;
  display: block;
`;

const WritingsLink = styled(Link)`
  text-align: center;
  ${mixins.inlineLink};
`;

const SectionWriting: React.FC<WritingListProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <SectionContainer id='writing' theme={theme}>
      <TitleH2>Recent Writings</TitleH2>
      <ListContainer>
        {props.posts.map((p) => {
          const { id, date, slug, tags, title } = p;
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
              <TitleH3Link>{title}</TitleH3Link>
              <p>{formattedDate}</p>
              <TagDivs tags={tags} theme={theme}/>
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
