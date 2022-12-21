import styled from "@emotion/styled/macro";





export const Form = styled.form`
gap: 20px;
position: relative;
margin: 0 auto;
width: 500px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
` 

export const Button = styled.button`
margin-top: 20px;
z-index: 100;
 cursor: pointer;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 50px;
  background-color: #050606;
  background-image: linear-gradient(120deg, #f3f3f3 0%, #ff9cfc 100%);
  color: #84878A;
  text-align: center;
  border-style: solid;
  border-color: #bac9ff;
  font-family: "Font Awesome 5 Free";
  font-weight: 600;
  text-align: center;

  box-shadow: -3px -3px 15px #fff8f8, 3px 3px 15px #9b9b9b;
  font-size: 0.8rem;
  height: 50px;
  width: 50px;
  border-width: 2px;
  line-height: 1;
  

  &::before {
 content: '+';
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #8d8d8d;
  font-size: 20px;
  
  transform: translate(-50%, -50%);
  
  }

  &:active {
    box-shadow: inset 10px 10px 20px rgb(110 11 2 / 50%), -3px -3px 15px #ffc5c5, 3px 3px 15px #42f9f9;
     border-color: #7c7c7c;
  background-image: linear-gradient(120deg, #ac62ff 0%, #03f3ff 100%);
  color: #fff;
  }
`
export const Bg = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgb(255 255 255 / 8%);;
z-index: 0;
filter: blur(3px);
border-radius: 15px;
box-shadow: inset 8px 8px 20px 0px #68b4cf, inset -10px -10px 20px 0px #cd5a79;
`

export const Label = styled.label`
position: relative;

`

export const Input = styled.input`
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
top: -5px;
left: 5px;
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

