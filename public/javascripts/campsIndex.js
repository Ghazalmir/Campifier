(function() {
  let cardsScroll = document.querySelectorAll(".camp-cards-group .camp-card");

  function inViewPort(el) { // checks to see if the item is in the view port or not
    let rect = el.getBoundingClientRect(); //the rect where the element is
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    )
  }
  
  // adding randomness to the cards' appearances
  cardsScroll.forEach((item) => {
    item.style.animationDelay = `${Math.random() * 0.25 + 0.4}s`
  }) 

  function moveCards() {

    // appearing cards when in view port
    cardsScroll.forEach((el) => 
    inViewPort(el) ? el.classList.add('appear') : el.classList.remove('appear'));
    

    window.requestAnimationFrame(moveCards)

  }
  window.requestAnimationFrame(moveCards)


})()