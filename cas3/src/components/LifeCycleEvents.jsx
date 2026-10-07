import React from 'react';

export class LifeCycleEvents extends React.Component {

    constructor(props) {
        super(props);
        console.log("This is called from the constructor");

        this.state = {
            promenliva: 'Vrednost 1'
        }

    }

    componentDidMount() {
        console.log("This is Component DID MOUNT")
    }

    smeniVrednost = () => {
        // this.state.promenliva = 'Nova Vrednost';
        this.setState({
            promenliva: 'Nova Vrednost'
        }, () => {
            console.log(this.state.promenliva)
        })
        console.log(this.state.promenliva)
    }

    render() {
        console.log("This is RENDER METHOD")
        return (
            <div id='lifecycle-events'>
                <h2>Class Component</h2>
                <p>Vrednost na state: {this.state.promenliva}</p>
                <button onClick={this.smeniVrednost}>Click Me !</button>
            </div>
        )
    }
}