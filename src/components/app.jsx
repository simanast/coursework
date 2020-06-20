import React, { useRef, useState } from 'react';
import anime from 'animejs';

import Pic1 from './svg/pic1';
import Pic2 from './svg/pic2';
import Pic3 from './svg/pic3';
import Pic4 from './svg/pic4';
import Pic5 from './svg/pic5';

import animationPic1 from '../animation/animation-pic-1';
import animationPic2 from '../animation/animation-pic-2';
import animationPic3 from '../animation/animation-pic-3';
import animationPic4 from '../animation/animation-pic-4';
import animationPic5 from '../animation/animation-pic-5';

import textPic1 from '../text/text-pic-1';
import textPic2 from '../text/text-pic-2';
import textPic3 from '../text/text-pic-3';
import textPic4 from '../text/text-pic-4';
import textPic5 from '../text/text-pic-5';

const helpAnime = (array, setIsDisabled) => {
  setIsDisabled(true);

  const t = anime.timeline({
    easing: 'linear',
    duration: 200,
  });

  let time = 0;
  array.forEach((object) => {
    if (object.duration) time += Number(object.duration);
    else time += 200;
    if (object.delay) time += Number(object.delay);
    t.add(object);
  });

  // use effect?
  setTimeout(() => setIsDisabled(false), time);
};

const App = () => {
  // to one useState
  const [taskIndex, setTaskIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonName, setButtonName] = useState('Следующий шаг');
  const text = useRef(textPic1[0]);
  const counter = useRef(0); // animation counter

  const pics = [<Pic1 />, <Pic2 />, <Pic3 />, <Pic4 />, <Pic5 />]; // picture tasks
  const animations = [animationPic1, animationPic2, animationPic3, animationPic4, animationPic5];
  const texts = [textPic1, textPic2, textPic3, textPic4, textPic5];

  const handleClickNext = () => {
    helpAnime(animations[taskIndex][counter.current], setIsDisabled);
    counter.current = counter.current + 1;
    text.current = text.current + texts[taskIndex][counter.current] + ' ';

    if (counter.current === animations[taskIndex].length - 1) setButtonName('Сначала');
  };

  const handleClickRestart = () => {
    helpAnime(animations[taskIndex][counter.current], setIsDisabled);
    text.current = texts[taskIndex][0] + ' ';
    setButtonName('Следующий шаг');
    counter.current = 0;
  };

  const renderTaskButtons = (num) => {
    const buttons = [];
    for (let i = 0; i < num; i++) {
      buttons.push(
        <li
          className={`button button--navigation ${i === taskIndex ? 'button--active' : ''}`}
          onClick={() => {
            text.current = texts[i][0] + ' ';
            counter.current = 0;
            setIsDisabled(false);
            setButtonName('Следующий шаг');
            setTaskIndex(i);
          }}>
          Задача №{i + 1}
        </li>
      );
    }
    return <ul> {buttons} </ul>;
  };

  return (
    <main className="main">
      <nav className="navigation">
        {renderTaskButtons(pics.length)} {/*ul and li*/}
      </nav>
      <div className="content">
        <div className="task">
          {pics[taskIndex]}
          <button
            className="button--next"
            onClick={buttonName === 'Следующий шаг' ? handleClickNext : handleClickRestart}
            disabled={isDisabled}>
            {buttonName}
          </button>
        </div>

        <p
          className="text"
          // style={taskIndex === 4 ? { width: 'auto' } : { width: '60%' }}
          dangerouslySetInnerHTML={{ __html: text.current }}
        />
      </div>
    </main>
  );
};

export default App;
