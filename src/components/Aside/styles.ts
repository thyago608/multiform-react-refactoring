import styled, { css } from "styled-components";
import { FiSmile, FiCoffee, FiMail } from "react-icons/fi";

export const Container = styled.aside`
  max-width: 240px;
  height: calc(100vh - 8rem);
  border-right: 1px solid var(--gray-600);

  padding: 1rem 0;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    color: gray;

    position: relative;

    .description {
      h1 {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.2rem;
      }
    }

    & + a {
      margin-top: 1rem;
    }

    &.active {
      color: var(--green-400);
      filter: brightness(0.9) contrast(1.9);
    }

    &:after {
      content: "";

      width: 10px;
      height: 10px;

      border-radius: 50%;
      border: 2px solid var(--white);

      position: absolute;
      right: -8px;
    }

    &.active:after {
      background: var(--green-400);
      border-color: var(--green-400);
    }
  }
`;

const iconCSS = css`
  font-size: 1.2rem;
  margin: 0 1.5rem;
`;

export const SmileIcon = styled(FiSmile)`
  ${iconCSS}
`;

export const CoffeIcon = styled(FiCoffee)`
  ${iconCSS}
`;

export const MailIcon = styled(FiMail)`
  ${iconCSS}
`;
