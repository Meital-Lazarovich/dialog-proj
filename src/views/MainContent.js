import React, { Component } from 'react';
import DialogBox from '../components/DialogBox'

class MainContent extends Component {
    state = {
        isModalOpen: false
    }

    openDialog = () => {
        this.setState({ isModalOpen: true })
    }

    render() {
        const { isModalOpen } = this.state
        return (
            <section className="main-content">
                <h1>Welcome to the app</h1>
                <button onClick={this.openDialog}>Open dialog</button>
                {isModalOpen && 
                <DialogBox>
                    <h2>I am inside the slot</h2>
                </DialogBox>}
            </section >
        )
    }
}

export default MainContent;