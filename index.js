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

function clearNotification(event) {
    clearDom(event.currentTarget);
    count -= 1;
    countDOM.innerHTML = `<span>${count}</span>`;
    unreadNodes = unreadNodes.filter(node => node !== event.currentTarget);
}

clearAll.addEventListener("click", event => {
    if(unreadNodes.length > 0) {
        unreadNodes.forEach(node => {
            clearDom(node)
            count = 0;
            countDOM.innerHTML = `<span>${count}</span>`;
            node.removeEventListener("click", clearNotification);
        });
        unreadNodes = [];
    }
})

function clearDom(nodeClear) {
    nodeClear.classList.remove("change-background");
    const dot = nodeClear.querySelector(".one-line .description .unread");
    dot.classList.remove("unread");
    dot.classList.add("read");
}



