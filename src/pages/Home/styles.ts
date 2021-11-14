import styled from "styled-components";

export const Main = styled.main`
  max-width: 1000px;

  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 2rem 3rem;
  flex: 1;

  header {
    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  p {
    margin: 1rem 0 3rem;
  }

  form {
    button {
      margin-top: 5rem;
    }
  }

  transform: translateX(200px);
  opacity: 0;

  transition: transform 1.5s ease, opacity 1.5s ease;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
`;
