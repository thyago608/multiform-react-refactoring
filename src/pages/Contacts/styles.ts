import styled from "styled-components";

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  .container-where-do-we-find-you {
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
        margin-top: 2rem;
      }
    }
  }
`;

export const ContainerButtons = styled.div`
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
