$("#navbar a, .btn").on("click", function (ev) {
  if (this.hash !== "") {
    ev.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});