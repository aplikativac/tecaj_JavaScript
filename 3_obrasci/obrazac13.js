/*jslint browser: true, sloppy: true, plusplus: true*/
function provjeri() {
    var sIme = '',
        sPrezime = '',
        sPogreska = '',
        sPoruka = '',
        sKomp = '',
        aoKomp,
        iStavka,
        iSPStavka,
        iBrojac;

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
    aoKomp = document.getElementsByName('komp');
    for (iBrojac = 0; iBrojac < aoKomp.length; iBrojac++) {
        if (aoKomp[iBrojac].checked) {
            sKomp = aoKomp[iBrojac].value;
        }
    }
    if (sKomp === '') {
        sPogreska += '\nNiste izabrali vrstu računala!';
    } else {
        sPoruka += '\nRačunalo je: ' + sKomp;
    }

    sPoruka += '\nPristup internetu je ';
    sPoruka += document.getElementById('internet').checked ?
            'širokopojasni!' :
            'modemom!';
    
    iStavka = document.getElementById('os').selectedIndex;
    sPoruka += '\nOS: ';
    sPoruka += document.getElementById('os').options[iStavka].text;
    sPoruka += ' (';
    sPoruka += document.getElementById('os').options[iStavka].value;
    sPoruka += ')!';
    
    iSPStavka = document.getElementById('srv_pack').selectedIndex;
    sPoruka += '\nSP: ';
    sPoruka += document.getElementById('srv_pack').options[iSPStavka].text;
    sPoruka += ' (';
    sPoruka += document.getElementById('srv_pack').options[iSPStavka].value;
    sPoruka += ')!';
    
    if (sPogreska === '') {
        window.alert(sPoruka);
        return true;
    } else {
        window.alert(sPogreska);
        return false;
    }
}