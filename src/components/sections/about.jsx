import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--cyan);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--cyan);
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(75%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello there! My name is Sanzio Monti and I am a mathematician who focused his studies
              in statistics while keeping an eye open toward software development: a mix that led me
              towards data science and now, as a Senior Python Engineer working on SDKs and toolkits
              at Unique.ai.
            </p>

            <p>
              {/* Fast-forward to today, and */}
              I've had the privilege of working at a{' '}
              <a href="https://www.thomsonreuters.com/">media conglomerate</a>, a{' '}
              <a href="https://www.takeda.com/">leading pharmaceutical company</a>, a{' '}
              <a href="https://mila.com/">Swiss start-up</a>, a{' '}
              <a href="https://post.ch/">state-owned service company</a>, and now at{' '}
              <a href="https://unique.ai">Unique.ai</a>, building an enterprise AI platform for
              financial services.
            </p>
            <p>
              In my free time I like to keep myself updated about what happens in the world and on
              technology development, to travel toward far-away destinations, and to snowboard on
              the wonderful Swiss mountains.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/sanzio.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
