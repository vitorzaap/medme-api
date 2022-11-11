import "dotenv/config";
import { serverHttp, app } from "./WebSocket/socket.js";
import "./WebSocket/events.js";
// import userController from "./Controller/userController.js";
// import medicController from "./Controller/medicController.js";
// import conversationController from "./Controller/conversationController.js";
// import messagesController from "./Controller/messagesController.js";
import defaultController from "./Controller/defaultController.js";

app.use(defaultController);

serverHttp.listen(3002, () => console.log(`Listening at the port 3333`));