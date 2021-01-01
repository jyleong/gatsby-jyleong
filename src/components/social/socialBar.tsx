import React from 'react';
import config from '@config';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { theme } from '@styles';
import { SocialContainer, SocialItems, SocialItem, SocialLink } from '../shared/sharedStyles';


const SocialBar: React.FC = () => {
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

export default SocialBar;
