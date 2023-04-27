export function KorisnikFunkcija({ime, godine, onNameChange}) {
    return (
        <div>
            <p>Zadatak 11: Moje ime je {ime} i imam {godine} godine</p>
            <input 
                type="text"
                value={ime}
                onChange={onNameChange}
            ></input>
        </div>
    );
}
