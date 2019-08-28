function dropItems() {
    links = document.getElementById("burguer-links");
    burguer = document.getElementById("hamburguer");
    exit = document.getElementById("exit");
    if (links.style.display === "block") {
        links.style.display = "none";
        burguer.style.display = "block";
        exit.style.display = "none";
    } else {
        links.style.display = "block";
        burguer.style.display = "none";
        exit.style.display = "block";
    }
}
