function createLogger(prefix) {
  let count = 0; // private state, lexically scoped to createLogger

  return function (message) {
    count++;
    console.log(`[${prefix} #${count}] ${message}`);
  };
}

const appLogger = createLogger("APP");
const dbLogger = createLogger("DB");

appLogger("Server started");  // [APP #1] Server started
appLogger("User logged in");  // [APP #2] User logged in
dbLogger("Connection opened"); // [DB #1] Connection opened
appLogger("Request handled"); // [APP #3] Request handled