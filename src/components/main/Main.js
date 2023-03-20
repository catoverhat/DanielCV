import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

const Main = () => {
  //   let activeIndex = 0;

  //   const slides = document.getElementsByTagName("article");

  //   const handleLeftClick = () => {
  //     const nextIndex =
  //       activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  //     const currentSlide = document.querySelector(
  //         `[data-index="${activeIndex}"]`
  //       ),
  //       nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  //     currentSlide.dataset.status = "after";

  //     nextSlide.dataset.status = "becoming-active-from-before";

  //     setTimeout(() => {
  //       nextSlide.dataset.status = "active";
  //       activeIndex = nextIndex;
  //     });
  //   };

  //   const handleRightClick = () => {
  //     const nextIndex =
  //       activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  //     const currentSlide = document.querySelector(
  //         `[data-index="${activeIndex}"]`
  //       ),
  //       nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  //     currentSlide.dataset.status = "before";

  //     nextSlide.dataset.status = "becoming-active-from-after";

  //     setTimeout(() => {
  //       nextSlide.dataset.status = "active";
  //       activeIndex = nextIndex;
  //     });
  //   };

  //   /* -- Mobile Nav Toggle -- */

  //   const nav = document.querySelector("nav");

  //   const handleNavToggle = () => {
  //     nav.dataset.transitionable = "true";

  //     nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
  //   };

  //   window.matchMedia("(max-width: 800px)").onchange = (e) => {
  //     nav.dataset.transitionable = "false";

  //     nav.dataset.toggled = "false";
  //   };

  return (
    <main>
      <article data-index="0" data-status="active">
        <div className="article-image-section article-section"></div>
        <div className="article-description-section article-section">
          <p>
            This is a recreation (from scratch) of{" "}
            <a
              className="source-link"
              href="https://www.dylanbrouwer.design/work"
              target="_blank"
            >
              dylanbrouwer.design/work
            </a>
            . See how I did it{" "}
            <a className="yt-link" href="#" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            .
          </p>
        </div>
        <div className="article-title-section article-section">
          <h2>Recreation From Scratch</h2>
          <i className="fa-light fa-plus-large"></i>
        </div>
        <div className="article-nav-section article-section">
          <button
            className="article-nav-button"
            type="button"
            onClick="handleLeftClick()"
          >
            <i className="fa-light fa-arrow-left-long"></i>
          </button>
          <button
            className="article-nav-button"
            type="button"
            onClick="handleRightClick()"
          >
            <i className="fa-light fa-arrow-right-long"></i>
          </button>
        </div>
      </article>
    </main>
    //   <article data-index="1" data-status="inactive">
    //     <div className="article-image-section article-section"></div>
    //     <div className="article-description-section article-section">
    //       <p>
    //         A place where books hang out waiting to be grabbed. But don't be too
    //         grabby now, ya hear.
    //       </p>
    //     </div>
    //     <div className="article-title-section article-section">
    //       <h2>Wicked Cool Library Shelves</h2>
    //       <i className="fa-light fa-plus-large"></i>
    //     </div>
    //     <div className="article-nav-section article-section">
    //       <button
    //         className="article-nav-button"
    //         type="button"
    //         onClick="handleLeftClick()"
    //       >
    //         <i className="fa-light fa-arrow-left-long"></i>
    //       </button>
    //       <button
    //         className="article-nav-button"
    //         type="button"
    //         onClick="handleRightClick()"
    //       >
    //         <i className="fa-light fa-arrow-right-long"></i>
    //       </button>
    //     </div>
    //   </article>
    //   <article data-index="2" data-status="inactive">
    //     <div className="article-image-section article-section"></div>
    //     <div className="article-description-section article-section">
    //       <p>
    //         The neatest lighthouse you ever saw. Ehh, actually it's kind of
    //         messy. But that's why the pic is of the outside.
    //       </p>
    //     </div>
    //     <div className="article-title-section article-section">
    //       <h2>Neato Toledo Lighthouse</h2>
    //       <i className="fa-light fa-plus-large"></i>
    //     </div>
    //     <div className="article-nav-section article-section">
    //       <button
    //         className="article-nav-button"
    //         type="button"
    //         onClick="handleLeftClick()"
    //       >
    //         <i className="fa-light fa-arrow-left-long"></i>
    //       </button>
    //       <button
    //         className="article-nav-button"
    //         type="button"
    //         onClick="handleRightClick()"
    //       >
    //         <i className="fa-light fa-arrow-right-long"></i>
    //       </button>
    //     </div>
    //   </article>
    //   <article data-index="3" data-status="inactive">
    //     <div className="article-image-section article-section"></div>
    //     <div className="article-description-section article-section">
    //       <p>
    //         The blobiest of blobs nestled deep in the heart of outer space.
    //         Well, technically the universe is both infinite and homogeneous so
    //         there isn't really a heart, per se.
    //       </p>
    //     </div>
    //     <div className="article-title-section article-section">
    //       <h2>Super Space Blob</h2>
    //       <i className="fa-light fa-plus-large"></i>
    //     </div>
    //     <div className="article-nav-section article-section">
    //       <button
    //         className="article-nav-button"
    //         type="button"
    //         onClick="handleLeftClick()"
    //       >
    //         <i className="fa-light fa-arrow-left-long"></i>
    //       </button>
    //       <button
    //         className="article-nav-button"
    //         type="button"
    //         onClick="handleRightClick()"
    //       >
    //         <i className="fa-light fa-arrow-right-long"></i>
    //       </button>
    //     </div>
    //   </article>
    // </main>
  );
};

export default Main;
