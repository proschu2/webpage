import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';

const StyledSkillsSection = styled.section`
  max-width: 1000px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const SectionTitle = styled.h3`
  text-align: center;
  color: var(--lightest-slate);
  font-size: var(--fz-lg);
  margin: 2rem 0 1rem;
`;

const Skill = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid var(--light-slate);
  border-radius: 0.75rem;
  color: #fff;
  font-size: var(--fz-sm);
  margin: 0.5rem;
  overflow: hidden;
`;

const SkillIcon = styled.div`
  width: 3.5rem;
  padding: 1rem;
  height: 3.5rem;
  overflow: hidden;
`;

const SkillName = styled.p`
  padding-right: 1rem;
  line-height: 1.25rem;
  margin: 0;
  padding-top: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SkillsContainer = styled.ul`
  margin-left: auto;
  margin-right: auto;
  max-width: 38rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
`;

const Skills = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  const skillCategories = {
    'Data Science & Analytics': [
      'Python',
      'R',
      'Tableau',
      'Elasticsearch',
      'PostgreSQL',
      'Oracle DB',
      'Redis',
      'Kafka',
    ],
    'Web Development': [
      'TypeScript',
      'React',
      'Gatsby',
      'Angular',
      'GraphQL',
      'HTML',
      'CSS',
      'REST API',
    ],
    'DevOps & Infrastructure': ['AWS', 'GCP', 'Docker', 'Git', 'Jenkins', 'Firebase'],
  };

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category}>
          <SectionTitle>{category}</SectionTitle>
          <SkillsContainer>
            {skills.map((s, k) => (
              <Skill key={k}>
                <SkillIcon>
                  <Icon name={s} />
                </SkillIcon>
                <SkillName>{s}</SkillName>
              </Skill>
            ))}
          </SkillsContainer>
        </div>
      ))}
    </StyledSkillsSection>
  );
};

export default Skills;
