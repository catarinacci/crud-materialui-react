import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  Card,
  CardContent,
  Collapse,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CrudEdit() {
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

  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastnameError] = useState(false);
  const [firstNameTextError, setFirstNameTextError] = useState(false);
  const [lastNameTextError, setLastnameTextError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    role: 0,
  });
  const { firstName, lastName, role, id } = formData;
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  //const [user, setUser] = useState()

  const handleOnchange = (e) => {
    // console.log(e.target.value.length);
    // console.log(e.target.value);

    if (e.target.value.length === 21) {
      //console.log("ssss")
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 4000);

      const inputDOM = document.getElementById("firstName");
      inputDOM.value = "";
      setInput("");
    }
    if (e.target.value.length === 21) {
      //console.log("ssss")
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
      const inputDOM = document.getElementById("lastName");
      inputDOM.value = "";
      setInput("");
    }

    if (!e.target.value == "") {
      setFirstNameError(false);
      setLastnameError(false);
      setRoleError(false);
      setFirstNameTextError(false);
      //console.log("1");
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoadingAdd(true);
    setFirstNameError(false);
    setLastnameError(false);
    setRoleError(false);

    let variablef = false;
    let variablel = false;
    let variabler = false;

    const firstNamef = formData.firstName;
    const lastNamel = formData.lastName;

    let regexn = new RegExp("^[a-zA-Z ]+$");
    let regexl = new RegExp("^[a-zA-Z ]+$");

    if (formData.firstName == "" || formData.firstName === undefined) {
      setFirstNameError(true);
      variablef = true;
      //console.log(variable,"var")
      console.log("campo firstname vacio");
    } else if (regexn.test(firstNamef)) {
      console.log("campo firstname con texto");
    } else {
      console.log("firsname es numero");
      setFirstNameTextError(true);
      variablef = true;
      setError("erroFirstnameText");
    }

    if (formData.lastName == "" || formData.lastName === undefined) {
      setLastnameError(true);
      variablel = true;
      console.log("campo lastname vacio");
    } else if (regexl.test(lastNamel)) {
      console.log("campo lastname con texto");
    } else {
      console.log("lastname es un numero");
      setLastnameTextError(true);
      variablel = true;
      setError("erroLastnameText");
    }

    if (formData.role === 0 || formData.role === undefined) {
      setRoleError(true);
      variabler = true;
      console.log("campo rol vacio");
    } else {
      console.log("campo rol seleccionado");
    }

    // if (!variablef && !variablel && !variabler) {
    //  //formData.id = Math.floor(Math.random() * 100)
    //   console.log(formData)

    //   formData.id = 10

    //   addUsers(formData);

    //   setFormData({
    //     id: null,
    //     firstName: "",
    //     lastName: "",
    //     role: 0,
    //   });
    // }
    console.log(formData.id);
    console.log(formData.firstName);
    console.log(formData.lastName);
    console.log(formData.role);

    setTimeout(() => {
      setLoadingAdd(false);
    }, 1000);
  };

  const handleCancel = (firstName, lastName, role) => {
    setLoadingCancel(true);
    setFirstNameError(false);
    setLastnameError(false);
    setRoleError(false);

    setFormData((firstName = ""), (lastName = ""), (role = 0));
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
              <Collapse in={open}>
                <Alert
                  severity="warning"
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  No se poeden ingresar mas de 20 caracteres
                </Alert>
              </Collapse>

              <TextField
                id="firstName"
                type="text"
                name="firstName"
                value={firstName || ""}
                onChange={handleOnchange}
                margin="dense"
                fullWidth
                error={
                  error === "erroFirstnameText"
                    ? firstNameTextError
                    : firstNameError
                }
                label="FirsName"
                required
                helperText={ // {()=>{handleErrorText(error, firstNameError)}}
                  error === "erroFirstnameText"
                    ? "Solo ingrsar texto"
                    : "Obligatory field"
                }
                // {handleErrorText(error, firstNameError)}
                // firstNameError ? "Obligatory field" : ""}
              />
              <TextField
                id="lastName"
                type="text"
                name="lastName"
                value={lastName || ""}
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
                  id="role"
                  error={roleError}
                  helperText={roleError ? "Obligatory field" : ""}
                >
                  Rol Develop
                </InputLabel>
                <Select
                  id="role"
                  name="role"
                  value={role || 0}
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
                  Acept
                </LoadingButton>
                <LoadingButton
                  type="reset"
                  size="small"
                  onClick={() => {
                    handleCancel(firstName, lastName, role);
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
