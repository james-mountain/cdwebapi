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
    document.getElementById("outputHolder").innerHTML = "deleteOneCD()";
}

function deleteAllCDs() {
    document.getElementById("outputHolder").innerHTML = "deleteAllCDs()";
}

function createCD() {
    document.getElementById("outputHolder").innerHTML = "createCD()";
}

function updateCD() {
    document.getElementById("outputHolder").innerHTML = "updateCD()";
}