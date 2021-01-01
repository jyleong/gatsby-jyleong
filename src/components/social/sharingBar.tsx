import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SocialItems, SocialItem, SocialLink } from '../shared/sharedStyles';

const SharingContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: left;
`;

const LineBreak = styled.hr`
  width: 100%;
`;

const BoldDiv = styled.div`
  font-weight: bold;
`;

const SharingBar: React.FC = ({ location, title }: any) => {
  const { href } = location;
  const fbUrl = `https://www.facebook.com/sharer.php?u=${href}`;
  const twitterUrl = `https://twitter.com/share?url=${href}`;
  const emailUrl = `mailto:?subject=${title}&body=Check out this site: ${href}`;
  const inUrl = `https://www.linkedin.com/shareArticle?url=${href}`;
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${title} ${href}`;
  
  return (
    <>
    <LineBreak />
    <BoldDiv>Share this post!</BoldDiv>
    <SharingContainer>
      <SocialItems>
        <SocialItem>
          <SocialLink
            href={twitterUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FaTwitter />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href={fbUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FaFacebookSquare />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href={emailUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <HiOutlineMail />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href={inUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink
            href={whatsAppUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <FaWhatsapp />
          </SocialLink>
        </SocialItem>
      </SocialItems>
    </SharingContainer>
    <LineBreak />
    </>

  )
}

export default SharingBar;
