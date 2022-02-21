var $addEntryButton = document.querySelector('.add-entry-button');
var $form = document.querySelector('form');
var $modal = document.querySelector('#modal');
var $overlay = document.querySelector('.overlay');

// $form.addEventListener('submit', event => {

// });
$addEntryButton.addEventListener('click', event => {
  $modal.classList.remove('hidden');
  $overlay.classList.remove('hidden');
});
