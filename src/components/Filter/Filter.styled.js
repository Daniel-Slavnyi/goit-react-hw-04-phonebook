import styled from "@emotion/styled/macro";

export const Label = styled.label`
position: relative;
display: block;
margin-bottom: 20px;
`

export const Input = styled.input`
margin: 0 auto;
display: block;
z-index: 300;
width: 300px;
background: transparent;
border: none;
border-bottom: 2px solid white;
outline: transparent;
`

export const Span = styled.span`
position: absolute;
color: white;
font-size: 20px;
font-family: 'Caveat', cursive;
top: -6px;
left: 150px;
text-align: right;
transition: all 1s ease;

${Input}:focus-within + & {
    transform: translateX(-140%);
    color: $contrastColor;
}

${Input}:not(:placeholder-shown) + & {
  transform: translateX(-140%);
  color: $contrastColor;
}
`