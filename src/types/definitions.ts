export interface IArticle {
  id: string;
  title: string;
  content: string;
}

export type NewArticle = Omit<IArticle, "id">;

export interface ArticleService {
  getArticles(): Promise<IArticle[]>;
  getArticle(id: IArticle["id"]): Promise<IArticle>;
  createArticle(article: NewArticle): Promise<IArticle>;
  updateArticle(article: IArticle): Promise<IArticle>;
  deleteArticle(id: IArticle["id"]): Promise<void>;
}

export interface ModelService {
  articles: ArticleService;
}
