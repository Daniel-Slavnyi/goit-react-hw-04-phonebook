import styled from '@emotion/styled/macro';

export const UlList = styled.ul`
  position: relative;

  display: block;
  /* height: auto; */
  overflow: overlay;

  width: 500px;
  max-height: 350px;
  box-sizing: border-box;
  list-style: none;
  margin: 0 auto;
  padding: 40px;
  background-color: rgb(255 255 255 / 8%);
  /* filter: blur(3px); */
  border-radius: 15px;
  box-shadow: inset 8px 12px 25px 0px #68b4cf,
    inset -10px -15px 25px 0px #cd5a79;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 8%); /* цвет бегунка */
    border-radius: 3px; /* округлось бегунка */
    border: 2px solid #cd5a79; /* отступ вокруг бегунка */
  }
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: 100vh;
  background-color: rgb(255 255 255 / 8%);
  z-index: 0;
  filter: blur(3px);
  border-radius: 15px;
  box-shadow: inset 8px 8px 20px 0px #68b4cf, inset -10px -10px 20px 0px #cd5a79;
`;
export const Item = styled.li`
  font-family: 'Caveat', cursive;
  color: #002d3e;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  z-index: 100;
  cursor: pointer;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 50px;
  background-color: #050606;
  background-image: linear-gradient(120deg, #f3f3f3 0%, #ff9cfc 100%);
  color: #84878a;
  text-align: center;
  border-style: solid;
  border-color: #bac9ff;
  font-family: 'Font Awesome 5 Free';
  font-weight: 600;
  text-align: center;

  box-shadow: -3px -3px 15px #fff8f8, 3px 3px 15px #9b9b9b;
  font-size: 0.8rem;
  height: 50px;
  width: 50px;
  border-width: 2px;
  line-height: 1;

  &::before {
    content: '-';
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #8d8d8d;
    font-size: 20px;

    transform: translate(-50%, -50%);
  }

  &:active {
    box-shadow: inset 10px 10px 20px rgb(110 11 2 / 50%), -3px -3px 15px #ffc5c5,
      3px 3px 15px #42f9f9;
    border-color: #7c7c7c;
    background-image: linear-gradient(120deg, #ac62ff 0%, #03f3ff 100%);
    color: #fff;
  }
`;
