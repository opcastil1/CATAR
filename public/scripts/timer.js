hr= 0
min = 0
sec = 0
eval = 0
hr2= 0
min2 = 0
sec2 = 0
eval2 = 0
function chrono(){
	
   if (eval == 0){

	

	if (sec < 60 ){
		sec = 1 + sec
	}

    if (sec == 60 ){
         
		sec = 0
		min = 1 + min
	}

	 if (min == 60 ){
         
		min = 0
		hr = 1 + hr
	}

    if (hr == 99 ){
         
		hr = 0
	}

	
    if (min < 10){

       if (sec < 10){
      document.getElementById("chronotime").innerHTML = hr + ":" + "0"+min + ":" +"0"+ sec
  }else 
  {document.getElementById("chronotime").innerHTML = hr + ":" + "0"+min + ":" + sec}
    }else {
         
        
        if (sec < 10){
        document.getElementById("chronotime").innerHTML = hr + ":" +min + ":" + "0" + sec
}else {document.getElementById("chronotime").innerHTML = hr + ":" +min + ":" + sec}
    }

	timerID = setTimeout("chrono()", 1000)
}
}
function chronoStart(){
	
	eval = 0
	chrono()
}

function chronoStopReset(){
	eval=1
	hr = 0
	min = 0
	sec = 0
	document.getElementById("chronotime").innerHTML = "0:00:00"

}

function chrono2(){
	
   if (eval2 == 0){

	

	if (sec2 < 60 ){
		sec2 = 1 + sec2
	}

    if (sec2 == 60 ){
         
		sec2 = 0
		min2 = 1 + min2
	}

	 if (min2 == 60 ){
         
		min2 = 0
		hr2 = 1 + hr2
	}

    if (hr2 == 99 ){
         
		hr2 = 0
	}

	
    if (min2 < 10){

       if (sec2 < 10){
      document.getElementById("chronotime2").innerHTML = hr2 + ":" + "0"+min2 + ":" +"0"+ sec2
  }else 
  {document.getElementById("chronotime2").innerHTML = hr2 + ":" + "0"+min2 + ":" + sec2}
    }else {
         
        
        if (sec2 < 10){
        document.getElementById("chronotime2").innerHTML = hr2 + ":" +min2+ ":" + "0" + sec2
}else {document.getElementById("chronotime2").innerHTML = hr2 + ":" +min2 + ":" + sec2}
    }

	timerID = setTimeout("chrono2()", 1000)
}
}
function chronoStart2(){
	
	eval2 = 0
	chrono2()
}

function chronoStopReset2(){
	eval2=1
	hr2 = 0
	min2 = 0
	sec2 = 0
	document.getElementById("chronotime2").innerHTML = "0:00:00"

}

//-->