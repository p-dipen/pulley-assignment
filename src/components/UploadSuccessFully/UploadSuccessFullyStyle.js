import styled from 'styled-components';
export const Icon = styled.svg`
  fill: none;
  stroke: var(--clr-secondary);
  stroke-width: 1px;
  @-webkit-keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
  polyline {
    stroke-dashoffset: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: -100;
    -webkit-animation: dash-check 1s 0.2s ease-in-out forwards;
    animation: dash-check 1s 0.2s ease-in-out forwards;
  }
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  padding: 10px;
  border: 3px solid var(--clr-secondary);
  transition: border 1s linear;
  background: white;
`;
