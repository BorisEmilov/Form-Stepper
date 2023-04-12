import React, { useState } from 'react'
import { IconButton, Stack, TextField, Typography } from '@mui/material'
import { FaCcMastercard, FaCcVisa, FaPaypal } from 'react-icons/fa'

const Payment = () => {
  const [payment, setPayment] = useState('mastercard')


  return (
    <Stack direction='column' alignItems='center' spacing={2}>
      <Typography variant='h5'>Payment Info</Typography>
      <Stack direction='column' alignItems='center' spacing={0.2}>
      <Typography variant='caption'>Select your card: </Typography>
        <Stack direction='row' alignItems='center' spacing={2}>
        <IconButton>
          <FaCcMastercard color={payment === 'mastercard' ? 'blue' : 'gray'} onClick={() => setPayment('mastercard')} size={35} />
        </IconButton>
        <IconButton>
          <FaCcVisa color={payment === 'visa' ? 'blue' : 'gray'} onClick={() => setPayment('visa')} size={35} />
        </IconButton>
        <IconButton>
          <FaPaypal color={payment === 'paypal' ? 'blue' : 'gray'} onClick={() => setPayment('paypal')} size={35} />
        </IconButton>
        </Stack>
      </Stack>
      {
        payment === 'paypal' ?
          <Stack direction='column' alignItems='center' spacing={1.5}>
          <TextField sx={{ width: '350px' }} id="standard-basic" label="Paypal Email" variant="standard" />
          </Stack>
          :
          <Stack direction='column' alignItems='center' spacing={1.5}>
            <TextField sx={{ width: '100%' }} id="standard-basic" label="Card Number" variant="standard" />
            <Stack direction='row' alignItems='center' spacing={1}>
              <TextField id="standard-basic" label="CCV" variant="standard" />
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </Stack>
            <TextField sx={{ width: '100%' }} id="standard-basic" label="Holder Name" variant="standard" />
          </Stack>
      }
    </Stack>
  )
}

export default Payment