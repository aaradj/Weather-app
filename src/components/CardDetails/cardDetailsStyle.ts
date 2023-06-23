import styled from "styled-components";

const Box = styled.div`
width:50%;
background: rgba(255, 255, 255, 0.79);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 1);
display:flex;
flex-direction:column;
gap:3rem;
padding:3rem;
@media(max-width:1000px){
    width:100%;
    padding:1rem;
}
`;

const H1 = styled.h1`
font-size:1.8rem;
font-weight:300;
color:#53627c;
text-align:center;
@media(max-width:1000px){
    font-size:1.5rem;
}
`;

const Text = styled.p`
color:#000;
font-size:1.3rem;
font-weight:700;
@media(max-width:1000px){
    font-size:1.1rem;
}
`

const H2 = styled.h2`
color:#53627c;
font-size:1.2rem;
font-weight:400;
display:flex;
align-items:center;
gap:.2rem;
@media(max-width:1000px){
    font-size:1rem;
}
`;

const Image = styled.img`
width:250px;
@media(max-width:1000px){
    width:150px;
}
`;

const FlexContainer = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:space-between;
@media(max-width:1000px){
    gap:2rem;
}
`;

const FlexItem = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
@media(max-width:1000px){
    gap:1.5rem;
}
`;

export {Box,FlexContainer,FlexItem,H1,H2,Image,Text}
