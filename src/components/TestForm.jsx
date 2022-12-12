import React from "react";
import { TextField, Stack, FormControl, Checkbox } from "@mui/material";
import { Container } from "@mui/system";


function TestForm() {
    return ( 
        <Container>
            <Stack direction="row" spacing={2} sx={{mt: 3, mb: 3}}>
                <TextField type="text" variant='outlined' defaultValue="Outlined" />
                <TextField type="text" variant='filled' defaultValue="Filled" />
            </Stack>
            <Stack direction="row" spacing={2} sx={{mt: 3, mb: 3}}>
                <TextField type="text" color='primary' defaultValue="Primary" />
                <TextField type="text" color='secondary' defaultValue="Secondary" />
                <TextField type="text" color='warning' defaultValue="Warning" />
             </Stack>
            <Stack direction="row" spacing={2} sx={{mt: 3, mb: 3}}>
                <TextField type="text" size='small' defaultValue="Small" />
                <TextField type="text" size='normal' defaultValue="Normal" />
            </Stack>
            <Stack direction="row" spacing={2} sx={{mt: 3, mb: 3}}>
                <Checkbox defaultChecked color="secondary" />
                <Checkbox color="secondary" />
                <Checkbox disabled color="secondary" />
            </Stack>
        </Container>
     );
}

export default TestForm;