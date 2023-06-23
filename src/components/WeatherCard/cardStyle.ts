import styled from "styled-components";

const H2 = styled.h2`
  font-size:1.2rem;
  color:#53627c;
  font-weight:400;
  text-align:center;
`;


const Degre = styled.p`
  font-size:5rem;
  font-weight:bold;
  color:black;
`;

const Image = styled.img`
  width:90px;
  height:90px;
`;

const bgStyle:React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.81)",
  borderRadius: "16px",
  boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(16.8px)",
  WebkitBackdropFilter: "blur(16.8px)",
  border:"1px solid rgba(255, 255, 255, 0.3"
};

export {Degre,H2,Image,styled,bgStyle}