import { TextField } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'

const FormOne = () => {
    return (
        <Stack alignItems='center' justifyContent='center'>
            <Stack direction='row' alignItems='center' spacing={2}>
                <TextField id="standard-basic" label="Name" variant="standard" />
                <TextField id="standard-basic" label="Last Name" variant="standard" />
            </Stack>
            <TextField sx={{ width: '340px' }} id="standard-basic" label="Email" variant="standard" />
            <Stack direction='row' alignItems='center' spacing={2}>
                <TextField id="standard-basic" label="Password" variant="standard" />
                <TextField id="standard-basic" label="Repeat Password" variant="standard" />
            </Stack>
        </Stack>
    )
}

export default FormOne