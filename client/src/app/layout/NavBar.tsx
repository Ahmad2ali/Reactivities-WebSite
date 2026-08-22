import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../Lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
import { useAccount } from "../../Lib/hooks/useAccounts";
import UserMenue from "./UserMenue";

export default function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box
                component={NavLink}
                to="/"
                sx={{
                  display: "flex",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Group fontSize="large" />
                <Typography variant="h3" sx={{ fontWeight: "bold", position: 'relative' }}>
                  Reactivities
                </Typography>
                <Observer>
                  {() =>
                    uiStore.isLoading ? (
                      <CircularProgress
                        size={20}
                        thickness={7}
                        sx={{
                        color: 'white',
                        position: 'absolute',
                        top: '30%',
                        left: '105%'
                        }}
                      />
                    ) : null
                  }
                </Observer>
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <MenuItemLink to="/activities">Activities</MenuItemLink>
              <MenuItemLink to="/counter">Counter</MenuItemLink>
              <MenuItemLink to="/errors">Errors</MenuItemLink>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {currentUser ? (
                <UserMenue />
              ) : (
                <>
                  <MenuItemLink to="/login">Login</MenuItemLink>
                  <MenuItemLink to="/register">Register</MenuItemLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
