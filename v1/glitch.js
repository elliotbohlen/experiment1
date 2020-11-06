// Getting 'Info' div in js hands
var info = document.getElementById('info');

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
}
addEventListener('mousemove', tellPos, false);