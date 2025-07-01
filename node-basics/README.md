How does the web work? (Refresher)
How to create a Node.js Server
-- Node JS Program Cycle
    -Node app.js
    -Start Script
    -Parse Code, Register, Variables and Functions
    -Node application event loop kicks in
    -Keeps on running as long as event listeners are registered
Using Core Node Modules
Working with Requests and Responses(Basics)
Asynchronous code and the Event Loop
    --Streams and Buffers
        -EX: Incoming Request
            -Stream is read in chunks until it is done. Allows us to work on the request while the data is loading
            -So we can start waiting on this data early
            -Our code needs a buffer so that we can work on the data before sending the response to the client.
    --Single Thread, Event Loop and Blocking Code
        -NodeJS only uses one thread
        -So how is it able to use multiple threads?
            -Let's say that we are writing to a file with a requests
            -The Event loop starts and handles all of the callbacks when the events happen and if they are fast
            -Other responses are sent to the Worker Pool and runs on different threads and is run separately from our code
            -The Worker Pool triggers the event loop to go through stored callbacks
            -Event Loop Cycle:
                -The event loop first checks if there are and Timer Callbacks that need to be run because a timer was completed.
                -Then it goes to any pending I/O Callbacks
                -Poll stage to retrieve new I/O Callbacks and execute their callbacks
                -Check stage to execute setImmediate() callbacks
                -Executes any 'close' event callbacks
                -If there are no many events (ref == 0) {ref is the counter that increments with every callback} then we process.exit