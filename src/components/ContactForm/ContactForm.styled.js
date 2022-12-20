import styled from '@emotion/styled'



export const Form = styled.form`
position: relative;
margin: 0 auto;
width: 500px;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
` 
export const Input = styled.input`
z-index: 100;
`
export const Button = styled.button`
z-index: 100
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