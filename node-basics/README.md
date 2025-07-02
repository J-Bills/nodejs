# How Does the Web Work? (Refresher)

## How to Create a Node.js Server

### Node.js Program Cycle

- `node app.js`
- Start script
- Parse code, register variables and functions
- Node application event loop kicks in
- Keeps running as long as event listeners are registered

## Using Core Node Modules

## Working with Requests and Responses (Basics)

## Asynchronous Code and the Event Loop

### Streams and Buffers

- **Example: Incoming Request**
  - Stream is read in chunks until it is done.
  - Allows us to work on the request while the data is still loading.
  - We can start waiting on this data early.
  - Our code needs a **buffer** to temporarily store data before sending the response to the client.

### Single Thread, Event Loop, and Blocking Code

- Node.js uses **only one thread**.
- So how is it able to use multiple threads?

#### Behind the Scenes:

- Let's say we're writing to a file during a request.
- The **event loop** starts and handles all callbacks from fast, non-blocking tasks.
- Other long-running or blocking tasks are sent to the **Worker Pool**.
  - These run on separate threads (outside our main code).
  - Once completed, the **Worker Pool** notifies the event loop to process the stored callback.

### Event Loop Cycle

1. Check for any **timer callbacks** (e.g., `setTimeout`, `setInterval`).
2. Handle any **pending I/O callbacks**.
3. Enter the **poll stage** to:
   - Retrieve new I/O events.
   - Execute their associated callbacks.
4. Enter the **check stage** to run any `setImmediate()` callbacks.
5. Execute any **'close' event** callbacks.
6. If there are **no more active events** (`ref == 0`), the process exits via `process.exit`.
