import React from "react";

import { Link } from "react-router-dom";
import {
  Container,
  Title,
  SubTitle,
  AreaPersonal,
  ImageArea,
  BoderImg,
  DescriptionArea,
  ButtonArea,
} from "./about";
import Divider from "../../components/Divider";

import fotoPerfil from "../../assets/fotoPerfil.jpeg";

function About() {
  return (
    <Container>
      <Title>SOBRE MIM</Title>
      <Divider />
      <SubTitle>Ola, essa a pagina é sobre a minha trajetoria !</SubTitle>
      <AreaPersonal>
        <ImageArea>
          <img src={fotoPerfil} alt="foto do perfil" />
          <BoderImg></BoderImg>
        </ImageArea>
        <DescriptionArea>
          <p>
            No ano de 2021 tive meu primeiro contato com a area de
            desenvolvimento Web e foi amor a primeira vista e desde então decidi
            transformar minha curiosidade e paixão por tecnologia em dedicação
            ao desenvolvimento web. Como desenvolvedor front-end, busco criar e
            manter sites responsivos oferecendo uma experiência de usuário
            tranquila. Me aprimorando para realizar criações de interfaces
            dinâmicas por meio da escrita de código limpo, otimizado e uso de
            ferramentas técnicas de desenvolvimento. Estou me desenvolvendo para
            ser um bom colaborador em equipes multifuncionais e fazer ótimos
            aplicativos de Web.
          </p>
          <Link>
            <ButtonArea>DOWNLOAD CV</ButtonArea>
          </Link>
        </DescriptionArea>
      </AreaPersonal>
    </Container>
  );
}

export default About;
