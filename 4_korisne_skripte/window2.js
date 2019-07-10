/*jslint sloppy: true, browser: true*/
function newWin() {
    var sOptions = 'menubar=';
    sOptions += document.frm_win.menubar.checked ? '1' : '0';
    sOptions += ',location=';
    sOptions += document.frm_win.location.checked ? '1' : '0';
    sOptions += ',resizable=';
    sOptions += document.frm_win.resizable.checked ? '1' : '0';
    sOptions += ',scrollbars=';
    sOptions += document.frm_win.scrollbars.checked ? '1' : '0';
    sOptions += ',status=';
    sOptions += document.frm_win.status.checked ? '1' : '0';
    sOptions += ',toolbar=';
    sOptions += document.frm_win.toolbar.checked ? '1' : '0';
    if (document.frm_win.wd_new.value !== '') {
        sOptions += ',width=' + document.frm_win.wd_new.value;
    }
    if (document.frm_win.ht_new.value !== '') {
        sOptions += ',height=' + document.frm_win.ht_new.value;
    }
    window.open("", "new_win", sOptions);
}