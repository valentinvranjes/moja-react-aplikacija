import React, { useContext } from "react";
import { Consumer } from '../context/Context';
import Context from '../context/Context';

class Komponenta_5 extends React.Component {
    static contextType = Context;

    render () {
        const { text, number } = this.context;

        const editText = (
            <p>
                Komponenta 5 ispisuje: {text} a poslan je broj: {number}
            </p>
        );

        return (
            <div>
                <h2>Komponenta 5</h2>
                <Consumer>
                    {props => <p>Komponenta 5 ispisuje: {props.text}</p>}
                </Consumer>
            {editText}
            </div>
        );
    }
}

export default Komponenta_5;