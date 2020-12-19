import React from 'react';
import config from '@config';
import styled from 'styled-components';
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { theme, media } from '@styles';


const SocialContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const SocialItems = styled.div`
  display: flex;
`;

const SocialItem = styled.div`
`;

const SocialLink = styled(OutboundLink)`
  padding: 7px;
  color: ${theme.colors.primaryGray};
  display: flex;
  transition: ${theme.transition};
  font-size: ${theme.fontSizes.xxlarge};
  ${media.thone`font-size: ${theme.fontSizes.xlarge};`};
  &:hover,
  &:focus {
    transform: translateY(-5px);
    color: ${theme.colors.primaryAccent};
  }
`;

const Social: React.FC = () => {
  const { socialMedia } = config;
  return (
    <SocialContainer>
    <div>Connect with me</div>
    <SocialItems>
      {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <SocialItem
                key={i}
                style={{ transitionDelay: `${i * 50 + theme.fadeinOffset}ms` }}
                className="fadein">
                <SocialLink
                  title={name}
                  href={url}
                  target="_blank"
                  aria-label={name}
                  rel="nofollow noopener noreferrer">
                  {(name === 'Github') ? <FaGithub /> : (name === 'LinkedIn') ? <FaLinkedinIn /> : <FaInstagram />}
                </SocialLink>
            </SocialItem>
        ))}
    </SocialItems>
    </SocialContainer>
  );
};

export default Social;
