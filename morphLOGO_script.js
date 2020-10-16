anime({
        targets: [ '.logo_svg', '.logo_svg2'],
        opacity: 1,
        duration: 300,
        loop: false,
        translateY: 12,
        delay: 450,
        easing: 'easeInOutExpo',
    

});


anime({
        targets: ['.head_logo', '.headline_one'],
        opacity: 1,
        duration: 2200,
        loop: false,
        translateY: -10,

});


anime({
        targets: ['.svgDiv'],
        opacity: 1,
        duration: 1800,
        loop: false,
        translateY: [13, 0],
        height: 2.4,
        width: '100%' ,
        backgroundColor: '#FFF',
        easing: 'easeInOutQuad',
        borderRadius: ['100%', '0%'],
        delay: 250
  

});

var morph = anime({
  targets: '.logo_svg',
  points: [
    { value: [
      '20,7 29,15 25,23 15,28 8,19 15,10 ',
      '22,7 29,16 25,23 15,29 8,20 15,10 ']
    },
    { value: '20,7 29,15 25,23 15,28 8,19 15,10 ' },
    { value: '18,7 29,10 25,23 15,28 8,21 15,13' },
    { value: '20,7 29,15 25,23 15,28 8,19 15,10' }
  ],
  easing: 'easeOutQuad',
  duration: 2000,
  loop: true,
  translateX: 2.6,
  rotate: 89, 
  direction: 'alternate'
     

});

var morph = anime({
  targets: '.logo_svg2',
  points: [
    { value: [
      '20,7 29,15 25,23 15,28 8,19 15,10 ',
      '22,7 29,16 25,24 15,29 8,20 18,10 ']
    },
    { value: '20,7 29,15 25,23 15,28 8,19 15,10 ' },
    { value: '16,7 29,13 25,20 15,28 8,21 15,13' },
    { value: '20,7 29,15 25,23 15,28 8,19 15,10' }
  ],
  easing: 'easeOutQuad',
  duration: 2100,
  loop: true,
  translateX: 3.6,
  rotate: 29, 
  direction: 'alternate',
  fill: ['#ffffff', '#666666']
     

});