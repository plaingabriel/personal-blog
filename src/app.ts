import { ModelService } from "@definitions";
import express from "express";
import { getDirname } from "./lib/utils";

export function createApp(modelService: ModelService) {
  const app = express();
  const __dirname = getDirname(import.meta.url);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(express.static(__dirname + "/public"));

  app.set("view engine", "ejs");
  app.set("views", __dirname + "/views");

  app.get("/", async (req, res) => {
    const articles = await modelService.articles.getArticles();

    return res.render("index", { articles });
  });

  return app;
}
