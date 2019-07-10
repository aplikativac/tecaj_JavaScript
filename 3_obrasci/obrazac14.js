/*jslint browser: true, sloppy: true, plusplus: true*/
// Definiramo novi niz
var asSP = new Array(1);

// Napunimo niz nizova
asSP = [
    // NT 4
    ["(Nema);nema", "Service Pack 1;sp1", "Service Pack 2;sp2",
        "Service Pack 3;sp3", "Service Pack 4;sp4",
        "Service Pack 5;sp5", "Service Pack 6;sp6",
        "Service Pack 6a;sp6a"
        ],
    // 2000
    ["(Nema);nema", "Service Pack 1;sp1", "Service Pack 2;sp2",
        "Service Pack 3;sp3", "Service Pack 4;sp4",
        "Service Pack 4 & Updates;sp4upd"
        ],
    // XP
    ["(Nema);nema", "Service Pack 1;sp1", "Service Pack 2;sp2", "Service Pack 3;sp3"],
    // Vista
    ["(Nema);nema", "Service Pack 1;sp1", "Service Pack 2;sp2"],
    // Se7en
    ["(Nema);nema", "Service Pack 1;sp1"],
    // 8
    ["(Nema);nema", "8.1;81", "8.1 Update 1;81u1"]
];


// Funkcija koja puni oderedjeni select element
// Argumenti:
//      oMenu:     objekt kojega punimo
//      asStavke:  niz iz kojega se puni
//      iStavka:    iz kojeg podniza se puni
function puniSelect(oMenu, asStavke, iStavka) {
    var iSeparator, iBrojac, sStavkaTekst, sStavkaVrijednost;

    // Postavimo duljinu niza na 0
    oMenu.options.length = 0;
    for (iBrojac = 0; iBrojac < asStavke[iStavka].length; iBrojac++) {
        // Provjerimo gdje je separator
        iSeparator = asStavke[iStavka][iBrojac].indexOf(';');
        if (iSeparator === -1) { // Nema ga            
            sStavkaTekst = asStavke[iStavka][iBrojac];
            sStavkaVrijednost = sStavkaTekst;
        } else { // Separator postoji            
            sStavkaTekst = asStavke[iStavka][iBrojac].substr(0, iSeparator);
            sStavkaVrijednost = asStavke[iStavka][iBrojac].substr(iSeparator + 1);
        }
        oMenu.options[iBrojac] = new Option(sStavkaTekst, sStavkaVrijednost);
    }
    oMenu.selectedIndex = oMenu.options.length - 1;
}


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