/**
 * Event listener for the DOM to be loaded to start the inital functions
 */
document.addEventListener('DOMContentLoaded', () => {
    setRequestsUsedToday()
})

function setRequestsUsedToday() {
    todaysAiRequestedTasks = JSON.parse(
        sessionStorage.getItem("todaysAiRequestedTasks") || "[]"
    );
    console.log(todaysAiRequestedTasks);

    let todaysRequest = document.getElementById("todays-requests");
    todaysRequest.innerHTML = todaysAiRequestedTasks.length;
}