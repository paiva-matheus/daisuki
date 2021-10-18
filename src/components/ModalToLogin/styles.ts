import styled from "styled-components";
import { Modal } from "antd";
import { Color } from "../../model/enums/theme-colors";
import { Link } from "react-router-dom";
import InputText from "../InputText";

export const Content = styled.div`
  overflow: auto;
  max-height: 60vh;
  display: flex;
  flex-direction: column;

  p {
    color: white;
    font-size: 1rem;
  }

  /* div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    button {
      background: ${Color.MAIN_LIGHT};
      color: white;
    }
    button + button {
      background-color: ${Color.HIGHLIGHT_DARK};
    }
  } */
`;

export const StyledModal = styled(Modal)`
  max-width: 90vw;

  @media (min-width: 768px) {
    max-width: 25rem;
  }
  svg {
    color: white;
  }
  .ant-modal-header {
    background-color: ${Color.MAIN};

    .ant-modal-title {
      color: ${Color.TEXT_MAIN};
    }
  }

  .ant-modal-body {
    background-color: ${Color.MAIN};
  }

  .ant-modal-footer {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  /* align-items: center; */

  img {
    width: 100px;
    height: 50px;
  }

  @media (min-width: 768px) {
    justify-content: start;
  }

  @media (min-width: 1980px) {
    padding-left: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
`;

export const Form = styled.form`
  background-color: ${Color.MAIN};
  padding: 8px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  width: 20rem;

  @media (min-width: 768px) {
    /* width: 350px; */
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  color: ${Color.TEXT_SECONDARY};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-align: right;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  color: ${Color.TEXT_SECONDARY};

  &:hover,
  &:focus {
    color: ${Color.TEXT_MAIN};
    transition: 0.5s;
  }
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;

  span {
    font-size: 0.9rem;
  }
`;

export const StyledInputText = styled(InputText)`
  .sc-fodVek {
    flex-direction: column;
  }

  div {
    flex-direction: column;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  button {
    background: ${Color.MAIN_LIGHT};
    color: white;
  }
  button + button {
    background-color: ${Color.HIGHLIGHT_DARK};
  }
`;
