function getAllCDs() {
    $.ajax({
        url: "rest/cd/json",
        type: 'GET',
        success: function(result) {
            jsonToTable(result);
        }
    });
}

function getOneCD() {
    $.ajax({
        url: ("rest/cd/json/" + document.getElementById("idField").value),
        type: 'GET',
        success: function(result) {
            jsonToTable(result);
        }
    });
}

function jsonToTable(cdObject) {
    var tableBody = document.getElementById("cdHolder");

    while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    for(var i = 0; i < cdObject.length; i++) {
        var tableRow = document.createElement("tr");
        tableRow.innerHTML += "<td>" + cdObject[i].id + "</td>";
        tableRow.innerHTML += "<td>" + cdObject[i].artistname + "</td>";
        tableRow.innerHTML += "<td>" + cdObject[i].genre + "</td>";
        tableRow.innerHTML += "<td>" + cdObject[i].title + "</td>";
        tableBody.appendChild(tableRow)
    }
    document.getElementById("cdTable").style.display = "table";
}

function displayMessage(result) {
    var messageBox = document.getElementById("messageHolder");
    if(!result.error || result.error === "false") {
        messageBox.className = "alert alert-success";
    }
    else {
        messageBox.className = "alert alert-danger";
    }
    messageBox.innerHTML = result.message;
    messageBox.style.display = "inline";
}

function deleteOneCD() {
    $.ajax({
        url: 'rest/cd/json/' + document.getElementById("idField").value,
        type: 'DELETE',
        success: function(result) {
            displayMessage(result);
        }
    });
}

function deleteAllCDs() {
    $.ajax({
        url: 'rest/cd/json',
        type: 'DELETE',
        success: function(result) {
            displayMessage(result);
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
        url: "rest/cd/json",
        data: JSON.stringify(newCD),
        dataType: "json",
        success: function(result) {
            displayMessage(result);
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
            displayMessage(result);
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
    hideAllIncTable();
    deleteAllCDs();
}

function hideAllIncTable() {
    document.getElementById("idinputgroup").style.display = "none";
    document.getElementById("artistinputgroup").style.display = "none";
    document.getElementById("genreinputgroup").style.display = "none";
    document.getElementById("titleinputgroup").style.display = "none";
    document.getElementById("inputbutton").style.display = "none";
    document.getElementById("messageHolder").style.display = "none";
    document.getElementById("cdTable").style.display = "none";
}

function hideAllInputGroups() {
    document.getElementById("idinputgroup").style.display = "none";
    document.getElementById("artistinputgroup").style.display = "none";
    document.getElementById("genreinputgroup").style.display = "none";
    document.getElementById("titleinputgroup").style.display = "none";
    document.getElementById("inputbutton").style.display = "none";
    document.getElementById("messageHolder").style.display = "none";
    document.getElementById("cdTable").style.display = "table";
}

function showIDInputGroup() {
    document.getElementById("idinputgroup").style.display = "inline-table";
    document.getElementById("artistinputgroup").style.display = "none";
    document.getElementById("genreinputgroup").style.display = "none";
    document.getElementById("titleinputgroup").style.display = "none";
    document.getElementById("inputbutton").style.display = "inline";
    document.getElementById("messageHolder").style.display = "none";
    document.getElementById("cdTable").style.display = "none";
}

function showCreationGroups() {
    document.getElementById("idinputgroup").style.display = "none";
    document.getElementById("artistinputgroup").style.display = "inline-table";
    document.getElementById("genreinputgroup").style.display = "inline-table";
    document.getElementById("titleinputgroup").style.display = "inline-table";
    document.getElementById("inputbutton").style.display = "inline";
    document.getElementById("messageHolder").style.display = "none";
    document.getElementById("cdTable").style.display = "none";
}

function showAllGroups() {
    document.getElementById("idinputgroup").style.display = "inline-table";
    document.getElementById("artistinputgroup").style.display = "inline-table";
    document.getElementById("genreinputgroup").style.display = "inline-table";
    document.getElementById("titleinputgroup").style.display = "inline-table";
    document.getElementById("inputbutton").style.display = "inline";
    document.getElementById("messageHolder").style.display = "none";
    document.getElementById("cdTable").style.display = "none";
}

$(document).ready(function() {
    hideAllInputGroups();
});