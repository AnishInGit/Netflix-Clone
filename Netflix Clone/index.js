let accordions = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    let icon = this.childNodes[1]; // Icon element

    // Toggle between plus and times icons
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-times");

    // Toggle maxHeight to expand/collapse FAQ content
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
