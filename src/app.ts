import express from "express";
import { ModelService } from "types/definitions.js";

export function createApp(modelService: ModelService) {
  const app = express();
  app.use(express.json());

  app.get("/", async (req, res) => {
    return res.send("Hello World!");
  });

  return app;
}
