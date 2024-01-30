require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cron = require("node-cron");

const main = require("./utils/mainTasks");
const { getIpiAdress } = require("./utils/functions");
const app = express();
const IP = getIpiAdress();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/user", require("./routes/userRoute"));
app.use("/api/v1/customer", require("./routes/customerRoute"));

const PORT = process.env.PORT;
app.listen(PORT, IP, () => {
  console.log(`Server listening on http://${IP}:${PORT}`);
  // require("events").defaultMaxListeners = 0;
  // // cron.schedule(`*/15 * * * *`, () => main()); //Chaque 15 minutes
  // cron.schedule(process.env.CRON_EXPRESSION, () => main()); //Every 30 seconds
});
