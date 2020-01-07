import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';

const DialogBox = (props) => {

    useEffect(() => {
        const contentFocusedEl = document.activeElement;
        const contentEls = document.querySelectorAll('body > div:not(#dialogPlaceholder)');
        contentEls.forEach(el => el.setAttribute('aria-hidden', true));
        document.addEventListener('keydown', handleKeydown);

        return () => {
            contentFocusedEl.focus()
            contentEls.forEach(el => el.removeAttribute('aria-hidden'))
            document.removeEventListener('keydown', handleKeydown);
        };
    });

    const handleKeydown = ({ key }) => {
        if (key === 'Escape') hideDialog();
    }

    const hideDialog = () => {
        props.onClose();
    }

    return ReactDOM.createPortal(
        <FocusTrap>
            <section className={props.className} >
                <div className="visual-overlay" onClick={hideDialog} style={props.style?.visualOverlay}></div>
                <dialog style={{ display: 'block', ...props.style?.dialog }}>
                    <div role="document">
                        {props.children}
                    </div>
                </dialog>
            </section>
        </FocusTrap>,
        document.getElementById('dialogPlaceholder')
    )
}

export default DialogBox;
