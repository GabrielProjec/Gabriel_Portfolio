import React from "react";
import {
  Container,
  Title,
  SubTitle,
  ImagesIcons,
  TitleCards,
  AreaSkills,
  AreaCards,
  CardList,
} from "./skills.js";
import Divider from "../../components/Divider";

// IMAGES
import html5 from "../../assets/icons8-html5-96.png";
import css3 from "../../assets/icons8-css3-96.png";
import javascript from "../../assets/icons8-javascript-96.png";
import nodejs from "../../assets/icons8-node-js-96.png";
import express from "../../assets/icons8-express-js-96.png";
import react from "../../assets/icons8-nativo-de-reagir-96.png";
import bootstrap from "../../assets/icons8-bootstrap-96.png";
import styled from "../../assets/icons8-styled-components-96.png";
import git from "../../assets/icons8-git-96.png";
import github from "../../assets/icons8-github-96.png";

function Skills() {
  return (
    <Container>
      <Title>SKILLS</Title>
      <Divider />
      <SubTitle>Conheça as tecnologias que trabalho !</SubTitle>
      <AreaSkills>
        <div>
          <TitleCards>Desenvolvimento Web</TitleCards>
          <ImagesIcons src={html5} alt="icone de html5" />
          <ImagesIcons src={css3} alt="icone de css3" />
          <ImagesIcons src={javascript} alt="icone de javascript" />
        </div>
        <div>
          <TitleCards>Front-End</TitleCards>
          <ImagesIcons src={react} alt="icone de html5" />
          <ImagesIcons src={bootstrap} alt="icone de html5" />
          <ImagesIcons src={styled} alt="icone de html5" />
        </div>
        <div>
          <TitleCards>Back-End</TitleCards>
          <ImagesIcons src={nodejs} alt="icone de html5" />
          <ImagesIcons src={express} alt="icone de html5" />
        </div>
        <div>
          <TitleCards>Tools</TitleCards>
          <ImagesIcons src={git} alt="icone de html5" />
          <ImagesIcons src={github} alt="icone de html5" />
        </div>
      </AreaSkills>

      <AreaCards>
        <div>
          <TitleCards>HardSkills em Estudo</TitleCards>
          <CardList>TypeScript</CardList>
          <CardList>NextJS</CardList>
          <CardList>TailwindCSS</CardList>
        </div>
        <div>
          <TitleCards>SoftSkills em Estudo</TitleCards>
          <CardList>Inglês</CardList>
          <CardList>Metodologias Ageis</CardList>
        </div>
      </AreaCards>
    </Container>
  );
}

export default Skills;
