import { styled } from '@mui/system';
import { PageLayoutProps } from "../../types";


const Container = styled("div")({
  height:"100vh",
  padding:"2rem",
});

function PageLayout({children}:PageLayoutProps){
    return(
        <Container>{children}</Container>
    )
}

export default PageLayout;