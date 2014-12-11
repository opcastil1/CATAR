temperatura=0;
presion=0;
	
	 function myFunction() {

    setInterval(function(){  dispatcher.trigger('tasks.create', '');
                        dispatcher.bind('tasks.new', function(task) {
                        temperatura = task[0];
                        presion = task[1];
                        velocidadmotor = task[2];
                        });
                        //console.log('temperatura = ' + temperatura+' presion = ' + presion);
                         }, 500);

}

 


 function realtime() {

    setInterval(function(){  


document.getElementById("p1").innerHTML = presion;
document.getElementById("p2").innerHTML = temperatura;
document.getElementById("p3").innerHTML = velocidadmotor;

 }, 1000);

}










