function getAllCDs() {
    $.ajax({
        url: 'rest/cd/json',
        type: 'GET',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
}

function getOneCD() {
    document.getElementById("outputHolder").innerHTML = "getOneCD()";
}

function deleteOneCD() {
    $.ajax({
        url: 'rest/cd/json/' + document.getElementById("idField").value,
        type: 'DELETE',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = result;
        }
    });
}

function deleteAllCDs() {
    $.ajax({
        url: 'rest/cd/json',
        type: 'DELETE',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = result;
        }
    });
}

function createCD() {
    document.getElementById("outputHolder").innerHTML = "createCD()";
}

function updateCD() {
    $.ajax({
        url: 'rest/cd/json/' + document.getElementById("idField").value,
        type: 'PUT',
        data: JSON.stringify({
            "id" : parseInt(document.getElementById("idField").value),
            "artistname": document.getElementById("artistField").value,
            "genre": document.getElementById("genreField").value,
            "title": document.getElementById("titleField").value
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = result;
        }
    });
}