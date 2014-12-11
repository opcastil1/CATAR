temperatura=0;
presion=0;
	
	 function myFunction() {

    setInterval(function(){  dispatcher.trigger('tasks.create', '');
                        dispatcher.bind('tasks.new', function(task) {
                        temperatura = task[0];
                        presion = task[1];
                        });
                        console.log('temperatura = ' + temperatura+' presion = ' + presion); }, 300);

}

 
















