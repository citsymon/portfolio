console.log("atpRtsd");

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("myImages");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt){
    modal.style.display = "block";
    modalImg.srcset = this.srcset;
    captionText.innerHTML = this.alt;
    }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
document.querySelector("body").addEventListener("mousedown", () => {
    modal.style.display = "none";
})