import styled, { css } from "styled-components";

type Props = {
  asColumn: boolean;
};

export const Container = styled.div<Props>`
  ${(props) =>
    props.asColumn &&
    css`
      display: flex;
      flex-direction: column;
    `}

  label {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    height: 2.4rem;
    background: #696969;
    border-radius: 2rem;
    border: none;

    display: inline-block;
    width: 100%;
    max-width: 500px;
  }
`;
