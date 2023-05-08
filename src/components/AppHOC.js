import React from "react";

const withColor = Element => ({ color, ...otherProps }) => (
    <Element {...otherProps} style={{ backgroundColor: color, display: "block"}} />
);

const Button = props => {
    return <button {...props} />;
};

const handleButtonClick = () => {
    alert ("button Clicked");
}

const ColoredButton = withColor(Button);

export default function AppHOC() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <ColoredButton color="red" onClick={handleButtonClick}>
                Ja sam crven!
            </ColoredButton>
            <ColoredButton color="yellow" onClick={handleButtonClick}>
                Ja sam žut!
            </ColoredButton>
            <ColoredButton color="green" onClick={handleButtonClick}>
                Ja sam zelen!
            </ColoredButton>
        </div>
    );
}