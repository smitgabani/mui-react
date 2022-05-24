import { Button, Paper, Stack } from "@mui/material"
import { useState } from "react"

export default function AdvCounter() {

    const [count, setCount] = useState(15);
    const [color, setColor] = useState("blue");

    function incCtr() {
        var newC = count + 1;

        if(newC > 20) {
            setColor("red");
        }
        setCount(newC);
    }

    function drcCtr() {
        var newC = count - 1;

        if(newC < 20) {
            setColor("blue");
        }
        setCount(newC);
    }

    return(
        <>
            <Stack direction="column">
                <Paper className={`counter_paper ${color}`}>The counter is set to : {count}</Paper>
                <Stack id="h_a" direction="row" spacing={2}>
                    <Button variant="contained" onClick={()=>{setCount(count + 1)}}>+</Button>
                    <Button variant="contained" onClick={()=>{setCount(count - 1)}}>-</Button>
                </Stack>
            </Stack>
        </>
    )
}