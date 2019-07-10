/*jslint sloppy: true, browser: true, plusplus: true*/
// Argumenti:
//  sTekst:     ulazni string
//  oPolje:     objekt na kojega se fokusira (obično je to this)
//  sRegEx:     regularni izraz
//  sZadrzi:    regularni izraz znakova koje zadržavamo
//  sPoruka:    poruka o nepravilnom unosu
function test(sTekst, oPolje, sRegEx, sZadrzi, sPoruka) {
    var sReFind = new RegExp(sRegEx),
        sReKeep = new RegExp(sZadrzi),
        sZnak,
        i,
        sIzlaz = sTekst;

    if ((sTekst !== '') && (sReFind.test(sTekst) === false)) {
        window.alert(sPoruka);
        sIzlaz = '';
        for (i = 0; i < sTekst.length; i++) {
            sZnak = sTekst.charAt(i);
            if (sReKeep.test(sZnak)) {
                sIzlaz += sZnak;
            }
        }
        // Ovo je hack jer focus ne radi po standardu u Mozilli/Firefoxu
        setTimeout(function () {
            oPolje.focus();
        }, 10);
    }
    return (sIzlaz);
}

function provjeri() {
    window.alert('Ime i prezime: ' + document.frm_regex.ime.value + '\nTelefon: ' + document.frm_regex.telefon.value);
}