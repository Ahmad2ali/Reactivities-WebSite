import { Box, Container, CssBaseline, Typography, } from "@mui/material";
import {useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../Lib/hooks/useActivities";


function App() {

  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
   const {activities, isPending} = useActivities();
   
  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id));
  }

  const handleCncelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCncelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight:'100vh'}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3, ml: 0, pl: 0 }}>
        {!activities || isPending ?(

          <Typography>Loading...</Typography>
        ): (
              <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCncelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
        />
        )}
       
      </Container>
    </Box>
  )
}

export default App
