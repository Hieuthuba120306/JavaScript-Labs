
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

// Animate each generated box after the page has finished loading.
document.addEventListener('DOMContentLoaded', function () {
   var boxes = document.querySelectorAll('.movingDiv');
   boxes.forEach(function (box, index) {
      box.style.transition = 'transform 0.8s ease';
      window.setTimeout(function () {
         box.style.transform = 'translateX(' + ((index % 2 ? -1 : 1) * 20) + 'px)';
      }, 150 * (index + 1));
   });
});
