import { ModelService } from "@definitions";
import express from "express";

export function createApp(modelService: ModelService) {
  const app = express();
  app.use(express.json());

  app.get("/", async (req, res) => {
    return res.send("Hello World!");
  });

  return app;
}
