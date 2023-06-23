import { useContext } from "react";
// React Router Hooks
import { useNavigate } from "react-router-dom";
// Context
import { formContext } from "../../components/contexts/FormContext";
// Material Ui Components
import { TextField, Typography, Grid, Button } from "@mui/material";
// Styled Components
import { Container } from "./signupStyle";
// Layout Component
import FormLayout from "../../components/Layouts/FormLayout";
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
  const {value,setValue} = useContext(formContext);
  const errorToast = () => toast.error(`please enter your info currectly😒`);
  const navigate = useNavigate();
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setValue({...value, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event:React.MouseEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if(value.username.length && value.password){
      setValue({...value, isLoggedIn:true})
          navigate('/weather');
        }else{
          errorToast();
      }
  }

  return (
    <>
    <FormLayout>
      <Container>
        <Grid container direction='column' gap='2rem'>
      <Grid item textAlign='center'>
        <Typography variant="h4" color='primary'>Signup</Typography>
      </Grid>
      <form onSubmit={handleSubmit} style={{display:'grid',gap:'2rem'}}>
            <TextField
            fullWidth
            variant="outlined"
              name="username"
              label="Username"
              value={value.username}
              onChange={handleChange}
              
            />
            <TextField
            fullWidth
            variant="outlined"
              name="password"
              label="Password"
              value={value.password}
              onChange={handleChange}
              
            />
            <Button variant="contained" type="submit" sx={{borderRadius:"5px"}}>Submit</Button>
      </form>
      </Grid>
      </Container>
      <ToastContainer position="bottom-left" />
    </FormLayout>
    </>
  )
}

export default Signup;