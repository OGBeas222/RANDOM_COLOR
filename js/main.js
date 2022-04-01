let title = document.querySelector('.title');





function colors() {

    const cardsOne  = document.querySelector('.card-blue');
    const cardsTwo  = document.querySelector('.card-red');
    const cardsThree  = document.querySelector('.card-green');
    const cardsFour  = document.querySelector('.card-yellow');

    let clr = new Array ()
    clr[0] = "#FF4500";
    clr[1] = "#FFD700";
    clr[2] = "#008000";
    clr[3] = "#20B2AA";
    clr[4] = "#4B0082";
    let i = 0;
    let a = setInterval ( () =>{
        i++;
        cardsThree.style.backgroundColor = clr [i];

        if ( i == 4 ) {
            i = 0;

        }
    },750);
    let b = setInterval ( () =>{
        i++;
        cardsTwo.style.backgroundColor = clr [i];

        if ( i == 4 ) {
            i = 0;

        }
    },750)
    ;
    let c = setInterval ( () =>{
        i++;
        cardsFour.style.backgroundColor = clr [i];

        if ( i == 4 ) {
            i = 0;

        }
    },1500);
    let d = setInterval ( () =>{
        i++;
        cardsOne.style.backgroundColor = clr [i];

        if ( i == 4 ) {
            i = 0;

        }
    },750);




}

title.onclick = colors;