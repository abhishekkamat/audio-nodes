const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);


function myFunction(node) {

    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    // play or pause track depending on state
    if (node.dataset.playing === 'false') {
        audioElement.play();
        node.dataset.playing = 'true';
    } else if (node.dataset.playing === 'true') {
        audioElement.pause();
        node.dataset.playing = 'false';
    }

    audioElement.addEventListener('ended',()=> {
        document.getElementById("mycheck").checked=true;
    })

};
var b=0;


function controller(node){
    div1=model();
    div2=view(div1);
    node.parentNode.appendChild(div2);
    b=b+1;
}

function model(){
    var div1=document.createElement("div");
    var ul1=document.createElement("ul");
    var li1=document.createElement("li");
    var li2=document.createElement("li");
    var li3=document.createElement("li");
    var btn1=document.createElement("button");
    btn1.setAttribute("class","play");
    btn1.setAttribute("data-playing","false");
    btn1.setAttribute("role","switch");
    btn1.setAttribute("aria-checked","false");
    btn1.setAttribute("onclick","myFunction(this)")
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    li3.appendChild(btn1);
    ul1.appendChild(li3);
    div1.appendChild(ul1);

    return div1;
}

function view(div1){
    let h1=document.createElement("h1");
    h1.innerHTML="Created Node";
    let b1=document.createElement("button");
    b1.innerHTML="Add Node";
    b1.setAttribute("onclick","controller(this)");
    b2=div1.querySelector('ul li button.play');
    b2.innerHTML="Play/Pause";
    div1.querySelector('ul li').appendChild(h1);
    div1.querySelectorAll('ul li')[1].appendChild(b2);
    div1.querySelectorAll('ul li')[2].appendChild(b1);
    console.log(div1);
    return div1;
}
