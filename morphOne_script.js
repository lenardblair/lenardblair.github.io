var btn = document.getElementById('btnOne');
var btn2 = document.getElementById('btnTwo');

btn.onclick = function() {
  var morph = anime({
  targets: '.poly_one',
  points: [
    { value: [
      '1366,768 586.6,768 0,768 0,0 888.4,0 1366,0 1366,338.2']
    },
    { value: '1366,768 586.6,768 0,768 0,0 765,80 662,347 1366,418.2' },
    { value: '930,768 586.6,768 0,768 0,0 302,80 300,347 798,418.2' },
    { value: '150,604 436.6,768 0,768 0,0 302,80 300,347 299,418.2' },
    { value: '302,604 302,768 0,768 0,79 302,79 302,353 302,419' }  
  ],
  easing: 'easeOutQuad',
  duration: 1200,
  loop: false,

  scale: {
    value: 0.8,
    delay: 150
        },
      
 opacity: {
     value: 0,
    delay: 150
 },      

});
    
    anime({
        targets: '#contentOne',
        opacity: 1,
        duration: 100,
        loop: false,
        tanslateY: 150,
        left: 25,
        right: 25
    })
    
    anime({
        targets: ['#btnOne', '#mainDiv'],
        opacity: 0,
        duration: 100,
        loop: false,
        tanslateY: -800,
        left: 25,
        right: 25,
        
        
    })



var promise = morph.finished.then(() => {
        
btn2.onclick = function() {
var morph = anime({
  targets: '.poly_one',
  points: [
    { value: [
      '302,604 302,768 0,768 0,79 302,79 302,353 302,419']
    },
    { value: '150,604 436.6,768 0,768 0,0 302,80 300,347 299,418.2' },
    { value: '930,768 586.6,768 0,768 0,0 302,80 300,347 798,418.2' },  
    { value: '1366,768 586.6,768 0,768 0,0 765,80 662,347 1366,418.2' },
    { value: '1366,768 586.6,768 0,768 0,0 888.4,0 1366,0 1366,338.2' }  
  ],
  easing: 'easeOutQuad',
  duration: 1200,
  loop: false,
    
    scale: {
    value: 1.0,
    delay: 150
        },
    
    opacity: {
    value: 1,
    delay: 50
 },
        
});
    anime({
        targets: ['#btnOne', '#mainDiv'],
        opacity: 1,
        duration: 100,
        loop: false,
        tanslateY: 150,
        left: 25,
        right: 25
    })
    
    anime({
        targets: '#contentOne',
        opacity: 0,
        duration: 500,
        tanslateY: -800,
        left: 25,
        right: 25
     })
   };
 })
}

    


