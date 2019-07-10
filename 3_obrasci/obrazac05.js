/*jslint browser: true, sloppy: true*/
function provjeri() {
    var sIme = '';

    sIme = document.getElementById('ime').value;
    if (sIme === '') {
        window.alert('Ime je prazno!');
    } else {
        window.alert('Ime je: ' + sIme);
    }
}