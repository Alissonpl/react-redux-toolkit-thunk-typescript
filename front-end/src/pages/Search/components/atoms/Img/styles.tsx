import styled from 'styled-components';

export const ImgStyles = styled.img`
  max-height: 150px;
  margin: 25px;
  border-radius: 6px;
  ${styled.img}:hover & {
    max-height: 300px;
  }
`;
