function SetInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// apply button enable when 4 ticket selected
function applyEnable() {
  document.getElementById("apply").removeAttribute("disabled");
}

function checkValidation() {
  const coupon = document.getElementById("coupon-input");
  if (coupon.value === "NEW15") {
    return;
  } else if (coupon.value === "Couple 20") {
    return;
  } else {
    alert("Wrong coupon code please check.");
  }
}

function addSeatInfo(event) {
  const id = event.target.id;
  let ticketclassList = event.target.classList;
  ticketclassList.remove("bg-[#F7F8F8]");
  ticketclassList.add("bg-[#1DD100]", "text-white");
  event.target.setAttribute("disabled", "");
  //adding seat info to the select area
  let seatInfo = document.getElementById("seat-info");
  let div = document.createElement("div");
  div.classList.add("flex", "justify-between");
  let p1 = document.createElement("p");
  p1.innerText = id;
  let p2 = document.createElement("p");
  p2.innerText = "Economy";
  let p3 = document.createElement("p");
  p3.innerText = "550";
  div.append(p1, p2, p3);
  seatInfo.appendChild(div);
}
