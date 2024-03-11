import { Box, Typography } from "@mui/material";
import React from "react";
import CrudEdit from "../components/crudEdit";

export default function crudEditPage() {
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Typography variant="h3">CRUD Edit</Typography>

      <CrudEdit/>

    </Box>
  );
}
