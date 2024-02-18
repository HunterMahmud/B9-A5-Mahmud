const tickets = document.getElementsByClassName('ticket');
let ticketCount = 0;
function color(event){
    let ticketclassList = event.target.classList;
    
    if(ticketCount < 4){
        ticketCount++;
        document.getElementById("seat-cnt").innerText = ticketCount;
        ticketclassList.remove('bg-[#F7F8F8]');
        ticketclassList.add('bg-[#1DD100]', 'text-white');
        event.target.setAttribute("disabled","");
    }
    else{
        alert("you can't select more than 4 tickets")
    }
    
    
}

for(let ticket of tickets){
    ticket.addEventListener('click', color);
}


