import { Box, Typography } from "@mui/material";
import CrudForm from "../components/crudForm";
import CrudTabe from "../components/crudTable";


export default function Crud(){
    return(
        <> 
            <Box display="flex" justifyContent="center" alignItems={'center'} flexDirection={'column'}>
                <Typography variant="h3">CRUD</Typography>
                <CrudForm/>
                <CrudTabe/>
            </Box>
            
        </>
    )
}