// ovo je interna fukncija koju ne exportamo 
function isNumber(broj) {
    return Number(broj) === broj;
}

export function ConditionalRendering ({props}) {
    console.log("props value=" + props);
    if (props === undefined) return;
    if (!isNumber(props)) return;
   
    var isVeci = false;
    if (props > 10){
        isVeci = true;
    }
    return (
        <div>
            {isVeci && <p>Broj je veći od 10 - ({props})</p>}
            {!isVeci && <p>Broj je manji od 10 - ({props})</p>}
            Druga komponenta ConditionalRendering
        </div>
    );
}