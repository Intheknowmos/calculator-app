// calculate app

// function calculateTip (){
//     var billamt = document.getElementById("billamt").value;

//     var selectTip = document.getElementById("selectTip").value;

//     var numofPeople = document.getElementById("numofPeople").value;
// }

// if ( billamt === "" || selectTip === 0 ) {
//     alert ("Please enter values");
//     return;
// }

// if ( numofPeople === 0 || numofPeople <= 1){
//     numofPeople = 1;
// }

const billamt = document.getElementById("billamt");
const five = document.querySelector("#five");
const ten = document.querySelector("#ten");
const fifteen = document.querySelector("#fifteen");
const twentyfive = document.querySelector("#twentyfive");
const fifty = document.querySelector("#fifty");
const custom = document.querySelector("#custom");
const numofPeople = document.querySelector("#numofPeople");
const firsttip = document.querySelector("#firsttip");
const secondtip = document.querySelector("#secondtip");
const reset = document.querySelector("#reset");

// five.addEventListener("click", (e)=> {
//     console.log(e.target.value)
// })

let billAmount = "";
let tipAmount = "";
let nopofPeople = "";

function tipPercent (percent) {
    switch(percent){
        case billamt:
            percent.addEventListener('change', (e)=> {
                billAmount = e.target.value
                totalAmount()
            })
            break;
        case five:
        case ten:
        case fifteen:
        case fifty:
        case twentyfive:
            percent.addEventListener('click', (e)=> {
                tipAmount = e.target.value
                totalAmount()
            })
            break;
        case custom:
            percent.addEventListener('change', (e)=> {
                tipAmount = e.target.value
                totalAmount()
            })
            break;
        case numofPeople:
            percent.addEventListener('change', (e)=> {
                nopofPeople = e.target.value
                totalAmount()
            })
            break;
        default:
            return "false"
    }





    // if (percent != custom && percent != billamt && percent != numofPeople) {
    //     percent.addEventListener('click', (e)=> {
    //         return e.target.value
    //     })
    // }else {
    //     percent.addEventListener('change', (e)=> {
    //         return e.currentTarget.value
    //     })
    // }
}

custom.addEventListener('click', (e)=> {
    custom.type = 'text'
    custom.value = ""
    custom.placeholder = 0
    custom.style.width = "60px"
})

function totalAmount (){
    if (billAmount && tipAmount && nopofPeople){
        tipAmount = parseInt(tipAmount.replace("%",""));
        tipAmount = tipAmount/100;
        // firsttip.innerHTML = eval(billAmount * tipAmount / nopofPeople)
        let tipResult =  eval(billAmount * tipAmount / nopofPeople); 
        firsttip.innerHTML = Number.parseFloat(tipResult).toFixed(2);
        // let tipResult = firsttip

        let totalResult = eval(billAmount / nopofPeople + tipResult);
        secondtip.innerHTML = Number.parseFloat(totalResult).toFixed(2);
    }else {
        console.log("fill in the values") 
    }
}

reset.addEventListener('click', (e)=> {
//    billamt.value = "";
//    numofPeople.value = "";
// //    custom.value = "";
//    firsttip.innerHTML = "$0.00";
//    secondtip.innerHTML = "$0.00";

    billAmount = "";
    tipAmount = "";
    nopofPeople = "";
    firsttip.innerHTML = "$0.00";
    secondtip.innerHTML = "$0.00";
    billamt.value = 0
    numofPeople.value = 0 

})

tipPercent(five)
tipPercent(billamt)
tipPercent(custom)
tipPercent(ten)
tipPercent(numofPeople)
// tipPercent(firsttip)
// tipPercent(secondtip)
tipPercent(fifteen)
tipPercent(twentyfive)
tipPercent(fifty)
