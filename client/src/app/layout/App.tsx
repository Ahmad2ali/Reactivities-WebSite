import { Box, Container, CssBaseline} from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";


function App() {
   
 const location = useLocation();

   
  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight:'100vh'}}>
      <CssBaseline />
        {location.pathname === '/' ? <HomePage /> : (
          <>
               <NavBar  />
      <Container maxWidth='xl' sx={{ mt: 3, ml: 0, pl: 0 }}>
        <Outlet/>
      </Container>
          </>
        )}
 x
    </Box>
  )
}

export default App
