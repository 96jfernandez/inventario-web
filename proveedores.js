var isEditing = false,
    tempnombreValue = "",
    tempdireccionValue = "",
    temprifValue = "",
    temptelefonoValue = "",
    tempemailValue = "";


var availableTags;

// Handles live/dynamic element events, i.e. for newly created edit buttons
$(document).on('click', '.edit', function () {
    var parentRow = $(this).closest('tr'),
        tableBody = parentRow.closest('tbody'),
        tdnombre = parentRow.children('td.nombre'),
        tddireccion = parentRow.children('td.direccion'),
        tdrif = parentRow.children('td.rif')
    tdtelefono = parentRow.children('td.telefono'),
    tdemail = parentRow.children('td.email');

    if (isEditing) {
        var nombre = tableBody.find('input[name="nombre"]'),
            direccion = tableBody.find('input[name="direccion"]'),
            rif = tableBody.find('input[name="rif"]'),
            telefono = tableBody.find('input[name="telefono"]'),
            email = tableBody.find('input[name="email"]'),

            tdnombre = nombre.closest('td'),
            tddireccion = direccion.closest('td'),
            tdrif = rif.closest('td'),
            tdtelefono = telefono.closest('td'),
            tdemail = email.closest('td'),

            currentEdit = tdnombre.parent().find('td.edit');

        if ($(this).is(currentEdit)) {
            // Save new values as static html
            var tdnombreValue = nombre.prop('value'),
                tddireccionValue = direccion.prop('value'),
                tdrifValue = rif.prop('value'),
                tdtelefonoValue = telefono.prop('value'),
                tdemailValue = email.prop('value');

            tdnombre.empty();
            tddireccion.empty();
            tdtelefono.empty();
            tdrif.empty();
            tdemail.empty();

            tdnombre.html(tdnombreValue);
            tddireccion.html(tddireccionValue);
            tdtelefono.html(tdtelefonoValue);
            tdrif.html(tdrifValue);
            tdemail.html(tdemailValue);
        }
        else {
            // Restore previous html values
            tdnombre.empty();
            tddireccion.empty();
            tdtelefono.empty();
            tdrif.empty();
            tdemail.empty();

            tdnombre.html(tempnombreValue);
            tddireccion.html(tempdireccionValue);
            tdtelefono.html(temptelefonoValue);
            tdrif.html(temprifValue);
            tdemail.html(tempemailValue);
        }
        // Display static row
        currentEdit.html('Edit');
        isEditing = false;
    }
    else {
        // Display editable input row
        isEditing = true;
        $(this).html('Save');

        var tdnombreValue = tdnombre.html(),
            tddireccionValue = tddireccion.html(),
            tdrifValue = tdrif.html(),
            tdtelefonoValue = tdtelefono.html(),
            tdemailValue = tdemail.html();

        // Save current html values for canceling an edit
        tempnombreValue = tdnombreValue;
        tempdireccionValue = tddireccionValue;
        temprifValue = tdrifValue;
        temptelefonoValue = tdtelefonoValue;
        tempemailValue = tdemailValue;


        // Remove existing html values
        tdnombre.empty();
        tddireccion.empty();
        tdrif.empty();
        tdtelefono.empty();
        tdemail.empty();

        // Create input forms
        tdnombre.html('<input style="width:90%" type="text" name="nombre" value="' + tdnombreValue + '">');
        tddireccion.html('<input style="width:9¡90%" type="text" name="direccion" value="' + tddireccionValue + '">');
        tdrif.html('<input style="width:90%" type="text" name="rif" value="' + tdrifValue + '">');
        tdtelefono.html('<input style="width:90%" type="text" name="telefono" value="' + tdtelefonoValue + '">');
        tdemail.html('<input style="width:90%" type="text" name="email" value="' + tdemailValue + '">');
    }
});

// Handles live/dynamic element events, i.e. for newly created trash buttons
$(document).on('click', '.trash', function () {
    // Turn off editing if row is current input
    if (isEditing) {
        var parentRow = $(this).closest('tr'),
            tableBody = parentRow.closest('tbody'),
            tdInput = tableBody.find('input').closest('td'),
            currentEdit = tdInput.parent().find('td.edit'),
            thisEdit = parentRow.find('td.edit');

        if (thisEdit.is(thisEdit)) {
            isEditing = false;
        }
    }

    // Remove selected row from table
    $(this).closest('tr').remove();
});

$(document).on('click', '.new-row', (function () {
    var tableBody = $(this).closest('tbody'),
        trNew = '<tr><td class="nombre"><input Type="text" name="nombre" value ""></td><td class="direccion"><input type="text" name="direccion" value=""></td><td class="rif"><input type="text" name="rif" value=""></td><td class="telefono"><input type="text" name="telefono" value=""></td><td class="email"><input type="text" name="email" value=""></td><td class="edit">Save</td><td class="trash">delete</td></tr>';

    if (isEditing) {
        var nombreInput = tableBody.find('input[name="nombre"]'),
            direccionInput = tableBody.find('input[name="direccion"]'),
            rifInput = tableBody.find('input[name="rif"]'),
            telefonoInput = tableBody.find('input[name="telefono"]'),
            emailInput = tableBody.find('input[name="email"]'),

            tdnombreInput = nombreInput.closest('td'),
            tddireccionInput = direccionInput.closest('td'),
            tdrifInput = rifInput.closest('td'),
            tdtelefonoInput = telefonoInput.closest('td'),
            tdemailInput = emailInput.closest('td'),
            currentEdit = tdnombreInput.parent().find('td.edit');

        // Get current input values for newly created input cases
        var newnombreInput = nombreInput.prop('value'),
            newdireccionInput = direccionInput.prop('value'),
            newrifInput = rifInput.prop('value'),
            newtelefonoInput = telefonoInput.prop('value'),
            newemailInput = emailInput.prop('value');

        // Restore previous html values
        tdnombreInput.empty();
        tddireccionInput.empty();
        tdrifInput.empty();
        tdtelefonoInput.empty();
        tdemailInput.empty();

        tdnombreInput.html(tempnombreValue);
        tddireccionInput.html(tempdireccionValue);
        tdrifInput.html(temprifValue);
        tdtelefonoInput.html(temptelefonoValue);
        tdemailInput.html(tempemailValue);
        // Display static row
        currentEdit.html('Edit');
    }

    isEditing = true;
    tableBody.find('tr:last').before(trNew);
}));

function AddTable(Tags) {
    
    var Result = [a, b]; //inserte query aqui!
   
    lista = Tags;

    Result.forEach(iteracionLista);
            return Tags 
}

function iteracionLista(element, index, array) {
    var x = true;
    
    for (var i = 0; i < lista.length; i++) {
          
        if (lista[i].toUpperCase()==element.toUpperCase()) {
            x = false;
        }
    }

    if (x) {
        Tags.push(element);
    }

}