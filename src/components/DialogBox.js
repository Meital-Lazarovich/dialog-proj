import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'

const DialogBox = (props) => {
        const handleKeydown = ({ key }) => {
            if (key === 'Escape') return hideDialog();
            // Trapping the tab inside the component without using 'focus-trap' package:
            console.log('key', key);
        }

        const hideDialog = () => {
            props.onClose();
        }

        useEffect(() => {
            const contentFocusedEl = document.activeElement
            const contentEls = document.querySelectorAll('body > div:not(#dialogPlaceholder)')
            contentEls.forEach(el => el.setAttribute('aria-hidden', true))
            document.addEventListener("keydown", handleKeydown);
            return () => {
                contentFocusedEl.focus()
                contentEls.forEach(el => el.removeAttribute('aria-hidden'))
                document.removeEventListener("keydown", handleKeydown);
            };
        });

        return ReactDOM.createPortal(
            <section className={props.className} style={props.style}>
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
