import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

const DialogBox = (props) => {
    const [isVisable, setIsVisable] = useState(true);

    const handleKeydown = (ev) => {
        if (ev.key === 'Escape') {
            setIsVisable(false)
        };
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    });

    return ReactDOM.createPortal(
        <>
            {isVisable && <>
            <div className="visual-overlay"></div>
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
