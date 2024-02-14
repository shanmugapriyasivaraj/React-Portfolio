import styled from "styled-components";

export const SkillsContainer = styled.div`
  color: #fff;
  background: #302f2f;
  padding-top: 2rem;
  /* @media screen and (max-width:768px){
        padding :100px 0;
    } */
`;
export const SkillsCard = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #fff;
  padding: 1rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#302f2f";

  @media (max-width: 768px) {
    width: 70%;
    margin-left: 5rem;
    margin-top: 2rem;
  }
  @media (max-width: 480px) {
    width: 70%;
    margin-top: 2rem;
    margin-right: 0;
    margin-left: 2.5rem;
  }
`;
export const IconContainer = styled.div`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ color }) => {
    switch (color) {
      case "white":
        return "#fff";
      case "blue":
        return "#0ee794";
      default:
        return;
    }
  }};
`;
export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 2rem;
  padding: 0 5%;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;
