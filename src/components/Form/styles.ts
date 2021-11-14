import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;

    > aside {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;
