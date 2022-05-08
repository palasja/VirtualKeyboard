import Button from './Button';

class KeyButton extends Button {
  constructor(
    code,
    val,
    shiftVal,
    belVal,
    belShiftVal,
    isLetter = false,
    isBelLetter = false,
  ) {
    super(code);
    this.val = val;
    this.belVal = belVal;
    this.shiftVal = shiftVal;
    this.belShiftVal = belShiftVal;
    this.isLetter = isLetter;
    this.isBelLetter = isBelLetter;
  }

  val;

  shiftVal;

  belVal;

  belShiftVal;

  isLetter;

  isBelLetter;
}

export default KeyButton;
