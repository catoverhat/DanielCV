import "./Main.css";
import ArticleDescription from "../sections/ArticleDescription";
import ArticleNav from "../sections/ArticleNav";
import ArticleImage from "../sections/ArticleImage";
import ArticleTitle from "../sections/ArticleTitle";
import { useState, useRef } from "react";

const Main = () => {
  const mainRef = useRef("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftClick = () => {
    const nextIndex =
      activeIndex - 1 >= 0
        ? activeIndex - 1
        : mainRef.current.childElementCount - 1;
    setActiveIndex(nextIndex);

    mainRef.current.children[activeIndex].setAttribute("data-status", "after");

    mainRef.current.children[nextIndex].setAttribute(
      "data-status",
      "becoming-active-from-before"
    );

    setTimeout(() => {
      mainRef.current.children[nextIndex].setAttribute("data-status", "active");
      setActiveIndex(nextIndex);
    });
  };

  const handleRightClick = () => {
    const nextIndex =
      activeIndex + 1 <= mainRef.current.childElementCount - 1
        ? activeIndex + 1
        : 0;
    setActiveIndex(nextIndex);

    mainRef.current.children[activeIndex].setAttribute("data-status", "before");

    mainRef.current.children[nextIndex].setAttribute(
      "data-status",
      "becoming-active-from-after"
    );

    setTimeout(() => {
      mainRef.current.children[nextIndex].setAttribute("data-status", "active");
      setActiveIndex(nextIndex);
    });
  };

  return (
    <main ref={mainRef}>
      <article data-index="0" data-status="active">
        <ArticleImage></ArticleImage>
        <ArticleDescription></ArticleDescription>
        <ArticleTitle titleIndex={0}></ArticleTitle>
        <ArticleNav
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        ></ArticleNav>
      </article>

      <article data-index="1" data-status="inactive">
        <ArticleImage></ArticleImage>
        <ArticleDescription></ArticleDescription>
        <ArticleTitle titleIndex={1}></ArticleTitle>
        <ArticleNav
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        ></ArticleNav>
      </article>

      <article data-index="2" data-status="inactive">
        <ArticleImage></ArticleImage>
        <ArticleDescription></ArticleDescription>
        <ArticleTitle titleIndex={2}></ArticleTitle>
        <ArticleNav
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        ></ArticleNav>
      </article>

      <article data-index="3" data-status="inactive">
        <ArticleImage></ArticleImage>
        <ArticleDescription></ArticleDescription>
        <ArticleTitle titleIndex={3}></ArticleTitle>
        <ArticleNav
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        ></ArticleNav>
      </article>
    </main>
  );
};

export default Main;
