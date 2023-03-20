import "./ArticleDescription.css";

const ArticleDescription = () => {
  return (
    <div className="article-description-section article-section">
      <p>
        This is a recreation (from scratch) of{" "}
        <a
          className="source-link"
          href="#"
          target="_blank"
        >
          dylanbrouwer.design/wor
        </a>
        . See how I did it{" "}
        <a className="yt-link" href="#" target="_blank">
          <i className="fa-brands fa-youtube"></i>
        </a>
        .
      </p>
    </div>
  );
};

export default ArticleDescription;
