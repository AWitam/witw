import styled from "styled-components";

const StyledSpinner = styled.div`
  margin: 0 auto;

  .spinner {
    height: 4rem;
    width: 4rem;

    path {
      fill: ${({ theme }) => theme.text};
    }
  }

  .stroke {
    transform-origin: center;
    animation: spinner1 6s infinite;
  }

  #globe {
    transform-origin: center;
    animation: pulse 1s linear infinite;
  }

  @keyframes spinner1 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(540deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.7);
    }

    70% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(0.7);
    }
  }
`;

export default StyledSpinner;
