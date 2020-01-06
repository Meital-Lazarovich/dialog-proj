import React, { Component } from 'react';
import DialogBox from '../components/DialogBox'

class MainContent extends Component {
    state = {
        isDialogOpen: false
    }

    setDialogIsOpen = (isOpen) => {
        this.setState({ isDialogOpen: isOpen })
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
                        className="modal"
                        isDialogOpen={isDialogOpen}
                        onClose={() => this.setDialogIsOpen(false)}>
                        <h2>I am inside the slot</h2>
                        <button>I'm working</button>
                        <button disabled>I'm disabled</button>
                        <button onClick={() => this.setDialogIsOpen(false)}>Close modal</button>
                    </DialogBox>}
                <button>Just a button</button>
            </section >
        )
    }
}

export default MainContent;