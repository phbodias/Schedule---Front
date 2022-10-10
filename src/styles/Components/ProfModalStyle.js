import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px 20px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 30px;
`;

const Card = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 17px;
  cursor: pointer;
  overflow: hidden;

  img {
    height: 100px;
    object-fit: cover;
    border-radius: 100px;
  }

  div {
    margin-left: 20px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 24px;
  }

  p:nth-child(2) {
    color: #348ded;
    font-size: 16px;
  }
`;

const Address = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const Calendar = styled.div`
  margin: 10px 5%;
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  padding: 5px 0;
  font-weight: 600;
`;

const Times = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const Time = styled.div`
  margin: 10px;
  padding: 3px;
  border-radius: 5px;
  background-color: #e5e7ed;

  :hover {
    background-color: #3891ee;
  }
`;

export { Container, Close, Card, Address, Calendar, Times, Day, Time };
