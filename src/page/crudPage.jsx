import { Box, Typography } from "@mui/material";
// import CrudForm from "../components/crudForm";
// import CrudTabe from "../components/crudTable";
import Crud from "../components/crud";


export default function CrudPage(){
    return(
        <> 
            <Box display="flex" justifyContent="center" alignItems={'center'} flexDirection={'column'}>
                <Typography variant="h3">CRUD</Typography>
                {/* <CrudForm/>
                <CrudTabe/>*/}
                <Crud/> 
            </Box>
            
        </>
    )
}