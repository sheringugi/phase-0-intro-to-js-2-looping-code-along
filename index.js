function writeCards(message,event) {
    const messages = []
    for(let i = 0; i < message.length;i++) {
        
           const greetingMessage = `Thank you, ${message[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
    }
    return messages;

}

  
  function countDown (integer) {
  while(integer>=0){
        console.log(integer);
        integer--;
  }
}