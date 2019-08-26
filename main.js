function dropItems() {
    links = document.getElementById("burguer-links");
    burguer = document.getElementById("hamburguer");
    if (links.style.display === "block") {
        links.style.display = "none";
        burguer.style.color = "#4e94ec";
    } else {
        links.style.display = "block";
        burguer.style.color = "black";
    }
}
