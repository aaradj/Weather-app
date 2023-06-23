import styled from 'styled-components';

type FormLayoutProps = {
    children:React.ReactNode;
}

const Container = styled.div`
 height:100vh;
 display:grid;
 place-items:center;
 background: #56CCF2;
 background: -webkit-linear-gradient(to right, #2F80ED, #56CCF2);
 background: linear-gradient(to right, #2F80ED, #56CCF2);
`
function FormLayout({children}:FormLayoutProps){
    return(
        <Container>
            {children}
        </Container>
    )
}

export default FormLayout;