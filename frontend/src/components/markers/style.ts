import styled from "styled-components";

export const MarkerContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 1rem;
  gap: 20px;
  z-index: 5;
`;

export const Dots = styled.li`
  width: 10px;
  height: 10px;
  background-color: white;
  opacity: 0.5;
  border-radius: 50%;
  transition: opacity 0.3s;
  &.current {
    opacity: 1;
  }
  &:not(.current) {
    cursor: pointer;
    &:hover {
      outline: 1px solid white;
    }
  }
`;
