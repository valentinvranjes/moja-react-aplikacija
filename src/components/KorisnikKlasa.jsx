import React from "react";

export default class KorisnikKlasa extends React.Component {
    render() {
        const {ime, godine, onButtonClick} = this.props;
        return (
            <div>
                <p>Moje ime je {ime} i imam {godine} godine</p>
                
                <button onClick={onButtonClick}>
                Klikni me!
                </button>

            </div>
        );
    }
}

// drugi način
// export default class KorisnikKlasa extends React.Component {
//     render() {
//         const {ime, godine} = this.props;
//         return (
//             <div>
//                 <p>Moje ime je {this.props.ime} i imam {this.props.godine} godine</p>
//             </div>
//         );
//     }
// }