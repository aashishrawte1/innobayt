// function togglemenu() {
//     document.getElementById('sidebar').classList.toggle('active');
// }
'use strict';

function myFunction() {
    var x = document.getElementById("sidebar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}