import { useEffect } from 'react';
import anime from 'animejs';

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

const AnimateButton = () => {
  useEffect(() => {
    const button = document.getElementById("butt");

    const animateMove = (element, prop, pixels) =>
      anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
      });

    ["mouseover", "click"].forEach(function (el) {
      button.addEventListener(el, function (event) {
        const top = getRandomNumber(window.innerHeight - this.offsetHeight);
        const left = getRandomNumber(window.innerWidth - this.offsetWidth);

        animateMove(this, "left", left).play();
        animateMove(this, "top", top).play();
      });
    });
  }, []);

  return (
    <button id="butt" className="absolute top-[51.5%] right-[6%] h-14 w-40 text-lg rounded-xl shadow-md bg-pink-500 text-white">
        NO 
    </button>
  );
};

export default AnimateButton;
