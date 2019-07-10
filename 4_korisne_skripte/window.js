/*jslint sloppy: true, browser: true*/
var oProzor;

function novi() {
    oProzor = window.open("", "", "width=250, height=250");
    oProzor.moveTo(300, 400);
}

function velicina() {
    if (oProzor === undefined) {
        window.alert('Prvo stvorite novi prozor!');
        return;
    }
    oProzor.resizeTo(document.frm_win.wd.value, document.frm_win.ht.value);
    oProzor.focus();
}

function promijeniZa() {
    if (oProzor === undefined) {
        window.alert('Prvo stvorite novi prozor!');
        return;
    }
    oProzor.resizeBy(document.frm_win.wd_by.value, document.frm_win.ht_by.value);
    oProzor.focus();
}

function pomakni() {
    if (oProzor === undefined) {
        window.alert('Prvo stvorite novi prozor!');
        return;
    }
    oProzor.moveTo(document.frm_win.x.value, document.frm_win.y.value);
    oProzor.focus();
}
