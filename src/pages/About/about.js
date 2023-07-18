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

export const AreaPersonal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 4px solid #293544;
  border-radius: 15px;
  padding: 20px 20px;
  width: 80%;
  height: 500px;
  margin: 10px auto;

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    height: 80%;
  }
`;

export const ImageArea = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 70px;

  img {
    width: 300px;
    border-radius: 10px;
    margin-left: 40px;

    @media (max-width: 720px) {
      width: 80%;
      height: auto;
      border-radius: 10px;
      margin-top: -35px;
    }
  }
`;

export const BoderImg = styled.div`
  width: 300px;
  height: 300px;
  border: 5px solid #ffb400;
  border-radius: 10px;
  z-index: -1;
  margin-left: 60px;
  margin-top: -280px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const DescriptionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;

  p {
    color: #fff;
    line-height: 150%;
    font-size: 20px;
    margin-left: 20px;

    @media (max-width: 720px) {
      line-height: none;
      text-align: center;
      font-size: 20px;
    }
  }
`;

export const ButtonArea = styled.button`
  cursor: pointer;
  height: 50px;
  width: 200px;
  color: white;
  background-color: #ffb400;
  border: transparent;
  border-radius: 30px;
  margin-top: 15px;
  font-weight: bold;
  font-size: 15px;
  text-align: center;


`;
