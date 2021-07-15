(function(){
  let headerContent = document.querySelector('.header-content')
  let camperImage = document.querySelector('#campground')
  let cloud1 = document.querySelector('#cloud1')
  let cloud2 = document.querySelector('#cloud2')
  let registerCard = document.querySelector('#registerPageMarketing')


  function inViewPort(el) { // checks to see if the item is in the view port or not
    let rect = el.getBoundingClientRect(); //the rect where the element is
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    )
  }

  function moveHeader(){
    if (inViewPort(camperImage))
    { 
      camperImage.classList.add('move-horizontally');}
     else{
      camperImage.classList.remove('move-horizontally');;
     } 

     if (inViewPort(registerCard))
    { 
      cloud1.classList.add('cloud1-move');
      cloud2.classList.add('cloud2-move');
    }
     else{
      cloud1.classList.remove('cloud1-move');
      cloud2.classList.remove('cloud2-move');
     } 

    let top = window.pageYOffset;
    headerContent.style.transform = `translateY(-${top/1}px)`
    headerContent.style.opacity = 1 - Math.max(top/(window.innerHeight * 0.2), 0)
    //--------
    
    
     
    //------
    window.requestAnimationFrame(moveHeader)
  }
  window.requestAnimationFrame(moveHeader)

 // window.requestAnimationFrame(moveHeader(imageMask))

//----------
    

  

})()

