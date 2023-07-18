import styled from "styled-components";

export const Container = styled.div``;

export const AreaPersonal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Name = styled.h2`
  color: white;
  font-size: 25px;
  margin-bottom: 30px;
  text-align: center;

  span {
    color: #54b689;
  }
`;

export const AreaDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 500px;
  border: 5px solid #293544;
  border-radius: 20px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const DescriptionFirst = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 15px;
`;

export const DescriptionSecond = styled.h2`
  color: white;
  text-align: center;
`;
