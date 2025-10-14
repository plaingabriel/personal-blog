import {
  ArticleService,
  IArticle,
  ModelService,
  NewArticle,
} from "types/definitions";

class ArticleModel implements ArticleService {
  private fileFolder: string;

  constructor(fileFolder: string) {
    this.fileFolder = fileFolder;
  }

  async getArticles() {
    return [];
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
