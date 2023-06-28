import { styled } from '@mui/system';

const Box = styled("div")({
    width:"50%",
    background: "rgba(255, 255, 255, 0.79)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 1)",
    display:"flex",
    flexDirection:"column",
    gap:"3rem",
    padding:"3rem",
    "@media(max-width:1000px)":{
        width:"100%",
        padding:"1rem",
    }
});

const H1 = styled("h1")({
fontSize:"1.8rem",
fontWeight:"300",
color:"#53627c",
textAlign:"center",
"@media(max-width:1000px)":{
     fontSize:"1.5rem",
}
});

const Text = styled("p")({
color:"#000",
fontSize:"1.3rem",
fontWeight:"700",
"@media(max-width:1000px)":{
    fontSize:"1.1rem",
}
});

const H2 = styled("h2")({
color:"#53627c",
fontSize:"1.2rem",
fontWeight:"400",
display:"flex",
alignItems:"center",
gap:".2rem",
"@media(max-width:1000px)":{
    fontSize:"1rem",
}
});

const Image = styled("img")({
width:"250px",
"@media(max-width:1000px)":{
    width:"150px",
}
})

const FlexContainer = styled("div")({
display:"flex",
alignItems:"center",
flexWrap:"wrap",
justifyContent:"space-between",
"@media(max-width:1000px)":{
    gap:"2rem",
}
});

const FlexItem = styled("div")({
display:"flex",
flexDirection:"column",
gap:"2rem",
"@media(max-width:1000px)":{
    gap:"1.5rem",
}
});

export {Box,FlexContainer,FlexItem,H1,H2,Image,Text}
