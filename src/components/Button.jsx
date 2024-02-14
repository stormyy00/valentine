import { useEffect, useState } from 'react';
import anime from 'animejs';
import { texts } from '@/data/texts'; // Importing texts array from constants

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

const AnimateButton = () => {
  const [textIndex, setTextIndex] = useState(0);

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

        // Update text index
        if (textIndex < texts.length - 1) {
          setTextIndex(textIndex + 1);
        } else {
          // Redirect to "/No" when reaching the end of texts
          setTimeout(() => {
            window.location.href = "/No";
          }, 2000);
        }
      });
    });
  }, [textIndex]); // Added textIndex as a dependency

  return (
    <button id="butt" className="absolute top-[50%] lg:top-[60%] xl:top-[73%] lg:right-[10%] xl:right-[5%] h-14 w-40 text-lg rounded-xl shadow-md bg-pink-500 text-white">
        {texts[textIndex].text}
    </button>
  );
};

export default AnimateButton;

