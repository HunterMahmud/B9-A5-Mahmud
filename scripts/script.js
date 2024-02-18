const tickets = document.getElementsByClassName('ticket');
let ticketCount = 0;
let totalPrice = 0;
const ticketPrice = 550;
let discountPrice = 0;
let grandTotalPrice = 0;

function color(event){
    let ticketclassList = event.target.classList;
    
    if(ticketCount < 4){
        ticketCount++;
        SetInnerText("seat-cnt", ticketCount);

        ticketclassList.remove('bg-[#F7F8F8]');
        ticketclassList.add('bg-[#1DD100]', 'text-white');
        event.target.setAttribute("disabled","");

    }
    else{
        alert("You can't select more than 4 tickets.")
    }
    
}

for(let ticket of tickets){
    ticket.addEventListener('click', color);
}



