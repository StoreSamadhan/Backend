import authRouter from "./api/controllers/auth/routes";
import userRouter from "./api/controllers/user/routes";
import storageRouter from "./api/controllers/storage/routes";
import bookingRouter from "./api/controllers/booking/routes";

export default (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/storage", storageRouter);
  app.use("/api/v1/booking", bookingRouter);
}
