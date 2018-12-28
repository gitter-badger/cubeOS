document.getElementById("footer").style.visibility = "hidden";
document.getElementById("settings").style.visibility = "hidden";
document.getElementById("update").style.visibility = "hidden";
document.getElementById("browser").style.visibility = "hidden";
var update = false;
if (update === true) {
    alert("There is a CubeX OOS Update Availible!")
} else {
    console.log("No Updates Availible")
}

function openCubix() {
    var x = document.getElementById("browser");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openSettings() {
    var x = document.getElementById("settings");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}

function openLibrary() {
    var x = document.getElementById("libraries");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openNotepad() {
    var x = document.getElementById("notepad");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openUpdates() {
    var x = document.getElementById("update");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openNotifs() {
    var x = document.getElementById("notifications");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function check4Updates() {
    var update = document.getElementById("version").innerHTML = "1.09 BETA";
}

function resetSettings() {
    alert("Are You Sure You Want To Reset Your Settings?")
    document.body.style.fontFamily = "open sans";
}

function notHere() {
    alert("If there is no prefered setting for anything, contact RocketBear27 immediately. State the section (ex. Background, Text, etc.), then state the setting or option (ex. Background Color Red. NOTE: Background Images will be not allowed in settings)");
}

function font_lato() {
    document.body.style.fontFamily = "Lato";
}

document.getElementById("loader").style.visibility = "hidden";

function signingIn() {
    var loader = document.getElementById("loader").style.visibility = "visible";
    setTimeout(loaderHide, 3000);
    if (document.getElementById("username").value == "RocketBear27" && document.getElementById("password").value == "Kaden27") {
        document.getElementById("footer").style.visibility = "visible";
        document.getElementById("loginPage").style.visibility = "hidden";
        document.getElementById("settings").style.visibility = "visible";
        document.getElementById("update").style.visibility = "visible";
        document.getElementById("browser").style.visibility = "visible";
        document.getElementById("notepad").style.visibility = "visible";
        document.getElementById("notifications").style.visibility = "visible";
    } else if (document.getElementById("username").value == "Guest" && document.getElementById("password").value == "Guest2018") {
        document.getElementById("footer").style.visibility = "visible";
        document.getElementById("loginPage").style.visibility = "hidden";
        document.getElementById("settings").style.visibility = "visible";
        document.getElementById("update").style.visibility = "visible";
        document.getElementById("browser").style.visibility = "visible";
        document.getElementById("notepad").style.visibility = "visible";
        document.getElementById("notifications").style.visibility = "visible";
        document.body.style.backgroundImage = "url(http://paperlief.com/images/hawaii-wallpaper-4.jpg)"
    } else {
        alert("Access Denied!")
    }
};

function loaderHide() {
    document.getElementById("loader").style.visibility = "hidden";
}