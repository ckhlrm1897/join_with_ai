/**
 * Back button element used to navigate to the previous page.
 *
 * @type {HTMLElement|null}
 */
const btnHelpBack = document.getElementById('btn-help-back');

/**
 * Navigates the user back to the previous page in the browser history
 * when the help back button is clicked.
 *
 * @event click
 * @returns {void}
 */
btnHelpBack.addEventListener("click", () => {
  window.history.back()
})