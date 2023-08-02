const getAllArticles = document.querySelectorAll(".ind-notification");

getAllArticles.forEach(notification => {
    const active = notification.querySelector(".unread");
    if(active) {
        notification.classList.add("change-background");
        notification.addEventListener("click", event => {
            event.currentTarget.classList.remove("change-background");
        })
    }
})

function clearNotification() {

}
