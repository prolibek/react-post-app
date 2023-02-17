import React from "react";
import classes from "./Modal.module.css";

function Modal({children, visible, setVisible}) {

    let rootClasses = [classes.Modal]

    if(visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.ModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;