//open the modal
function openModal()
{
    document.getElementById("myModal").style.display = "block";
}

//close the modal
function closeModal()
{
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//next/prev controls
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n)
{
    showSlides(slideIndex=n);
}

function showSlides(n)
{
var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function validateForm() {
  let x = document.forms["careerForm"]["First_Name", "Last_Name", "Phone_Number", "App_Data", "Email"].value;
  if (x == "") {
    alert("All fields must be filled out");
    return false;
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);

function colorChange()
{
  let currentColor = document.getElementById("title").style.color;

  if (currentColor !== "blue")
  document.getElementById("title").style.color="blue";

  else
  {
    document.getElementById("title").style.color="green";
  }
}