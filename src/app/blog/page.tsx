"use client";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

// export const metadata = {
//   title: "Сторінка про блог",
//   description: "Сторінка про блог",
// };

const Blog = () => {
  const [modal, setModal] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleClickModal = () => {
    setModal((prevState) => !prevState);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal]);

  return (
    <>
      <h1>Сторінка блог</h1>
      <button onClick={handleClickModal}>Відкрити</button>

      <CSSTransition
        in={modal} // Властивість `in` контролює анімацію
        nodeRef={nodeRef}
        timeout={300}
        classNames="modal"
        unmountOnExit // Компонент буде видалено з DOM після анімації
      >
        <div className="backdrop" onClick={handleClickModal}>
          <div
            ref={nodeRef}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleClickModal}>Закрити</button>
            <p>Це вміст модального вікна.</p>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Blog;
