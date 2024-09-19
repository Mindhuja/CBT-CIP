
document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("eventForm");
    const eventsList = document.getElementById("events");

    function addEvent(event) {
        event.preventDefault(); 
        
        const eventName = document.getElementById("eventName").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventTime = document.getElementById("eventTime").value;
        const timePeriod = document.getElementById("timePeriod").value; 
        const eventLocation = document.getElementById("eventLocation").value;

       
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${eventName}</strong><br>
            Date: ${eventDate} | Time: ${eventTime} ${timePeriod}<br>
            Location: ${eventLocation}
        `;

       
        eventsList.appendChild(li);

        
        eventForm.reset();
    }

    
    eventForm.addEventListener("submit", addEvent);
});
