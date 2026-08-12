import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../Lib/hooks/useActivities";


export default function ActivityList() {
  
     const {activities, isLoading} = useActivities();

     if(!activities) return <Typography>No activites found</Typography>
      
     if( isLoading) return <Typography>Loading...</Typography>

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
      {activities.map(activity => (
        <ActivityCard
         key={activity.id} 
         activity={activity} 
         />
      ))}
    </Box>
  )
}
