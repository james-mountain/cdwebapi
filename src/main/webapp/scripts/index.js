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

function getAllCDsStart() {
    hideAllInputGroups();
    getAllCDs();
}

function findCDStart() {
    showIDInputGroup();
    document.getElementById("inputbutton").innerText = "Find CD";
    document.getElementById("inputbutton").onclick = getOneCD;
}

function createCDStart() {
    showCreationGroups();
    document.getElementById("inputbutton").innerText = "Create new CD";
    document.getElementById("inputbutton").onclick = createCD;
}

function updateCDStart() {
    showAllGroups();
    document.getElementById("inputbutton").innerText = "Update CD";
    document.getElementById("inputbutton").onclick = updateCD;
}

function deleteCDStart() {
    showIDInputGroup();
    document.getElementById("inputbutton").innerText = "Delete CD";
    document.getElementById("inputbutton").onclick = deleteOneCD;
}

function deleteAllCDsStart() {
    hideAllInputGroups();
    deleteAllCDs();
}

function hideAllInputGroups() {
    document.getElementById("idinputgroup").style.display = "none";
    document.getElementById("artistinputgroup").style.display = "none";
    document.getElementById("genreinputgroup").style.display = "none";
    document.getElementById("titleinputgroup").style.display = "none";
    document.getElementById("inputbutton").style.display = "none";
}

function showIDInputGroup() {
    document.getElementById("idinputgroup").style.display = "inline-table";
    document.getElementById("artistinputgroup").style.display = "none";
    document.getElementById("genreinputgroup").style.display = "none";
    document.getElementById("titleinputgroup").style.display = "none";
    document.getElementById("inputbutton").style.display = "inline";
}

function showCreationGroups() {
    document.getElementById("idinputgroup").style.display = "none";
    document.getElementById("artistinputgroup").style.display = "inline-table";
    document.getElementById("genreinputgroup").style.display = "inline-table";
    document.getElementById("titleinputgroup").style.display = "inline-table";
    document.getElementById("inputbutton").style.display = "inline";
}

function showAllGroups() {
    document.getElementById("idinputgroup").style.display = "inline-table";
    document.getElementById("artistinputgroup").style.display = "inline-table";
    document.getElementById("genreinputgroup").style.display = "inline-table";
    document.getElementById("titleinputgroup").style.display = "inline-table";
    document.getElementById("inputbutton").style.display = "inline";
}

$(document).ready(function() {
    hideAllInputGroups();
});