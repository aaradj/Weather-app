import styled from "styled-components";
const Container = styled.div`
width:35%;
height:fit-content;
border-radius:10px;
padding:3rem;
background: rgba(255, 255, 255, 0.81);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(17.5px);
-webkit-backdrop-filter: blur(17.5px);
border: 1px solid rgba(255, 255, 255, 0.3);
@media(max-width:1000px){
  width:80%;
  padding:3rem 1rem;
}
`;

export { Container }