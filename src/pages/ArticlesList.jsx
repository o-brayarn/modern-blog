import { ArticlesListItems } from "../components";
import articles from "./article-content";

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesListItems articles={articles} />
    </>
  );
};

export default ArticlesList;
