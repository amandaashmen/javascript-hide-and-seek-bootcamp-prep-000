
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
  for (let i = 0; i < lis.length; i++) {
 
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  
  
  }
}

function deepestChild() {
  
  /*var lis = document.querySelector('#grand-node')
  do {
    console.log(lis.innerHTML)
    lis = lis.querySelector('div')
  } while (lis.querySelector('div') !== undefined)
  return lis
  
  */
  
 
var lis = document.getElementById('grand-node').querySelectorAll('div');
for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].innerHTML);
  var index = i
}
return lis[index]
}
