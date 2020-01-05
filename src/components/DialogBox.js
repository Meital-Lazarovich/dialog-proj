import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'

const DialogBox = (props) => {
    const handleKeydown = (ev) => {
        if (ev.key === 'Escape') {
            hideDialog()
        };
    }

    const hideDialog = () => {
       props.onClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    });

    return ReactDOM.createPortal(
        <section className={props.className}>
            <div className="visual-overlay" onClick={hideDialog} ></div>
            <dialog style={{ display: 'block' }}>
                <div role="document">
                    {props.children}
                </div>
            </dialog>
        </section>,
        document.getElementById('dialogPlaceholder')
    )
}

export default DialogBox;
