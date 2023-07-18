import React from "react";

import {
  Container,
  Title,
  Name,
  AreaDescription,
  DescriptionFirst,
  DescriptionSecond,
  AreaPersonal,
} from "./home";

function Home() {
  return (
    <Container>
      <AreaPersonal>
        <Title>Olá , Seja Bem Vindo !</Title>
        <Name>
          Me chamo <span>Gabriel Rodrigues</span>
        </Name>
        <AreaDescription>
          <DescriptionFirst>
            Sou desenvolvedor Web apaixonado por tecnologia e por todas as
            possibilidades de impactar positivamente as pessoas
          </DescriptionFirst>
          <DescriptionSecond>
            Seja muito bem vindo ao meu portifolio , espero que ele possa te
            levar há uma boa experiencia e possa demonstrar um pouco do meu
            conhecimento !
          </DescriptionSecond>
        </AreaDescription>
      </AreaPersonal>
    </Container>
  );
}

export default Home;
