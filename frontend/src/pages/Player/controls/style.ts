import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const VolumeSlider = styled.input`
  color: white;
  visibility: hidden;
  -webkit-transition: visibility 120ms, width 0.15s ease-in-out;
  transition: visibility 120ms, width 0.15s ease-in-out;
  cursor: pointer;
  width: 0;
  &[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  &[type="range"]::-webkit-slider-runnable-track {
    background: white;
    height: 0.5rem;
    border-radius: 10px;
  }
  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -12px;
    background-color: white;
    border: none;
    border-radius: 50%;
  }
  &[type="range"]::-moz-range-track {
    background: white;
    height: 0.5rem;
    border-radius: 5px;
  }
  &[type="range"]::-moz-range-thumb {
    border: none;
    border-radius: 50%;
    background-color: white;
    width: 20px;
    height: 20px;
  }
  &:focus-within {
    visibility: visible;
    width: 100px;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover ${VolumeSlider} {
    visibility: visible;
    width: 100px;
  }
`;

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-grow: 1;
  color: #ddd;
`;

export const MenuButton = styled.button<{ $background: string }>`
  width: 40px;
  height: 40px;
  opacity: 0.8;

  background-image: url(${({ $background }) => $background});
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;