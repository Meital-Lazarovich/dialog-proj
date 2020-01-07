import React, { Component } from 'react';
import DialogBox from '../components/DialogBox'

class MainContent extends Component {
    state = {
        isModalOpen: false,
        isDialogOpen: false
    }

    setModalIsOpen = (isOpen) => {
        this.setState({ isModalOpen: isOpen })
    }

    openDialog = () => {
        this.setState({ isDialogOpen: true })
        setTimeout(() => this.setState({ isDialogOpen: false }), 2000)
    }

    closeDialog = () => {
        this.setState({ isDialogOpen: false })
    }

    getRandomNiceText = () => {
        const randomNum = Math.random();
        if (randomNum > 0.75) return 'Have a great day!'
        else if (randomNum > 0.5) return 'Hope you will have a wonderful week'
        else if (randomNum > 0.25) return 'What a lovely afternoon!'
        else return 'This day is going to be amazing!'
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
        const { isModalOpen, isDialogOpen } = this.state
        return (
            <section className="main-content">
                <h1>Welcome to the app</h1>
                <nav>
                    <button onClick={() => this.setModalIsOpen(true)}>Open the main modal</button>
                    <button onClick={() => this.openDialog()}>Tell me something nice</button>
                </nav>
                {isModalOpen &&
                    <DialogBox
                        // The styling can be controlled by passing a className
                        // that has it's own style, or by passing a style object:
                        className="modal"
                        // style={this.modalStyle}

                        onClose={() => this.setModalIsOpen(false)}>
                        <a target='/blank' href="https://www.haaretz.co.il/"
                            onClick={() => this.setModalIsOpen(false)}>
                            Read the newspaper
                        </a>
                        <button onClick={() => this.setModalIsOpen(false)}>Close modal</button>
                    </DialogBox>}
                {isDialogOpen &&
                    <DialogBox
                        className="small-dialog"
                        onClose={() => this.closeDialog()}>
                        <button onClick={() => this.closeDialog()}>X</button>
                        <h3>{this.getRandomNiceText()}</h3>
                    </DialogBox>}
            </section >
        )
    }
}

export default MainContent;