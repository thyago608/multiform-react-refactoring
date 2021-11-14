import styled from "styled-components";

export const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 2rem 3rem;
  flex: 1;
  transform: translateX(200px);
  opacity: 0;

  transition: transform 1.5s ease, opacity 1.5s ease;

  header {
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  p {
    margin: 1rem 0 3rem;
  }

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;

  button.goBack {
    background: transparent;
    border: 0;
    color: var(--gray-100);
    transition: color 0.2s ease;

    &:hover {
      color: var(--white);
    }
  }
`;
