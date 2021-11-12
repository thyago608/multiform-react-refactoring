import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  border-radius: 0.3rem;

  height: 2.2rem;
  padding: 0 0.8rem;
  color: var(--gray-100);
  background: var(--violet-200);
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
