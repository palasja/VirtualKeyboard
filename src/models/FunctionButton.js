import Button from './Button';

class FunctionButton extends Button {
  constructor(code, name = code) {
    super(code);
    this.name = name;
  }

  name;
}

export default FunctionButton;
