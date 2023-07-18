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

export const SubTitle = styled.p`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: bold;

  @media (max-width: 720px) {
    font-size: 25px;
  }
`;

export const AreaSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 20px;
    margin-right: 40px;
    border: 3px solid #54b689;
    border-radius: 15px;
    width: 300px;
    height: 200px;
    transition: all 0.5s;

    &:hover {
      box-shadow: #54b689 0px 5px 15px;
    }
  }

  @media (max-width: 720px) {
    margin-left: 30px;
  }
`;

export const TitleCards = styled.p`
  color: #fff;
  margin-bottom: 10px;
  font-size: 20px;
  padding-left: 15px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  transition: all 0.5s;
`;

export const ImagesIcons = styled.img`
  width: 70px;
  padding: 10px 10px;
  margin-left: 10px;
`;

export const AreaCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    margin-bottom: 20px;
    margin-right: 40px;
    border: 3px solid #00b9bd;
    border-radius: 15px;
    width: 300px;
    height: 200px;
    transition: all 0.5s;

    &:hover {
      box-shadow: #00b9bd 0px 5px 15px;
    }
  }

  @media (max-width: 720px) {
    margin-left: 30px;
  }
`;

export const CardList = styled.li`
  list-style: none;
  color: #fff;
  text-align: center;
  line-height: 150%;
  padding: 10px 10px;
  font-size: 20px;
`;
