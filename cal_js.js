let b='';
let x=0;
function num(a){
	if(a=='='){
		console.log("b="+b);
		var ans=calculate(b);
		b=ans;
	}
	else if(a=='clr'){
		document.getElementById('output-value').innerHTML='0';
		b='';
		a='';
	}
	else if(a=="bsp"){
		if(b.length==1){
			document.getElementById('output-value').innerHTML='0';
		}
		else{
			b=b.toString();
			console.log(typeof(b));
			b=b.slice(0,b.length-1);
			document.getElementById('output-value').innerHTML=b;
		}
	}
	else{
	b=b+a;
	document.getElementById('output-value').innerHTML=b;
    }
}
function calculate(b){
	try{
		var i=0;
		while(1){
			if(b.charAt(i)>'0'||b.charAt(i)<'0')
			{
				break;
			}
			i++;
		}
		if(i>=b.length){
			b=0;
		}
		else{
			b=b.slice(i);
		}
		x=eval(b);
		console.log(x);
		document.getElementById('history-value').innerHTML=b;
		document.getElementById('output-value').innerHTML=x;
		return x;
       }
       catch(err){
       	document.getElementById('history-value').innerHTML="ERROR";
       	document.getElementById('output-value').innerHTML='0';
       	return '0';
       }
}
