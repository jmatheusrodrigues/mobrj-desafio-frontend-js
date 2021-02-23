import styled from "styled-components";

export const Container = styled.div`
  button {
    background: linear-gradient(274.13deg, #197acf 0.89%, #1a8de9 98.03%);
    border-radius: 4px;
    width: 110px;
    height: 32px;
    text-transform: uppercase;
    font-size: 12px;
    color: #ffffff;
  }
  ol {
    display: flex;
    .active {
      background: #ffffff;
    }

    li {
      width: 10px;
      height: 10px;
      margin: 1px;
      cursor: pointer;
      border: 1px solid #fff;
      border-radius: 10px;
      margin-right: 16px;
      margin-top: 11px;
      justify-content: center;
    }
  }
`;

export const Background = styled.div`
  background: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;

export const Title = styled.p`
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 24px;
  line-height: 32px;
  color: #f2f2f2;
  strong {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Description = styled.p`
  color: #f2f2f2;
  font-size: 14px;
  line-height: 22px;
`;
