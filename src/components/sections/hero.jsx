import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { loaderDelay } from '@utils';
import { useMounted } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--cyan);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  a {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    padding: 1rem;
  }
`;

const Hero = () => {
  const isMounted = useMounted(250);

  const one = <h1>Hi! I am</h1>;
  const two = <h2 className="big-heading">Sanzio Monti</h2>;
  const three = <h3 className="big-heading">Data Scientist & Developer</h3>;
  const four = (
    <p>
      Technology enthusiast with a passion for data and programming
      <br /> Currently a Senior Python Engineer at{' '}
      <a href="https://unique.ai" target="_blank" rel="noreferrer">
        Unique.ai
      </a>
    </p>
  );
  const five = (
    <a href={`#contact`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
