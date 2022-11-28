element = document.getElementById("trigger");
microwave = document.getElementById("microwave")

element.addEventListener("click", function (e) {
    e.preventDefault;
    microwave.classList.remove("animated");
    microwave.offsetWidth = microwave.offsetWidth;
    microwave.classList.add("animated");
}, false);