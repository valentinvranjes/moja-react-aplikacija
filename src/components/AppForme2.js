import React from "react";
import KorisnikKomponenta from './KorisnikKomponenta';
import NoviKorisnikKomponenta from './NoviKorisnikKomponenta';

export default class AppForme2 extends React.Component {
    state = { 
        korisnici: [
            { id: new Date().getTime(), ime: 'Ivan', godine: 30},
            { id: new Date().getTime(), ime: 'Marko', godine: 35},
            { id: new Date().getTime(), ime: 'Ivan', godine: 25},
        ],
    };

handleButtonPress = () => {
    const { korisnici } = this.state;

    const noviKorisnici = korisnici.map(korisnik => {
        return { ...korisnik, godine: korisnik.godine + 1 };
    });

    this.setState({ korisnici: noviKorisnici });
};

handleNameChange = (event, index) => {
    const { korisnici } = this.state;
    const noviKorisnici = [...korisnici];

    noviKorisnici[index].ime = event.target.value;
    this.setState({ korisnici: noviKorisnici});
};

handleDeleteUser = index => {
    let noviKorisnici = [...this.state.korisnici];
    noviKorisnici.splice(index, 1);

    this.setState({ korisnici: noviKorisnici });
};

addNewUser = ({ ime, godine }) => {
    const NoviKorisnik = {
        id: `${ime}_${new Date().getMilliseconds()}`,
        ime,
        godine,
    };

    this.setState({ korisnici: [...this.state.korisnici, NoviKorisnik]});
};

render () {
    const { korisnici } = this.state;

    return (
        <div>
            <h1>React aplikacija</h1>
            <p>5.15 - Forme2</p>
            <button onClick={this.handleButtonPress}>Promjena godina</button>
        
        {korisnici.map((korisnik, index) => (
        <KorisnikKomponenta
            key={korisnik.id}
            ime={korisnik.ime}
            godine={korisnik.godine}
            onNameChange={event => this.handleNameChange(event,index)}
            onDelete={() =>this.handleDeleteUser(index)}
        />
        ))}
        <NoviKorisnikKomponenta onUserSubmit={this.addNewUser} />
        </div>
    );
}
}