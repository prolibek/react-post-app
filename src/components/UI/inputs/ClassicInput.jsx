import React from "react";
import classes from "./ClassicInput.module.css"

const ClassicInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.clInput} {...props}/>
    )
});

export default ClassicInput;