import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  width: 62%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);

  @media (max-width: 1024px) {
    width: 80%;
    position: relative;
    margin-bottom: -60px;
  }
`;

const City = styled.div`
  width: 200px;
  font-size: 17px;
  color: #f0f2f5;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: invert(1);

  p {
    margin: 0 3px;
    display: flex;

    :hover {
      color: #348ded;
    }
  }
`;

const Cities = styled.div`
  background-color: #161b22;
  border-radius: 5px;
  position: absolute;
  margin-top: 25px;
  width: fit-content;
  padding: 3px;
  border: 1px solid #fff;
`;

const Options = styled.div`
  font-size: 17px;
  color: #f0f2f5;
  cursor: pointer;
  margin-bottom: 4px;
  padding: 2px;
  z-index: 1;

  :hover {
    text-shadow: 0 0 4px #fff;
    background-color: #348ded;
  }
`;

export { Container, City, Cities, Options };
