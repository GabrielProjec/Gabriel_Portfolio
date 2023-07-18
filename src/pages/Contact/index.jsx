import React from "react";
import { Link } from "react-router-dom";
import DividerTitle from "../../components/Divider/index";

import {
  Container,
  Title,
  SubTitle,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButtom,
  AreaSocial,
  ListSocial,
} from "./contato.js";

import github from "../../assets/icons8-github-50.png";
import linkedin from "../../assets/icons8-linkedin-48.png";
import facebook from "../../assets/icons8-facebook-48.png";
import instagram from "../../assets/icons8-instagram-48.png";

function Contact() {
  return (
    <Container>
      <Title>CONTATOS</Title>
      <DividerTitle />
      <SubTitle>Seja bem vindo(a) a minha pagina de contatos ! </SubTitle>
      <FormTitle>Entre em contato !</FormTitle>
      <Form action="" method="post">
        <FormLabel>Seu Nome</FormLabel>
        <FormInput placeholder="Seu Nome Completo" autoComplete="off" />
        <FormLabel>Seu Email</FormLabel>
        <FormInput placeholder="email@email.com" autoComplete="off" />
        <FormLabel>Mensagem</FormLabel>
        <FormTextArea
          placeholder="Digite aqui sua mensagem"
          name="message"
          cols="30"
          rows="5"
        ></FormTextArea>
        <FormButtom type="submit">Enviar Mensagem</FormButtom>
      </Form>

      <AreaSocial>
        <ListSocial>
          <Link href="#">
            <img src={github} alt="github" />
          </Link>
          <Link href="#">
            <img src={linkedin} alt="linkedin" />
          </Link>
          <Link href="#">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link href="#">
            <img src={instagram} alt="instagram" />
          </Link>
        </ListSocial>
      </AreaSocial>
    </Container>
  );
}

export default Contact;
