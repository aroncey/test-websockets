require 'em-websocket'

EM.run {
  EM::WebSocket.run(:host => "localhost", :port => 2999) do |ws|
    ws.onopen { |handshake|
      puts "WebSocket connection open"

      # Access properties on the EM::WebSocket::Handshake object, e.g.
      # path, query_string, origin, headers

      # Publish message to the client
      ws.send "You are connected to the socket."
    }

    ws.onclose { puts "Connection closed" }
  end
}


