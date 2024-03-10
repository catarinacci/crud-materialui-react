import { Paper, Button, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ItemUi({ item }) {
  return (
    <Paper >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "50vh" }}
      />
      <Box display="flex" justifyContent="center" alignItems={'center'} flexDirection={'column'} >
        <Typography variant="h3">{item.title}</Typography>
        <Button variant="contained" component={NavLink} to={item.path}>Check it out!</Button>
      </Box>
    </Paper>
  );
}
