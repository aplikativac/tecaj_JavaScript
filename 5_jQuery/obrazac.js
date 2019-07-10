/*jslint browser: true, sloppy: true*/
/*global $, jQuery*/

$("#obrazac1").validate({
    rules: {
        ime: "required",
        prezime: "required",
        komp: "required"
    },
    messages: {
        ime: "Niste upisali ime!",
        prezime: "Niste upisali prezime!",
        komp: "Niste odabrali vrstu računala!"
    },
    errorPlacement: function (error, element) {
        if (element.attr('type') === 'radio') {
            error.insertAfter(
                element.siblings('label')
            );
        } else {
            error.insertAfter(element);
        }
    },
    submitHandler: function (form) {
        var sMessage = 'Ime je: ' + $('#ime').val();
        sMessage += '\nPrezime je: ' + $('#prezime').val();
        sMessage += '\nRačunalo je: ' + $("#obrazac1 input[name='komp']:checked").val();
        sMessage += '\nPristup internetu je ';
        sMessage +=  $("#internet").is(':checked') ?
                'širokopojasni!' :
                'modemom!';
        sMessage += '\nOS: ' + $('#os>option:selected').text();
        sMessage += ' (' + $('#os').val() + ')';
        
        sMessage += '\nSP: ' + $('#srv_pack>option:selected').text();
        sMessage += ' (' + $('#srv_pack').val() + ')';
        
        window.alert(sMessage);
        form.submit();
    }
});
 
$("#srv_pack").chained("#os");
$("#os").on('change', function () {
    $("#srv_pack option:last-child").attr("selected", "selected");
});
