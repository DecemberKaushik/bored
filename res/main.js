var boredText = document.querySelector('#bored--text')
var boredButton = document.querySelector('#bored--button')
var forLink = document.querySelector('#for--link')
var alrM = document.querySelector('#alrBox')
function boredButt() {
  var arr1 = [1, 2, 3, 4, 5]
  const partRan = arr1[Math.floor(Math.random() * arr1.length)];
  var intee = `https://www.boredapi.com/api/activity?participants=${partRan}`
  fetch(intee)
    .then(response => {
      return response.json();
    })
    .then(datai => {
      boredText.innerHTML = datai.activity
      if (datai.link != "") {
        forLink.innerHTML = `<br><a href="${datai.link}" class="card-link" target="_blank">${datai.link}</a>`
        alrBox.innerHTML = ''
      } else {
        forLink.innerHTML = ''
        alrBox.innerHTML = ''
      }
    })
    .catch(err => {
      alrM.innerHTML = `<div class="alert alert-warning" role="alert">${err.message}</div>`
    })
}
boredButton.addEventListener("click", boredButt);