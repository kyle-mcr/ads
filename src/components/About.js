import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

const Section = styled.section`
  padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const About = () => {
  const width = window.innerWidth;
  return (
    <Section id="about">
      <div className="container">
        <SectionTitle>Apollo Drain operates 24 hours a day / 7 days a week for emergency services</SectionTitle>
        <SubTitle>Just call or text at the number below</SubTitle>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Drain & Sewer Cleaning</BoxTitle>
              <Text>
              Are your sinks backing up? Are tree roots taking over your pipes? Do your drains keep clogging? All of these are signs of a drain blockage and that it’s time to call a drain cleaning specialist. Our professionals offer an expansive list of drain and sewer cleaning services including hydro-jetting and snaking to release the toughest clogs.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Sewer Repair</BoxTitle>
              <Text>
              Sewer & Drain Cleaning are able to identify any and all damage to sewer pipes through a thorough investigation of the plumbing. The first line of defense is always to repair the problem, but if the problem isn’t fixable, the next step is a sewer line replacement. Underground plumbing issues and sewer line replacements typically involve various methods like hydro excavation, tunneling, and backfilling. A skilled sewer repair technician at Art will be able to evaluate your specific needs and guide you through the process.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Sewer System Backups</BoxTitle>
              <Text>
              The most common cause of sewer system backups in are tree root invasion and clogged pipes. Using various tools and technologies, we will be able to identify and remedy your sewer system backup. If you suspect that you’re dealing with a sewer backup, call the experts at Apollo Drain Services for a thorough analysis of your rooter issue. Whatever the problem is, we will get the job done right the first time.
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
