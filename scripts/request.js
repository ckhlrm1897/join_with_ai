/**
 * Event listener for the DOM to be loaded to start the inital functions
 */
document.addEventListener('DOMContentLoaded', () => {
    setRequestsUsedToday()
})

/**
 * Loads the AI requests that have been made today from sessionStorage
 * and updates the corresponding UI element with the count.
 *
 * @function setRequestsUsedToday
 * @returns {void}
 */
function setRequestsUsedToday() {
    todaysAiRequestedTasks = JSON.parse(
        sessionStorage.getItem("todaysAiRequestedTasks") || "[]"
    );
    if (todaysAiRequestedTasks.length < 10) {
        let todaysRequest = document.getElementById("todays-requests");
        todaysRequest.innerHTML = todaysAiRequestedTasks.length;
    } else {
        document.querySelector(".request_welcome_container").classList.add("d_none");
        document.querySelector(".request_limit_container").classList.remove("d_none");
    }

}