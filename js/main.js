/* eslint-disable no-unused-vars */
/* global data */
/* exported data */

var modalIsOpen = false;

var $addEntryButton = document.querySelector('.add-entry-button');
var $form = document.querySelector('form');
var $modal = document.querySelector('#modal');
var $overlay = document.querySelector('.overlay');
$form.addEventListener('submit', event => {
  event.preventDefault();
  var formValues = {
    day: $form.elements.week.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value
  };
  for (let i = 1; i < $form.elements.week.length; i++) {
    if ($form.elements.week[i].getAttribute('data-day') === formValues.day.toLowerCase()) {
      var currentFormDataDay = $form.elements.week[i].getAttribute('data-day');
      formValues.dataDay = currentFormDataDay;
    }
  }
  data[currentFormDataDay].entries.push(formValues);
  console.log('formvalues result', formValues);
  $form.reset();
  openModal();
});

$addEntryButton.addEventListener('click', event => {
  openModal();
});

var openModal = () => {
  if (modalIsOpen) {
    $modal.classList.add('hidden');
    $overlay.classList.add('hidden');
    modalIsOpen = false;
  } else {
    $modal.classList.remove('hidden');
    $overlay.classList.remove('hidden');
    modalIsOpen = true;
  }
};
