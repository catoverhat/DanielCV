import "./ArticleTitle.css";

const ArticleTitle = (props) => {

const mainTitle = ['p1','p2', 'p3', 'p4']
  return (
    <div className="article-title-section article-section">
      {/* <h2>Recreation From Scratch</h2> */}
      <h2>{mainTitle[props.mainTitleIndex]}</h2>
      <i className="fa-light fa-plus-large"></i>
    </div>
  );
};

export default ArticleTitle;
