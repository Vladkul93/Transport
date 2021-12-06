let lang = document.querySelectorAll('.language');

lang.forEach(item => {
    item.addEventListener('click' , function() {
        for(let i = 0 ; i < lang.length ; i++) {
            lang[i].classList.remove('active');
        }
        item.classList.add('active');
    })
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }


    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlide() {
    showSlides(slideIndex += 1);
    }

    function minusSlide() {
    showSlides(slideIndex -= 1);  
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("parag");
    var dots = document.getElementsByClassName("noguma-pomoki-kadra");
    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
    slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("deystvuyus", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " deystvuyus";
    }
    function myFunction1() {
        document.getElementById("myDropdown1").classList.toggle("show1");
    }

    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
            openDropdown.classList.remove('show1');
        }
        }
    }
    }

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }