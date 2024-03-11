import React, { useState } from "react";
//import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { LoadingButton } from "@mui/lab";
import { NavLink } from "react-router-dom";
//import usuarios from "../../helper/usuarios.json";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 200,
    editable: true,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
    editable: true,
  },
];
//const [users, setUsers] = useState([])



// setUsers(usuarios)


export default function CrudTabe({users, setEditUsers}) {

  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  
  const rows = users 

  const showSeleted = () => {
    setLoadingAdd(true);
    //console.log(rows)
    let userSelected = []

    rowSelectionModel.map((item) => {
      console.log(rows[item - 1]);
      userSelected.push(rows[item - 1])
    });

    userSelected.push(rowSelectionModel)
    console.log(rowSelectionModel)
    console.log(userSelected[0].firstName)
    console.log(Object.fromEntries(userSelected));
    console.log(Object.assign(userSelected));

    setTimeout(() => {
      setLoadingAdd(false);
    }, 2000);
  };

  return (
    <Box my={2} sx={{ height: 400, width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              //proleSize: 5,
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        //proleSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        sx={{ "& > button": { mt: 2, ml: 2 } }}
        p={2}
      >
        <LoadingButton sx={{ mr: 2 }}
          size="small"
          //onClick={() => setEditUsers(rows)}
          onClick={showSeleted}
          loading={loadingAdd}
          variant="outlined"
          disabled={!loadingAdd ? false : true}
          component={NavLink} 
          to="/crud-edit"
        >
          Edit
        </LoadingButton>
        <LoadingButton sx={{ ml: 2 }}
          size="small"
          //onClick={showSeleted}
          loading={loadingDelete}
          variant="outlined"
          color="error"
          disabled={!loadingDelete ? false : true} 
          component={NavLink} 
        >
          Delete
        </LoadingButton>
      </Box>
    </Box>
  );
}
