import styled from "styled-components";

export const Container = styled.header`
  height: 8rem;

  border-bottom: 1px solid var(--gray-600);

  @media (max-width: 420px) {
    height: 12rem;
  }
`;

export const Content = styled.div`
  height: 8rem;

  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 2rem;

  transform: translateY(-100px);
  opacity: 0;

  transition: transform 1.5s ease opacity 1.5s ease;

  h1 {
    font-size: 1.8rem;
    color: var(--white);
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
