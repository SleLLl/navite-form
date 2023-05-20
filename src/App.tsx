import { FormEvent, useEffect, useRef, useState } from "react";
import "./index.scss";
import Input from "./Input";
import { config } from "./config";
import useOnClickOutside from "./utils/useOnClickOutside";

function App() {
  const [isAnimated, setIsAnimated] = useState({ enter: false, exit: false });
  const [isShow, setIsShow] = useState(false);
  const ref = useRef<null | HTMLFormElement>(null);

  const onStartAnimation = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShow(true);
  };

  useEffect(() => {
    const onAnimationEnd = (e: AnimationEvent) => {
      setIsAnimated({
        exit: false,
        enter: e.animationName === "exit" ? true : false,
      });
    };
    ref.current?.addEventListener("animationend", onAnimationEnd);

    return () => {
      ref.current?.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  return (
    <>
      <form
        ref={ref}
        className="form_container"
        data-animation={isAnimated.exit}
        data-animation-enter={isAnimated.enter}>
        <p className="form_title">Регистрация</p>
        {config.map((item) => (
          <Input key={item.name} {...item} />
        ))}
        <button onClick={onStartAnimation} className="form_button">
          регистрация
        </button>
      </form>
      <SlideOut isShow={isShow} onClose={() => setIsShow(false)} />
    </>
  );
}

export default App;

const SlideOut = ({ isShow, onClose }: { isShow: boolean; onClose: () => void }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [isExit, setIsExit] = useState(false);

  useOnClickOutside(ref, () => {
    setIsExit(true);
  });

  useEffect(() => {
    const onExit = (e: AnimationEvent) => {
      if (e.animationName === "slide-out-right") {
        onClose();
        setIsExit(false);
      }
    };
    ref.current?.addEventListener("animationend", onExit);

    return () => {
      ref.current?.removeEventListener("animationend", onExit);
    };
  }, [onClose]);

  if (!isShow) {
    return null;
  }

  return (
    <div className="slider-out" data-animation-exit={isExit}>
      <div ref={ref} className="slider-out_content" data-animation-exit={isExit}></div>
    </div>
  );
};
