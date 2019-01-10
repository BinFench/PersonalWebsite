function isClicked(i) {
    console.log("Clicked!");
    if (document.getElementsByClassName(i).item(0).id == "inactive") {
        document.getElementbyId("active").id = "inactive";
        document.getElementsByClassName(i).item(0).id = "active";
    }

    document.getElementbyId(document.getElementById("active").class).style.visibility="visible";
    document.getElementbyId(document.getElementById("inactive").class).style.visibility="invisible";
}