/*jslint browser: true, sloppy: true*/
function provjeri() {
    var sIme = '',
        sPrezime = '',
        sPogreska = '',
        sPoruka = '';

    sIme = document.getElementById('ime').value;
    sPrezime = document.getElementById('prezime').value;
    if (sIme === '') {
        sPogreska += 'Ime je prazno!';
    } else {
        sPoruka += 'Ime je: ' + sIme;
    }
    if (sPrezime === '') {
        sPogreska += '\nPrezime je prazno!';
    } else {
        sPoruka += '\nPrezime je: ' + sPrezime;
    }
    if (sPogreska === '') {
        window.alert(sPoruka);
        return true;
    } else {
        window.alert(sPogreska);
        return false;
    }
}