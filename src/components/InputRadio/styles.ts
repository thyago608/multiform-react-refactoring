import styled, { css } from "styled-components";

type Props = {
  selected: boolean;
};

export const Container = styled.div<Props>`
  background: var(--gray-600);
  color: var(--white);
  border-radius: 0.3rem;

  ${(props) =>
    props.selected &&
    css`
      filter: brightness(0.8) contrast(1.7);
      background: var(--green-400);
    `}

  label {
    padding: 1.5rem 1rem;

    display: flex;
    align-items: center;
    cursor: pointer;

    .description-text {
      h1 {
        font-weight: 600;
      }
      p {
        margin: 0;
        font-weight: 300;
      }
    }

    .icon {
      margin: 0 1.5rem 0 1rem;

      svg {
        font-size: 1.8rem;
      }
    }
  }

  input {
    display: none;
  }

  & + div {
    margin-top: 2rem;
  }
`;
