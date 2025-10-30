import { getDirname } from "@/lib/utils";
import {
  ArticleService,
  IArticle,
  ModelService,
  NewArticle,
} from "@definitions";
import { existsSync, mkdirSync } from "fs";
import * as fs from "fs/promises";
import path from "path";

class ArticleModel implements ArticleService {
  private fileFolder: string;

  constructor(fileFolder: string) {
    this.fileFolder = path.join(getDirname(import.meta.url), fileFolder);
    this.ensureFolderExists();
  }

  private ensureFolderExists() {
    if (!existsSync(this.fileFolder)) {
      mkdirSync(this.fileFolder);
    }
  }

  async getArticles() {
    try {
      const files = await fs.readdir(this.fileFolder);
      const articles: IArticle[] = [];

      for (const file of files) {
        const filePath = path.join(this.fileFolder, file);
        const data = await fs.readFile(filePath, "utf-8");
        const article: IArticle = JSON.parse(data);
        articles.push(article);
      }

      return articles;
    } catch (error) {
      console.error("Error reading articles:", error);
      return [];
    }
  }
  async getArticle(id: IArticle["id"]) {
    return {} as IArticle;
  }
  async createArticle(article: NewArticle): Promise<IArticle> {
    return {} as IArticle;
  }
  async updateArticle(article: IArticle): Promise<IArticle> {
    return {} as IArticle;
  }
  async deleteArticle(id: IArticle["id"]): Promise<void> {}
}

export class ModelServiceFileSystem implements ModelService {
  articles: ArticleService;
  constructor(fileFolder: string) {
    this.articles = new ArticleModel(fileFolder);
  }
}
