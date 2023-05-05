export default function KorisnikKomponenta({ ime, godine, onNameChange, onDelete}) {
    return (
        <div>
            <p onClick={onDelete}>
                Pozdrav, moje je ime {ime} i imam {godine} godina.
            </p>
            <input
            type="text"
            onChange={onNameChange}
            value={ime}
            disabled={!onNameChange}
            />
        </div>
    );
};