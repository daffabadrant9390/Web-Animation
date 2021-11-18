console.log(window.innerHeight);

window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    console.log(windowHeight);
    let revealHeight = el.getBoundingClientRect().top;
    console.log(`revealHeight : ${revealHeight}`);
    const revealPoint = 50;

    if (windowHeight < revealHeight + revealPoint) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
});
