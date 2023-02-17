import React from "react";
import classes from "./ClassicButton.module.css";

// с помощью модулей css можно изолировать стили друг от друга без BEM

const ClassicButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.clBtn}>
            {children}
        </button>
    )
}

export default ClassicButton;