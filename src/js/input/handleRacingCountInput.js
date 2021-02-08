import { VALIDATOR, ERR_MESSAGE } from '../utils/constant.js';
import { startGame } from '../game/startGame.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';

const isValidRacingCount = (racingCount) => {
  if (racingCount < VALIDATOR.MIN_COUNT) {
    alert(ERR_MESSAGE.COUNT_TOO_SMALL);
    return false;
  }
  return true;
};

export const handleRacingCountInput = () => {
  const $racingCountInput = document.querySelector('#racing-count-input');

  const racingCount = $racingCountInput.value;
  if (!isValidRacingCount(racingCount)) {
    return ($racingCountInput.value = '');
  }

  toggleVisibility('$gameProcessSection');
  startGame(racingCount);
};
