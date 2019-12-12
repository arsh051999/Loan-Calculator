var Loan_Amount=document.querySelector("#loan_amount");
//
var Loan_Term=document.querySelector("#term");
//
var button=document.querySelector("#calcu");
button.addEventListener("click",calculator);
function calculator () {
  var annual_interest=5;
  //
  var mon_interest=(annual_interest/100)/12;
  //
  var a=1+mon_interest;
  //

  var npayments= Loan_Term.value * 12;
  var b = Math.pow(a,-(npayments));
  //console.log("b:" +b);
  //
  var c=1-b;
  //
  var d=parseInt(Loan_Amount.value) * mon_interest;
  
  //
  var mon_installments=d/c;


  var heading = document.createElement("h2");
  heading.innerHTML = "Monthly Installment: " + mon_installments.toFixed(2);

  document.querySelector("#container").appendChild(heading);

}

//var values=document.createElement("li");
//text.value="";
//data.appendChild(button);
