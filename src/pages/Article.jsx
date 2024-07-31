import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddCommentForm, CommentsList } from "../components";
const Article = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
  });

  const { articleId } = useParams();
  useEffect(() => {
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get(`/api/articles/${articleId}`);
        const newArticleInfo = response.data;
        setArticleInfo(newArticleInfo);
      } catch (error) {
        console.error("Failed to load article info", error);
      }
    };
    loadArticleInfo();
  }, []);
  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvotes`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) return <NotFound />;
  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        <button onClick={addUpvote}>Upvote</button>
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <AddCommentForm
        articleName={articleId}
        onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
      />
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default Article;
