import { auth } from "../../common/firebase";
import errorHandler from "./error.handler";

export default async function authHandler(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw { status: 401, message: "Unauthorized" };
    }
    const decoded = await auth.verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    errorHandler(error, req, res, next);
  }
}

// Test Auth : Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNmNjcyNDYxOTk4YjJiMzMyYWQ4MTY0ZTFiM2JlN2VkYTY4NDZiMzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RvcmUtc2FtYWRoYW4tMzczIiwiYXVkIjoic3RvcmUtc2FtYWRoYW4tMzczIiwiYXV0aF90aW1lIjoxNjY2OTY0MzU0LCJ1c2VyX2lkIjoic2pkeElEMmlxVGRtR0lMWEJjRVh6TDZjZXNuMSIsInN1YiI6InNqZHhJRDJpcVRkbUdJTFhCY0VYekw2Y2VzbjEiLCJpYXQiOjE2NjY5NjQzNTQsImV4cCI6MTY2Njk2Nzk1NCwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RAdGVzdC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ZKTF6iD-mSY338V7Sl-gxpG2q8e6owfTci9wUyw6nyOzmtTFtCGL9NDz7B04FflmQA4gPctEAVAvteXcuv_JXuzeQi9RFMZvUddcMfAuBHV3W_fSzr95ksf_Oy1rq__783GbHzS1GthrRgXv_1BNzFZdtAdCC3dgwJj8QVNTV0XeRvvT2L_SkHDnpSv6kCbs4w9Hfk_9WSOhZuq_RkMchEbM68CiTAvM-tsiKv8QomugGYhp7MkXePjjeQzY2aePO0_XcrZ-q3zwtdsMwieFB3aRpgNqDB10zjcpne2qkHduEwmWrbjXinja0hkY-PMVT6mhEalTnEP3KyVWFTgVyw