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
    padding: 0 0.8rem;
    background: #696969;
    border-radius: 2rem;
    border: 2px solid transparent;

    color: var(--white);

    display: inline-block;
    width: 100%;
    max-width: 500px;

    outline: none;

    caret-color: var(--green-400);
    text-transform: capitalize;

    transition: border-color 0.2s ease;

    &:focus {
      border-color: var(--green-400);
    }
  }

  & + div {
    margin-top: 1.2rem;
  }
`;
