import  { Divider, Paper, Typography } from "@mui/material"
import { useLocation } from "react-router"

export default function ServerError() {
    const {state} = useLocation()
  return (
   <Paper sx={{ p: 4 }}>
    {state?.error ? (
        <>
            <Typography
                gutterBottom
                variant="h4"
                color="secondary"
            >
                {state.error?.manage || 'There has been an error'}
            </Typography>

            <Divider />

            <Typography variant="body1" sx={{ pt: 3 }}>
                {state.error?.details || 'Internal server error'}
            </Typography>
        </>
    ) : (
        <Typography variant="h5">
            Server error
        </Typography>
    )}
</Paper>
  )
}
