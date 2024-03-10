import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CrudForm() {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastnameError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const dataEspecialist = [
    {
      id: 1,
      description: "Front End",
    },
    {
      id: 2,
      description: "Back End",
    },
    {
      id: 3,
      description: "Full Stack",
    },
    {
      id: 4,
      description: "Dev Test",
    },
    {
      id: 5,
      description: "Data Analyst",
    },
  ];
  const [formData, setFormData] = useState({
    id: null,
    firstname: "",
    lastname: "",
    rol: 0,
  });
  const { firstname, lastname, rol, id } = formData;

  const handleOnchange = (e) => {
    //console.log(e.target.value);

    if (!e.target.value == "") {
      setFirstNameError(false);
      setLastnameError(false)
      setRoleError(false)
      //console.log("1");
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingAdd(false);
    setFirstNameError(false);
    setLastnameError(false);
    setRoleError(false);

    console.log(formData.id);
    console.log(formData.firstname.length);
    console.log(formData.lastname);
    console.log(formData.rol);
    // const cadenaJSON = JSON.stringify(formData);
    // console.log(cadenaJSON);
    //console.log(firstname, lastname, rol)

    if (formData.firstname == "" || formData.firstname === undefined) {
      console.log("a");
      setFirstNameError(true);
    } else if (formData.lastname == "" || formData.lastname === undefined) {
      console.log("b");
      setLastnameError(true);
    } else if (formData.rol === 0 || formData.rol === undefined) {
      console.log("c");
      setRoleError(true);
    }

    setTimeout(() => {
      setLoadingAdd(false);
    }, 1000);
  };

  const handleCancel = (firstname, lastname, rol) => {
    setLoadingCancel(true);
    setFirstNameError(false);
    setLastnameError(false);
    setRoleError(false);

    setFormData((firstname = ""), (lastname = ""), (rol = 0));
    setTimeout(() => {
      setLoadingCancel(false);
    }, 1000);
  };

  return (
    <Box my={2} component="form" onSubmit={handleSubmit}>
      <Grid container direction={"row"} spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card variant="outlined">
            <CardContent>
              <TextField
                id="firstname"
                type="text"
                name="firstname"
                value={firstname || ""}
                onChange={handleOnchange}
                margin="dense"
                fullWidth
                error={firstNameError}
                label="FirsName"
                required
                helperText={firstNameError ? "Obligatory field" : ""}
              />
              <TextField
                id="lastname"
                type="text"
                name="lastname"
                value={lastname || ""}
                onChange={handleOnchange}
                margin="dense"
                fullWidth
                error={lastNameError}
                label="LastName"
                required
                helperText={lastNameError ? "Obligatory field" : ""}
              />
              <FormControl required sx={{ width: "100%", mt: "10px" }}>
                <InputLabel
                  id="rol"
                  error={roleError}
                  helperText={roleError ? "Obligatory field" : ""}
                >
                  Rol Develop
                </InputLabel>
                <Select
                  id="rol"
                  name="rol"
                  value={rol || 0}
                  onChange={handleOnchange}
                  fullWidth
                  label="Rol Develop"
                  error={roleError}
                  required
                >
                  <MenuItem value={0}>
                    {roleError ? (
                      <Typography color="error" variant="h8">
                        Obligatory field
                      </Typography>
                    ) : (
                      "Select"
                    )}
                  </MenuItem>
                  
                  {dataEspecialist &&
                    dataEspecialist.map((d, index) => (
                      <MenuItem key={index} value={d.description}>
                        {d.description}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Box
                display="flex"
                justifyContent="center"
                alignItems={"center"}
                sx={{ "& > button": { mt: 3, ml: 2 } }}
              >
                <LoadingButton
                  type="submit"
                  size="small"
                  onClick={handleSubmit}
                  loading={loadingAdd}
                  variant="outlined"
                  disabled={!loadingAdd ? false : true}
                  color="success"
                >
                  Add
                </LoadingButton>
                <LoadingButton
                  type="reset"
                  size="small"
                  onClick={() => {
                    handleCancel(firstname, lastname, rol);
                  }}
                  loading={loadingCancel}
                  variant="outlined"
                  color="warning"
                  disabled={!loadingCancel ? false : true}
                >
                  Cancel
                </LoadingButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
