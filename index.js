const getAllArticles = document.querySelectorAll(".ind-notification");
const countDOM = document.querySelector(".not-count");
const clearAll = document.querySelector("#all-read");
let count = 0;
let allNodes = [];
let unreadNodes = []

getAllArticles.forEach((notification, index) => {
    const unread = notification.querySelector(".unread");
    if(unread) {
      unreadNodes.push(notification);  
    }
    
    if(unread) {
        count += 1;
        notification.classList.add("change-background");
        notification.addEventListener("click", clearNotification, {once: true});
        countDOM.innerHTML = `<span>${count}</span>`;

    } 
})

console.log(unreadNodes)
function clearNotification(event) {
    event.currentTarget.classList.remove("change-background");
    const dot = event.currentTarget.querySelector(".one-line .description div");
    count -= 1;
    dot.classList.remove("unread");
    dot.classList.add("read");
    countDOM.innerHTML = `<span>${count}</span>`;
}

clearAll.addEventListener("click", event => {
    if(unreadNodes.length > 0) {
        unreadNodes.forEach(node => {
            node.classList.remove("change-background");
            console.log(node)
            const dot = node.querySelector(".one-line .description div");
            count = 0;
            dot.classList.remove("unread");
            dot.classList.add("read");
            countDOM.innerHTML = `<span>${count}</span>`;
            node.removeEventListener("click", clearNotification);
        });
        unreadNodes = [];
    }
})



