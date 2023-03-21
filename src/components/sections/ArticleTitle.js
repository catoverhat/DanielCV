import "./ArticleTitle.css";

const ArticleTitle = (props) => {
  const mainTitle = ["p1", "p2", "p3", "p4"];
  return (
    <div className="article-title-section article-section">
      {/* <h2>Recreation From Scratch</h2> */}
      <h2>{mainTitle[props.titleIndex]}</h2>
      <i className="fa-solid fa-plus"></i>
    </div>
  );
};

export default ArticleTitle;
