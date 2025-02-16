
  /*animation footer on scroll*/
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >=
      document.scrollingElement.scrollHeight - 5
  );
};
