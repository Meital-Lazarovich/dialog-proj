import React, { Component } from 'react';
import DialogBox from '../components/DialogBox'

class MainContent extends Component {
    state = {
        isDialogOpen: false
    }

    setDialogIsOpen = (isOpen) => {
        this.setState({ isDialogOpen: isOpen })
    }

    modalStyle = {
        dialog: {
            color: 'green'
        },
        visualOverlay: {
            height: '100vh',
            width: '100vw',
            backgroundColor: '#00000085',
            position: 'fixed',
            top: 0,
            left: 0
        }
    }

    render() {
        const { isDialogOpen } = this.state
        return (
            <section className="main-content">
                <h1>Welcome to the app</h1>
                <button>Just a button</button>
                <button onClick={() => this.setDialogIsOpen(true)}>Open dialog</button>
                {isDialogOpen &&
                    <DialogBox
                        // The styling can be controlled by passing a className
                        // that has it's own style, or by passing a style object:
                        className="modal"
                        // style={this.modalStyle}

                        isDialogOpen={isDialogOpen}
                        onClose={() => this.setDialogIsOpen(false)}>
                        <h2>I am inside the slot</h2>
                        <button onClick={() => console.log('clickeddd')}>I'm working</button>
                        <button disabled>I'm disabled</button>
                        <button onClick={() => this.setDialogIsOpen(false)}>Close modal</button>
                        <a href="https://www.w3schools.com">click me</a>
                    </DialogBox>}
                <button>Just a button</button>
            </section >
        )
    }
}

export default MainContent;