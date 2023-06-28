import { styled } from '@mui/system';

type FormLayoutProps = {
    children:React.ReactNode;
}

const Container = styled("div")({
    height:"100vh",
    display:"grid",
    placeItems:"center",
    background: "linear-gradient(to right, #2F80ED, #56CCF2)",
});
function FormLayout({children}:FormLayoutProps){
    return(
        <Container>
            {children}
        </Container>
    )
}

export default FormLayout;