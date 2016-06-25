var isEditing = false,
    tempcategoriaValue = "",
    tempmarcaValue = "",
    tempmodeloValue = "",
    tempserialValue = "",
    tempdescripcionValue = "";
    tempcodigoactivoValue = "";
    tempestadoValue = "";
    temptipoValue = "";
    tempfechaValue = "";
    tempcostoValue = "";
    tempproveedorValue = "";

// Handles live/dynamic element events, i.e. for newly created edit buttons
$(document).on('click', '.edit', function () {
    var parentRow = $(this).closest('tr'),
        tableBody = parentRow.closest('tbody'),
        tdcategoria = parentRow.children('td.categoria'),
        tdmarca = parentRow.children('td.marca'),
        tdmodelo= parentRow.children('td.modelo')
        tdserial = parentRow.children('td.serial'),
        tddescripcion = parentRow.children('td.descripcion');
        tdcodigoactivo = parentRow.children('td.codigoactivo');
        tdestado = parentRow.children('td.estado');
        tdtipo = parentRow.children('td.tipo');
        tdfecha = parentRow.children('td.fecha');
        tdcosto = parentRow.children('td.costo');
        tdproveedor = parentRow.children('td.proveedor');

    if (isEditing) {
        var  categoria= tableBody.find('input[name="categoria"]'),
             marca= tableBody.find('input[name="marca"]'),
             modelo= tableBody.find('input[name="modelo"]'),
             serial= tableBody.find('input[name="serial"]'),
             descripcion= tableBody.find('input[name="descripcion"]'),
             codigoactivo= tableBody.find('input[name="codigoactivo"]'),
             estado= tableBody.find('input[name="estado"]'),
             tipo= tableBody.find('input[name="tipo"]'),
             fecha= tableBody.find('input[name="fecha"]'),
             costo= tableBody.find('input[name="costo"]'),
             proveedor= tableBody.find('input[name="proveedor"]'),
             
            tdcategoria = categoria.closest('td'),
            tdmarca = marca.closest('td'),
            tdmodelo = modelo.closest('td'),
            tdserial = serial.closest('td'),
            tddescripcion = descripcion.closest('td'),
            tdcodigoactivo = codigoactivo.closest('td'),
            tdestado = estado.closest('td'),
            tdtipo = tipo.closest('td'),
            tdfecha = fecha.closest('td'),
            tdcosto = costo.closest('td'),
            tdproveedor = proveedor.closest('td'),

            currentEdit = tdcategoria.parent().find('td.edit');

        if ($(this).is(currentEdit)) {
            // Save new values as static html
            var tdcategoriaValue = categoria.prop('value'),
                tdmarcaValue = marca.prop('value'),
                tdmodeloValue = modelo.prop('value'),
                tdserialValue = serial.prop('value'),
                tddescripcionValue = descripcion.prop('value');
                tdcodigoactivoValue = codigoactivo.prop('value'),
                tdestadoValue = estado.prop('value'),
                tdtipoValue = tipo.prop('value'),
                tdfechaValue = fecha.prop('value'),
                tdcostoValue = costo.prop('value'),
                tdproveedorValue = proveedor.prop('value');

            tdcategoria.empty();
            tdmarca.empty();
            tdmodelo.empty();
            tdserial.empty();
            tddescripcion.empty();
            tdcodigoactivo.empty();
            tdestado.empty();
            tdtipo.empty();
            tdfecha.empty();
            tdcosto.empty();
            tdproveedor.empty();


            tdcategoria.html(tdcategoriaValue);
            tdmarca.html(tdmarcaValue);
            tdmodelo.html(tdmodeloValue);
            tdserial.html(tdserialValue);
            tddescripcion.html(tddescripcionValue);
            tdcodigoactivo.html(tdcodigoactivoValue);
            tdestado.html(tdestadoValue);
            tdtipo.html(tdtipoValue);
            tdfecha.html(tdfechaValue);
            tdcosto.html(tdcostoValue);
            tdproveedor.html(tdproveedorValue);
           
        }
        else {
            // Restore previous html values
            tdcategoria.empty();
            tdmarca.empty();
            tdmodelo.empty();
            tdserial.empty();
            tddescripcion.empty();
            tdcodigoactivo.empty();
            tdestado.empty();
            tdtipo.empty();
            tdfecha.empty();
            tdcosto.empty();
            tdproveedor.empty();

            tdcategoria.html(tempcategoriaValue);
            tdmarca.html(tempmarcaValue);
            tdmodelo.html(tempmodeloValue);
            tdserial.html(tempserialValue);
            tddescripcion.html(tempdescripcionValue);
            tdcodigoactivo.html(tempcodigoactivoValue);
            tdestado.html(tempestadoValue);
            tdtipo.html(temptipoValue);
            tdfecha.html(tempfechaValue);
            tdcosto.html(tempcostoValue);
            tdproveedor.html(tempproveedorValue);
        }
        // Display static row
        currentEdit.html('Edit');
        isEditing = false;
    }
    else {
        // Display editable input row
        isEditing = true;
        $(this).html('Save');

        var tdcategoriavalue = tdcategoria.html(),
            tdmarcaValue = tdmarca.html(),
            tdmodeloValue = tdmodelo.html(),
            tdserialValue = tdserial.html(),
            tddescripcionValue = tddescripcion.html();
            tdcodigoactivoValue = tdcodigoactivo.html();
            tdestadoValue = tdestado.html();
            tdtipoValue = tdtipo.html();
            tdfechaValue = tdfecha.html();
            tdcostoValue = tdcosto.html();
            tdproveedorValue = tdproveedor.html();


        // Save current html values for canceling an edit
        tempcategoriaValue = tdcategoriaValue;
        tempmarcaValue = tdmarcaValue;
        tempmodeloValue = tdmodeloValue;
        tempserialValue = tdserialValue;
        tempdescripcionValue = tddescripcionValue;
        tempcodigoactivoValue = tdcodigoactivoValue;
        tempestadoValue = tdestadoValue;
        temptipoValue = tdtipoValue;
        tempfechaValue = tdfechaValue;
        tempcostoValue = tdcostoValue;
        tempproveedorValue = tdproveedorValue;


        // Remove existing html values
        tdcategoria.empty();
        tdmarca.empty();
        tdmodelo.empty();
        tdserial.empty();
        tddescripcion.empty();
        tdcodigoactivo.empty();
        tdestado.empty();
        tdtipo.empty();
        tdfecha.empty();
        tdcosto.empty();
        tdproveedor.empty();

        // Create input forms
        tdcategoria.html('<input style="width:90%" type="text"  name="categoria" value="' + tdcategoriavalue + '">');
        tdmarca.html('<input style="width:90%" type="text" name="marca" value="' + tdmarcaValue + '">');
        tdmodelo.html('<input style="width:90%" type="text" name="modelo" value="' + tdmodeloValue + '">');
        tdserial.html('<input style="width:90%" type="text" name="serial" value="' + tdserialValue + '">');
        tddescripcion.html('<input style="width:90%" type="text" name="descripcion" value="' + tddescripcionValue + '">');
        tdcodigoactivo.html('<input style="width:90%" type="text" name="codigoactivo" value="' + tdcodigoactivoValue + '">')
        tdestado.html('<input style="width:90%" type="text" name="estado" value="' + tdestadoValue + '">')
        tdtipo.html('<input style="width:90%" type="text" name="tipo" value="' + tdtipoValue + '">')
        tdfecha.html('<input style="width:90%" type="text" name="fecha" value="' + tdfechaValue + '">')
        tdcosto.html('<input style="width:90%" type="text" name="costo" value="' + tdcostoValue + '">')
        tdproveedor.html('<input style="width:90%" type="text" name="proveedor" value="' + tdproveedorValue + '" selectBoxOptions="prueba1;prueba2;prueba3;" >')



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
        trNew = '<tr><td class="categoria"><input Type="text" name="categoria" value ""></td><td class="marca"><input Type="text" name="marca" value ""></td><td class="modelo"><input Type="text" name="modelo" value ""></td><td class="serial"><input Type="text" name="serial" value ""></td><td class="descripcion"><input Type="text" name="descripcion" value ""></td><td class="codigoactivo"><input Type="text" name="codigoactivo" value ""></td><td class="estado"><input Type="text" name="estado" value ""></td><td class="tipo"><input Type="text" name="tipo" value ""></td><td class="fecha"><input Type="text" name="fecha" value ""></td><td class="costo"><input Type="text" name="costo" value ""></td><td class="proveedor"><input Type="text" name="proveedor" value ""></td><td class="edit">Save</td><td class="trash">delete</td></tr>';

    if (isEditing) {
        var categoriaInput = tableBody.find('input[name="categoria"]'),
            marcaInput = tableBody.find('input[name="marca"]'),
            modeloInput = tableBody.find('input[name="modelo"]'),
            serialInput = tableBody.find('input[name="serial"]'),
            descripcionInput = tableBody.find('input[name="descripcion"]'),
            codigoactivoInput = tableBody.find('input[name="codigoactivo"]'),
            estadoInput = tableBody.find('input[name="estado"]'),
            tipoInput = tableBody.find('input[name="tipo"]'),
            fechaInput = tableBody.find('input[name="fecha"]'),
            costoInput = tableBody.find('input[name="costo"]'),
            proveedorInput = tableBody.find('input[name="proveedor"]'),


            tdcategoriaInput = categoriaInput.closest('td'),
            tdmarcaInput = marcaInput.closest('td'),
            tdmodeloInput = modeloInput.closest('td'),
            tdserialInput = serialInput.closest('td'),
            tddescripcionInput = descripcionInput.closest('td'),
            tdcodigoactivoInput = codigoactivoInput.closest('td'),
            tdestadoInput = estadoInput.closest('td'),
            tdtipoInput = tipoInput.closest('td'),
            tdfechaInput = fechaInput.closest('td'),
            tdcostoInput = costoInput.closest('td'),
            tdproveedorInput = proveedorInput.closest('td'),
            currentEdit = tdcategoriaInput.parent().find('td.edit');

        // Get current input values for newly created input cases
        var newcategoriaInput = categoriaInput.prop('value'),
            newmarcaInput = marcaInput.prop('value'),
            newmodeloInput = modeloInput.prop('value'),
            newserialInput = serialInput.prop('value'),
            newdescripcionInput = descripcionInput.prop('value');
            newcodigoactivoInput = codigoactivoInput.prop('value');
            newestadoInput = estadoInput.prop('value');
            newtipoInput = tipoInput.prop('value');
            newfechaInput = fechaInput.prop('value');
            newcostoInput = costoInput.prop('value');
            newproveedorInput = proveedorInput.prop('value');

        // Restore previous html values
            tdcategoriaInput.empty();
            tdmarcaInput.empty();
            tdmodeloInput.empty();
            tdserialInput.empty();
            tddescripcionInput.empty();
            tdcodigoactivoInput.empty();
            tdestadoInput.empty();
            tdtipoInput.empty();
            tdfechaInput.empty();
            tdcostoInput.empty();
            tdproveedorInput.empty();

            tdcategoria.html(tempcategoriaValue);
            tdmarca.html(tempmarcaValue);
            tdmodelo.html(tempmodeloValue);
            tdserial.html(tempserialValue);
            tddescripcion.html(tempdescripcionValue);
            tdcodigoactivo.html(tempcodigoactivoValue);
            tdestado.html(tempestadoValue);
            tdtipo.html(temptipoValue);
            tdfecha.html(tempfechaValue);
            tdcosto.html(tempcostoValue);
            tdproveedor.html(tempproveedorValue);
        // Display static row
        currentEdit.html('Edit');
    }

    isEditing = true;
    tableBody.find('tr:last').before(trNew);
}));