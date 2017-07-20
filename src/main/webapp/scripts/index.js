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
    document.getElementById("outputHolder").innerHTML = "deleteOneCD()";
}

function deleteAllCDs() {
    document.getElementById("outputHolder").innerHTML = "deleteAllCDs()";
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
    //document.getElementById("outputHolder").innerHTML = "createCD()";
}

function updateCD() {
    document.getElementById("outputHolder").innerHTML = "updateCD()";
}