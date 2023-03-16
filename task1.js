const websocket = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');

websocket.onopen = function() {
  console.log('WebSocket connection opened');
};

websocket.onmessage = function(event) {
  console.log('Received message:', event.data);
};

websocket.onerror = function(error) {
  console.error('WebSocket error:', error);
};

websocket.onclose = function() {
  console.log('WebSocket connection closed');
};
