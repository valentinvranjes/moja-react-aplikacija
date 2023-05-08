import React, { useContext } from "react";
import { Consumer } from '../context/Context';
import Context from '../context/Context';
// import Komponenta5 from './Komponenta_5';

export default function Komponenta_4() {
    const contextObject = useContext(Context);
    const { text, number } = contextObject;

    const editText = `${text} preko funkcije, a poslani broj je: ${number}`;
    return (
        <div>
            <h2>Komponenta 4</h2>
            <Consumer>{props => <p>{props.text}</p>}</Consumer>
            <p>{editText}</p>
        </div>
    );
}