import { LoadingButton } from "@mui/lab";
import { Box, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function CrudForm() {

    const [loading, setLoading] = useState(false)

  return (
    <Box my={2} component="form">
      <Grid container direction={"row"} spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardContent>
              <TextField
                type="text"
                name="equipo"
                margin="dense"
                fullWidth
                error={false}
                label="Equipo"
                required
                helperText="Campo obligatorio"
              />
              <TextField
                type="text"
                name="pais"
                margin="dense"
                fullWidth
                error={false}
                label="Pais"
                required
                helperText="Campo obligatorio"
              />
              <Box sx={{ "& > button": { m: 1 } }}>
                <LoadingButton
                  size="small"
                  // onClick={handleClick}
                  loading={loading}
                  variant="outlined"
                >
                  Agregar
                </LoadingButton>
                <LoadingButton
                  size="small"
                  //onClick={handleClick}
                  loading={loading}
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </LoadingButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
