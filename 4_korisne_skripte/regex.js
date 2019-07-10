/*jslint sloppy: true, browser: true*/
// Argumenti:
//  sTekst:     ulazni string
//  oPolje:     objekt na kojega ase fokusira (obično je to this)
//  sRegEx:     regularni izraz
function test(sTekst, oPolje, sRegEx) {
    var re = new RegExp(sRegEx); // regular expression

    if ((sTekst !== '') && (re.test(sTekst) === false)) {
        window.alert('Unešena vrijednost nije pravilnog oblika!');
        // Ovo je hack jer focus ne radi po standardu u Mozilli/Firefoxu
        setTimeout(function () {
            oPolje.focus();
        }, 10);
    }
}

function provjeri() {
    window.alert('Ime i prezime: ' + document.frm_regex.ime.value + '\nTelefon: ' + document.frm_regex.telefon.value);
}