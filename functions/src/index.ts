import * as functions from "firebase-functions";
import next from "next";
import express, { Request, Response } from "express";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: "functions/.next" } });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  // nextApp 이라는 이름의 Firebase Functions를 내보냅니다.
  exports.nextApp = functions.https.onRequest(server);
});
