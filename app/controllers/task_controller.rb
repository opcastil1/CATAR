class TaskController < WebsocketRails::BaseController
  # The `message` method contains the data received
	
require 'socket'
require 'json'
$s = TCPSocket.open('localhost', 9000) 



def create

        
        request = { 'holo' => 'param1' }.to_json
        $s.print(request)
        line = $s.gets()
        olo = JSON.parse(line)
        p = olo['presion']
        t = olo['temperatura']
        v = olo['velocidadmotor']
        task = [p,t,v]
        send_message :new, task, :namespace => :tasks
        datos=Datos.create(:presion => p, :temperatura => t ,:velocidadmotor => v )
     
      
  
end






end