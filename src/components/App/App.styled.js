import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 20px;
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  border-radius: 15px;

  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-family: 'Caveat', cursive;
  text-align: center;
`;
