import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React from 'react'

const PlanOne = () => {
    return(
        <Stack direction='row' alignItems='center'>
            <Typography>Plan Gold: $50.00/month</Typography>
        </Stack>
    )
}
const PlanTwo = () => {
    return(
        <Stack direction='row' alignItems='center'>
            <Typography>Plan Silver: $20.00/month</Typography>
        </Stack>
    )
}
const PlanThree = () => {
    return(
        <Stack direction='row' alignItems='center'>
            <Typography>Plan Bronze: $10.00/month</Typography>
        </Stack>
    )
}

const SelectPlan = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <Stack>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value='gold' control={<Radio />} label={<PlanOne />} />
                    <FormControlLabel value="silver" control={<Radio />} label={<PlanTwo />} />
                    <FormControlLabel value="bronze" control={<Radio />} label={<PlanThree />} />
                </RadioGroup>
            </FormControl>
        </Stack>
    )
}

export default SelectPlan