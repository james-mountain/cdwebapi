function getAllCDs() {
    $.ajax({
        url: "rest/cd/json",
        type: 'GET',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
}

function getOneCD() {
    $.ajax({
        url: ("rest/cd/json/" + document.getElementById("idField").value),
        type: 'GET',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
}

function deleteOneCD() {
    $.ajax({
        url: 'rest/cd/json/' + document.getElementById("idField").value,
        type: 'DELETE',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
}

function deleteAllCDs() {
    $.ajax({
        url: 'rest/cd/json',
        type: 'DELETE',
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
}

function createCD() {
    var artist = document.getElementById("artistField").value;
    var genre = document.getElementById("genreField").value;
    var title = document.getElementById("titleField").value;
    var newCD = {"artistname": artist, "genre": genre, "title": title}

    $.ajax({
        type: 'POST',
        url: ("rest/cd/json/" + document.getElementById("idField").value),
        data: JSON.stringify(newCD),
        dataType: "json",
        success: function(result) {
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
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
            document.getElementById("outputHolder").innerHTML = JSON.stringify(result);
        }
    });
}