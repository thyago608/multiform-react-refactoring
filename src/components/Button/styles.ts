import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  border-radius: 0.3rem;

  height: 2.2rem;
  padding: 0 0.8rem;
  color: var(--gray-100);
  background: var(--violet-200);
  transition: transform 0.2s ease;

  &:hover {
    transform: scaleX(1.02);
  }
`;
