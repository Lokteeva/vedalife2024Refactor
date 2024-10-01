import styled from "styled-components";

export const Image = styled.img`
display: block;
width: 100vw;
padding-top: calc(var(--index) * 2);

@media (max-width: 900px) {
  display: none;
}
`
export const ImageMobile = styled.img`
display: none;
width: 100vw;
padding-top: calc(var(--index) * 2);

@media (max-width: 900px) {
    display: block;
  }

`