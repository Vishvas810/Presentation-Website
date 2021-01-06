// Smooth Scrolling
$('.btn').on('click', function(event) {  //for button
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top //Negative 100 helps in seeing the title
      },
      800 //Scrolling Speed in ms
    );
  }
});