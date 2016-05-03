// YOUR CODE HERE
// var spreadsheet;

const content = spreadsheet.content[0].content;

// put the HTML from the spreadsheet (originally markdown) into the story div
var story = document.querySelector('.content');
story.innerHTML = content;

// detach all the map elements from the page and keep them in an object
var maps = {};
// var bullets = [];
select('[data-map]').forEach(function (el) {
  var slug = el.getAttribute('data-map');
  maps[slug] = el;
  el.parentNode.removeChild(el);
});

   // inside the story div, replace all the "MAP:" h1s with their corresponding map element
select('h1', story).forEach(function (h1) {
  if (h1.textContent.substring(0, 5) === 'MAP: ') {
    var slugMap = h1.textContent.substring(5);
    h1.parentNode.replaceChild(maps[slugMap], h1);
  }

  if (h1.textContent.substring(0, 7) === 'SHARE: ') {
    var slugShare = h1.textContent.substring(7);
    h1.parentNode.replaceChild(maps[slugShare], h1);
  }

  if (h1.textContent.substring(0, 7) === 'VIDEO: ') {
    var slugVideo = h1.textContent.substring(7);
    h1.parentNode.replaceChild(maps[slugVideo], h1);
  }

  if (h1.textContent.substring(0, 7) === 'CHART: ') {
    var slugChart = h1.textContent.substring(7);
    h1.parentNode.replaceChild(maps[slugChart], h1);
  }

  // if (h1.textContent.substring(0, 8) === 'BULLET: ') {
  //   var bulletText = h1.textContent.substring(8);
  //   bullets.push(bulletText);
  //   select('.market__text').forEach(function (bullet, indx) {
  //     bullet.innerHTML = bullets[indx];

  //   })
  //   h1.parentNode.removeChild(h1);
  // }
});

function select(selector, parent = document) {
  // return an array of elements matching the selector
  return [].slice.apply(parent.querySelectorAll(selector));
}
