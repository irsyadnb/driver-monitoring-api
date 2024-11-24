export default function SocketHandler(io) {
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Handle incoming events
    socket.on("driverEventServer", (data) => {
      console.log("Received exampleEvent:", data);
      // Emit a response or broadcast to other clients
      socket.emit("driverEventClient", { message: "This is a response" });
    });

    socket.on("disconnect", () => {
      console.log("User  disconnected");
    });
  });
}
