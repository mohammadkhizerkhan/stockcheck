var btn=document.querySelector('#click')

var purchase=document.querySelector('#purIn')
var stock=document.querySelector('#stockIn')
var current=document.querySelector('#curIn')

var outputTxt=document.querySelector('#result')


btn.addEventListener('click',function clickHandler(){
	var purvalue=parseFloat(purchase.value)
	var stockvalue=parseFloat(stock.value)
	var curvalue=parseFloat(current.value)
	// console.log("clicked")
	if( !isNaN(purvalue) && !isNaN(stockvalue) && !isNaN(curvalue)){
		if(purvalue>0&&stockvalue>0&&curvalue>0){
			if(purvalue>curvalue){
				const loss=((curvalue-purvalue)*stockvalue).toFixed(3);
				const lossper=(100-((curvalue/purvalue)*100)).toFixed(3);
				outputTxt.innerHTML=(`You have lossed ${lossper}%. Your total loss is ₹${loss}`)
			}
			else if(purvalue<curvalue){
				const gain=((curvalue-purvalue)*stockvalue).toFixed(3);
				const gainper=(((curvalue/purvalue)*100)-100).toFixed(3);
				outputTxt.innerHTML=(`You have gained ${gainper}%. Your total profit is ₹${gain}`)
			}
			else{
				outputTxt.innerHTML=(`You have not gained or lossed any money`)
			}
		}
		else{
			console.log("invalid")
			outputTxt.innerHTML="please enter the number greater than 0"
		}
	}
	else{
		outputTxt.innerHTML="please enter the valid number"
	}		
});