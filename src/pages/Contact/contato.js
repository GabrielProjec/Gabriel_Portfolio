import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const SubTitle = styled.h3`
  color: white;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;

  @media (max-width: 720px) {
    font-size: 25px;
  }
`;

export const Description = styled.p`
  color: white;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  width: 70%;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 15px;
  }
`;

export const FormTitle = styled.h2`
  color: white;
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 3px solid #fff;
  border-radius: 15px;
  padding: 25px 25px;
  width: 600px;
  margin: auto auto;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 90%;
  }
`;

export const FormLabel = styled.label`
  color: white;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  background-color: #293544;
  border: 1px solid #293544;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

export const FormTextArea = styled.textarea`
  background-color: #293544;
  border: 1px solid #293544;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
  color: #fff;
`;

export const FormButtom = styled.button`
  background-color: #293544;
  border: 1px solid #293544;
  border-radius: 15px;
  padding: 10px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const AreaSocial = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ListSocial = styled.li`
  list-style: none;
  padding: 20px;

  img {
    width: 55px;
  }

  @media (max-width: 720px) {
    padding: 8px;
  }
`;
