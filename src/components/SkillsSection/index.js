import React from "react";
import "./Skills.css";
import skillItem from "../data/skills";
// import { SkillsContainer } from "./SkillsElements";
// import ProgressBar from "@ramonak/react-progress-bar";
import {
  IconContainer,
  SkillsCard,
  SkillsCardContainer,
} from "./SkillsElements";
// import { HomeH1, HomeP1 } from "../HomeSection/HomeElements";
function Skills() {
  return (
    <div className="skillsWrapper" id="skills">
      <div>
        <h1 className="logo-text text-center py-md-5 py-xs-5">Skills</h1>
      </div>
      <SkillsCardContainer>
        {skillItem.map((e) => {
          return (
            <SkillsCard>
              <IconContainer color="blue" size="4.5rem">
                {e.icon}
              </IconContainer>
            </SkillsCard>
          );
        })}
      </SkillsCardContainer>
    </div>
  );
}

export default Skills;
