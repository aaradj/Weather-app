import { styled } from '@mui/system';
const Container = styled("div")({
  width:"35%",
  height:"fitContent",
  borderRadius:"10px",
  padding:"3rem",
  background: "rgba(255, 255, 255, 0.81)",
  bordeRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(17.5px)",
  webkitBackdropFilter: "blur(17.5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  "@media(max-width:1000px)":{
    width:"80%",
    padding:"3rem 1rem",
  }
});

export { Container }