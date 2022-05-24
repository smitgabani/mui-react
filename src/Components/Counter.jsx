import { Component, useState } from "react";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

// *
// TODO: create a counter with props {increment numer}
// *

// export default function Counter() {
//     const [count, setCount] = useState(0);

//     return(
//         <>
//             <Paper id="counter_paper" elevated={5}>The count is: {count}</Paper>
//             <Button variant="contained">Increase</Button>
//         </>
//     );
// }

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        //this.state.count=0;
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
        console.log(this.props.inc)
    }

    drecement = () => {
        this.setState({count: this.state.count - 1})
        console.log(this.props.inc)
    }

    render() {
        return(
            <>
                <Paper id="counter_paper">The count is: {this.state.count} </Paper>

                <Button variant="contained" onClick={this.increment}>Increment</Button>
                <Button variant="contained" color="success" onClick={this.drecement}>Decrement</Button>
            </>
        )
    }
}

export default Counter;