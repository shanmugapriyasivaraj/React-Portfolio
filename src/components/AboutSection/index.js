import React from "react";
import "./About.css";
import resume from "../../Images/Resume.pdf";
import Me from "../../Images/profile.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">About Me</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Me} alt="my profile" className="image" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
              I'm a passionate Front end developer with the goal of working on a
              project that solves problems with thoughtful UI design, creating
              intuitive powered by strong frontend. I primarily work with React
              Library among the frontend technologies. The satisfaction that I
              get while working and completing every project made me do more and
              more. And I believe, I have did something creatively.
            </p>

            <a
              className="btn btn-sm btn-success mt-3"
              rel="noreferrer"
              href={resume}
              target="_blank"
              download
            >
              Download <i className="fad fa-download"></i>
            </a>
          </div>
        </div>
        {/* <InfoWrapper>
               <h2>About</h2> 
                <InfoRow imgStart={false}>
                    <Column2>
                        <ImgWrap>
                            <Img src={Me} alt='My Image' />
                        </ImgWrap>
                    </Column2>
                    <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading lightText={true}>Heading</Heading>
                            <Subtitle darkText={false}>Subtitle</Subtitle>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
            </InfoWrapper> */}
      </InfoContainer>
    </>
  );
}

export default About;
