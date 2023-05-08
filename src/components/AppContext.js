import React from "react";
import { Provider } from "./context/Context";
import Komponenta1 from "./context-components/Komponenta_1";

export default function AppContext() {
    const [number, setNumber] = React.useState(0);

    const handleChange = event => {
        setNumber(event.target.value);
    };
 
    return (
        <Provider value={{ text: 'Komponenta 4 je najbolja', number }}>
            <label>
                Postavi u context:
                <input type="number" onChange={handleChange} defaultValue={number} />
            </label>
        <Komponenta1 />
        </Provider>
    )
};