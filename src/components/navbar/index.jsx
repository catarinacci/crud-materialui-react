import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "../navListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Crud",
      path: "/crud",
      icon: <AlignHorizontalLeftIcon />,
    },
    {
      title: "Clima",
      path: "/clima",
      icon: <ThermostatIcon />,
    },
    {
      title: "Pokemon List",
      path: "/pokemon-list",
      icon: <FormatListBulletedIcon />,
    },
  ];

  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" >
              My Web
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton color="inherit" component={NavLink} to="/" size="large">
              <HomeIcon />
              <Typography variant="h6">Home</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => {
          setOpen(false);
        }}
      >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
