function printableMessage() {
    var message = "hello";

    function printMessage() {
        console.log(message);
    }

    function setMessage(newMessage) {
        message = newMessage;
    }
    return {
        printMessage: printMessage,
        setMessage: setMessage
    };
};

var awesome1 = printableMessage();
awesome1.printMessage();
"hello"

var awesome2 = printableMessage();
awesome2.setMessage('hi :)');
awesome2.printMessage();
"hi :)"

awesome1.printMessage();
"hello"