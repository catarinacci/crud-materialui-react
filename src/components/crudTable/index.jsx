import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { LoadingButton } from "@mui/lab";

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

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", role: "Back End" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", role: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", role: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', role: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', role: null },
    { id: 6, lastName: 'Melisandre', firstName: null, role: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', role: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', role: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', role: 65 },
];

export default function CrudTabe() {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
 
  const showSeleted = () => {
    setLoadingAdd(true);

    rowSelectionModel.map((item) => {
      console.log(rows[item - 1]);
    });

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
              pageSize:5,
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
        <LoadingButton
          size="small"
          onClick={showSeleted}
          loading={loadingAdd}
          variant="outlined"
          disabled={!loadingAdd ? false : true}
        >
          Edit
        </LoadingButton>
        <LoadingButton
          size="small"
          //onClick={showSeleted}
          loading={loadingDelete}
          variant="outlined"
          color="error"
          disabled={!loadingDelete ? false : true}
        >
          Delete
        </LoadingButton>
      </Box>
    </Box>
  );
}
