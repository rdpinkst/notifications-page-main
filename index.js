const getAllArticles = document.querySelectorAll(".ind-notification");
const countDOM = document.querySelector(".not-count");
let count = 0;
let allNodes = [];
let unreadNodes = []

getAllArticles.forEach((notification, index) => {
    const unread = notification.querySelector(".unread");
    allNodes.push(notification);
    unreadNodes.push(unread);
    if(unread) {
        count += 1;
        notification.classList.add("change-background");
        notification.addEventListener("click", clearNotification);
        countDOM.innerHTML = `<span>${count}</span>`;

    } 
})

console.log(allNodes)
function clearNotification(event) {
    event.currentTarget.classList.remove("change-background");
    const dot = event.currentTarget.querySelector(".one-line .description div");
    count -= 1;
    dot.classList.remove("unread");
    dot.classList.add("read");
    countDOM.innerHTML = `<span>${count}</span>`;
}

function removeListener(number) {
    number.forEach(removed => {
        removed.removeEventListener("click", clearNotification)
    })
}

