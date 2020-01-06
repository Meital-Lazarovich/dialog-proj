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
        const contentEls = document.querySelectorAll('body > div:not(#dialogPlaceholder)')
        contentEls.forEach(el => el.setAttribute('aria-hidden', true))
        document.addEventListener("keydown", handleKeydown);
        return () => {
            contentEls.forEach(el => el.setAttribute('aria-hidden', false))
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
