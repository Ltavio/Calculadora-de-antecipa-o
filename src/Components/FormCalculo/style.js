import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  box-sizing: border-box;
  
  padding: 0 14px;

  form {
    display: flex;
    flex-direction: column;


    label {

      margin: 25px 0px 10px;

      font-size: 18px;
      font-weight: bold;
      color: #a8a8a8;
    }

    input {
      box-sizing: border-box;
      height: 38.5px;

      padding: 13px;
      margin-bottom: 10px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 13px;
      color: black;

      background-color: #ffffff;

      border: 1px solid #868e96;
      border-radius: 4px;

      &::placeholder {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #868e96;
      }

      &:focus {
        border: 0.9772px solid black;
        border-radius: 3.20867px;
      }
    }

    button {
      height: 38.5px;

      font-weight: bold;
      font-size: 16px;
      color: #f8f9fa;

      border: 1.2182px solid #343b41;
      border-radius: 4px;
      background-color: #343b41;

      margin: 30px 0 15px 0;
    }
  }
`;
