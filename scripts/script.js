let ticketCount = 0;
let totalPrice = 0;
const ticketPrice = 550;
let discountPrice = 0;
let grandTotalPrice = 0;


const tickets = document.getElementsByClassName('ticket');


for(let ticket of tickets){
    ticket.addEventListener('click', action);
}

function action(event){
    if(ticketCount < 4){
        ticketCount++;
        SetInnerText("seat-cnt", ticketCount);
        addSeatInfo(event);
        totalPrice += ticketPrice;
        grandTotalPrice = totalPrice;
        SetInnerText("total-price",totalPrice);
        SetInnerText("grand-total",grandTotalPrice);


        
        if(ticketCount==4){
            applyEnable(); // apply button enabling
            document.getElementById("apply").addEventListener('click',checkValidation);
        }
    }
    else{
        alert("You can't select more than 4 tickets.")
    }
    
}

