import React from "react";

export default class NoviKorisnikKomponenta extends React.Component {
    state = {
        ime: '',
        godine: '',
    };


onNameChange = event => {
    const ime = event.target.value;
    this.setState ({ ime });
};

onYearsChange = event => {
    const godine = event.target.value;
    this.setState ({ godine: parseInt(godine, 10)});
};

handleUserSubmit = event => {
    event.preventDefault();
    const { ime, godine } = this.state;

        if (ime && godine) {
            const { onUserSubmit} = this.props;
            onUserSubmit({ ime, godine });

            this.setState({ ime: '', godine: ''});
        }
};

render () {
    const { ime, godine } = this.state;


return (
    <form onSubmit={this.handleUserSubmit}>
        <label>
            Novi korisnik:
            <input
                type="text"
                name="Ime"
                placeholder="Ime"
                onChange={this.onNameChange}
                value={ime}
            />
            <input
                type="text"
                name="Godine"
                placeholder="Godine"
                onChange={this.onYearsChange}
                value={godine}
            />
        </label>
        <button type="submit">Prihvati</button>
    </form>
);

}
}