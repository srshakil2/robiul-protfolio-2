/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Container from "../../Hooks/Container";
import animation from "../../assets/Animation - 1702242995403.json";
import { useLottie } from "lottie-react";
import resume from "/ROBIUL HASAN1.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "ROBIUL HASAN1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    var words = ["Frontend Developer", "Programmer"];
    var counter = 0;
    var currentIndex = getRandomInt(0, words.length - 1);
    var text = document.getElementById("type-it");

    var stepInterval = setInterval(() => {
      step();
    }, 200);

    var delInterval = null;
    var delTimeout = null;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function delIntervalCallback() {
      delInterval = setInterval(() => {
        del();
      }, 100);
      clearTimeout(delTimeout);
    }

    function del() {
      if (counter === 0) {
        let newIndex = getRandomInt(0, words.length - 1);
        while (newIndex === currentIndex) {
          newIndex = getRandomInt(0, words.length - 1);
        }
        currentIndex = newIndex;
        clearInterval(delInterval);
        stepInterval = setInterval(() => {
          step();
        }, 200);
      } else {
        text.textContent = text.textContent.slice(0, -1);
        counter--;
      }
    }

    function step() {
      if (counter >= words[currentIndex].length) {
        clearInterval(stepInterval);
        delTimeout = setTimeout(() => {
          delIntervalCallback();
        }, 2000);
      } else {
        text.textContent += words[currentIndex][counter];
        counter++;
      }
    }

    return () => {
      // Cleanup function to clear intervals when the component is unmounted
      clearInterval(stepInterval);
      clearInterval(delInterval);
      clearTimeout(delTimeout);
    };
  }, []);

  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div id="home">
      <Container>
        <div className="flex  flex-col md:flex-row  justify-between mt-20 text-[#F2F2F2] items-center gap-10">
          {/* left side code */}
          <div className="space-y-3">
            <h4 className="text-2xl md:text-4xl font-bold">Hi I'm </h4>
            <h2 className="text-[#70FF00] font-bold text-3xl md:text-6xl">
              Robiul Hasan
            </h2>
            <div>
              <div
                className="h-[24px] pb-10  font-bold text-xl "
                id="type-it"
              ></div>
            </div>
            <div className="text-[#828282]">
              This serves as my official portfolio website, <br /> designed to
              showcase comprehensive <br /> details and work experience in the
              field of web development.
            </div>

            <button
              onClick={handleDownload}
              className="btn font-bold bg-transparent text-[#70FF00] flex items-center gap-3 border-2  px-3 rounded-md"
            >
              Download Resume
            </button>
          </div>
          {/* right side code */}
          <div>{View}</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
