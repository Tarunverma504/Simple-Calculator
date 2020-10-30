let b='';
function num(a)
{
	if(a=='=')
	{
		document.getElementById('history-value').innerHTML=b;
		console.log(b);
	}
	else if(a=='clr')
	{
		document.getElementById('output-value').innerHTML='0';
		b='';
		a='';
		console.clear();
	}
	else
	{
	b=b+a;
	document.getElementById('output-value').innerHTML=b;
	console.log(a);	
    }

}