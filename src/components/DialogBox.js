import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

const DialogBox = (props) => {
    const [isVisable, setIsVisable] = useState(true);

    const handleKeydown = (ev) => {
        if (ev.key === 'Escape') {
            hideDialog()
        };
    }

    const hideDialog = () => {
        setIsVisable(false)
    }

    // DELETE STYLING
    const visualOverlayStyle = {height: '100vh', width: '100vw', backgroundColor: '#00000085', position: 'fixed', top: 0, left: 0}

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    });

    return ReactDOM.createPortal(
        <>
            {isVisable && <>
            <div className="visual-overlay" onClick={hideDialog} style={visualOverlayStyle}></div>
            <dialog style={{ display: 'block' }}>
                <div role="document">
                    {props.children}
                </div>
            </dialog>
            </>}
        </>,
        document.getElementById('dialogPlaceholder')
    )
}

export default DialogBox;
