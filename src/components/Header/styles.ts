import styled from "styled-components";

export const Container = styled.header`
  height: 8rem;

  border-bottom: 1px solid var(--gray-600);
`;

export const Content = styled.div`
  height: 8rem;

  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 2rem;

  h1 {
    font-size: 1.8rem;
    color: var(--white);
  }
`;
