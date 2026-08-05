import { Group} from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container} from "@mui/material";

type Props = {
  openForm: () => void;
}
export default function NavBar({openForm}: Props){

    return (

  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
        }}>
          
        <Container maxWidth='xl'>
           <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>

      <Box>
        <Box  sx={{display: 'flex', gab: 2}}>
        <Group fontSize="large"/>
        <Typography variant="h3" sx={{fontWeight:"bold"}}>Reactivities</Typography>
        </Box >
      </Box>

      <Box>
        <Button  sx={{fontSize:'1.2rem', textTransform:'uppercase', fontWeight:'bold', color:'white'}}>Activities</Button >
        <Button  sx={{fontSize:'1.2rem', textTransform:'uppercase', fontWeight:'bold', color:'white'}}>About</Button >
        <Button  sx={{fontSize:'1.2rem', textTransform:'uppercase', fontWeight:'bold', color:'white'}}>Contact</Button >

      </Box>

      <Button 
      size="large" 
      variant="contained" 
      color="warning"
        onClick={openForm}
        >
        Create activity
        </Button>
            </Toolbar>
        </Container>
        
      </AppBar>
    </Box>  
      )

}