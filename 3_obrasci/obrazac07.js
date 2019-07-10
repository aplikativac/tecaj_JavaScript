/*jslint browser: true, sloppy: true*/
function provjeri() {
    var sIme = '',
        sPrezime = '',
        bOK = false;

    sIme = document.getElementById('ime').value;
    sPrezime = document.getElementById('prezime').value;
    if (sIme === '') {
        window.alert('Ime je prazno!');
        bOK = false;
    } else {
        window.alert('Ime je: ' + sIme);
        bOK = true;
    }
    if (sPrezime === '') {
        window.alert('Prezime je prazno!');
        bOK = false;
    } else {
        window.alert('Prezime je: ' + sPrezime);
        bOK = bOK && true;
    }
    return bOK;
}