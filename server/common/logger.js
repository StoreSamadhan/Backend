import pino from "pino";

const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

const l = pino({
  name: process.env.APP_ID,
  customLevels: levels,
  level: "http",
  useOnlyCustomLevels: true,
});

export default l;
