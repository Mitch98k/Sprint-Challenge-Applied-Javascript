// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // const Head = document.querySelector('div'),
    //       Date = document.querySelector('span'),
    //       Hone = document.querySelector('h1'),
    //       Temp = document.querySelector('span');
    const Head = document.createElement('div');
    const DAte = document.createElement('span');
    const Hone = document.createElement('h1');
    const Temp = document.createElement('span');

    Head.classList.add('header');
    DAte.classList.add('date');
    Temp.classList.add('temp');

    Head.appendChild(DAte);
    Head.appendChild(Hone);
    Head.appendChild(Temp);

    DAte.textContent = DAte;
    Hone.textContent = Hone;
    Temp.textContent = Temp;

    return Header
}

 const contain = document.querySelector('.header-container')
 //contain.appendChild(Header());