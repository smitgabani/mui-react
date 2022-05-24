import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { style } from '@mui/system';
import { useState } from 'react';

export default function MUIbutton () {
    const [btncolour, setColour] = useState("success");
    var change = () => {
        if(btncolour == "primary"){
            setColour("success");
        }
        else if (btncolour == "success") {
            setColour("primary");
        }
    }
    return (
        <>
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={change}>Click this</Button>
            <Button variant="contained" color={btncolour}>Change this</Button>
        </Stack>
        </>
    )
}

