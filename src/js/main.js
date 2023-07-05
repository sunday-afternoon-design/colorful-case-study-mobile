// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


var largetypewrapper = document.querySelector('#largeglyphwrapper')
var largeglyph = document.querySelector('#largeglyph')
largeglyph.innerHTML = "A"
    // console.log(largeglyph)

function glyphsetup() {
    var uppercasegrid = document.querySelector(".Uppercase");
    var lowercasegrid = document.querySelector(".Lowercase");
    var numbergrid = document.querySelector(".Numbers");
    var puncgrid = document.querySelector(".Punctuation");

    // var characters1 = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
    var characters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < characters1.length; i++) {
        var divcard = document.createElement("div");
        uppercasegrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters1[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters1[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("dvi");
        divglyph.textContent = characters1[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);


        // Add event listeners for mouseover and mouseout
        // divcard.addEventListener('mouseover', handleMouseOver);
        // divcard.addEventListener('mouseout', handleMouseOut);
    }

    // var characters2 = [a, b, c, d, e, f, g, h, characteri, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    var characters2 = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < characters2.length; i++) {
        var divcard = document.createElement("div");
        lowercasegrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters2[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters2[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters2[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);
    }

    // var characters3 = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];
    var characters3n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var characters3 = "0123456789";
    for (var i = 0; i < characters3.length; i++) {
        var divcard = document.createElement("div");
        numbergrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters3[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters3[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters3n[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);
    }

    // var characters4 = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35];
    var characters4 = [".", ",", ":", ";", "?", "!", "*", "_", "&", ",", "„", "‘", "’", '“', '”', "'", '"', "-", "–", "—", "/", "\\", "|", "(", ")", "[", "]", "{", "}", "•", "‹", "›", "«", "»", "@"];
    for (var i = 0; i < characters4.length; i++) {
        var divcard = document.createElement("div");
        puncgrid.appendChild(divcard);
        divcard.classList.add("col");
        divcard.classList.add("wrapper");

        var div = document.createElement("div");
        divcard.appendChild(div);
        div.classList.add("typecard");
        div.setAttribute('data-name', characters4[i]);

        // var divglyph = document.createElement("img");
        // divglyph.src = characters4[i];
        // divglyph.classList.add("glyph")
        // div.appendChild(divglyph);

        var divglyph = document.createElement("div");
        divglyph.textContent = characters4[i];
        divglyph.classList.add("glyph")
        div.appendChild(divglyph);
    }
}

glyphsetup()

let card = document.querySelectorAll('.typecard')
card.forEach(function(element) {
    element.addEventListener('mouseover', function(event) {
        let dataName = this.getAttribute('data-name');
        // console.log(dataName)
        // this.style.transform = 'scale(1.2)';
        // largeglyph.src = dataName
        largeglyph.innerHTML = dataName
        console.log(largeglyph.innerHTML)
    });
    let dataname = element.getAttribute;
});

var elements = document.getElementsByClassName('typecard');
var currentElement = null;

function handleHover() {
    if (currentElement) {
        currentElement.style.backgroundColor = 'black';
        currentElement.style.color = 'white';
    }
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
    currentElement = this;
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', handleHover);
}

// if (dataname = largeglyph.innerHTML) {
//     element.style.backgroundColor = 'white';
//     element.style.color = 'black'
// }
// // Event handler for mouseover
// function handleMouseOver(event) {
//     // Increase the size of the divcard when hovering over it
//     event.target.style.transform = 'scale(1.2)';
//     event.target.style.zIndex = '9999';
// }

// // Event handler for mouseout
// function handleMouseOut(event) {
//     // Reset the size and position of the divcard when the mouse leaves it
//     event.target.style.transform = '';
//     event.target.style.zIndex = '';
// }s