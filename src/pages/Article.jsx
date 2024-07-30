import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import axios from "axios";
import { CommentsList } from "../components";
const Article = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
  });

  const { articleId } = useParams();
  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  }, [articleId]);
  const article = articles.find((article) => article.name === articleId);

  if (!article) return <NotFound />;
  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default Article;
