class Button {
  constructor(code) {
    this.code = code;
  }
  code;
}
class FunctionButton extends Button {
  constructor(code, name = code) {
    super(code);
    this.name = name;
  }
  name;
}

class KeyButton extends Button {
  constructor(
    code,
    val,
    shiftVal,
    belVal,
    belShiftVal,
    isLetter = false,
    isBelLetter = false
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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = [
    new KeyButton("Backquote", "`", "~", "ё", "Ё", true, true),
    new KeyButton("Digit1", "1", "!", "1", "!"),
    new KeyButton("Digit2", "2", "@", "2", '"'),
    new KeyButton("Digit3", "3", "#", "3", "№"),
    new KeyButton("Digit4", "4", "$", "4", ";"),
    new KeyButton("Digit5", "5", "%", "5", "%"),
    new KeyButton("Digit6", "6", "^", "6", ":"),
    new KeyButton("Digit7", "7", "&", "7", "?"),
    new KeyButton("Digit8", "8", "*", "8", "*"),
    new KeyButton("Digit9", "9", "(", "9", "("),
    new KeyButton("Digit0", "0", ")", "0", ")"),
    new KeyButton("Minus", "-", "_", "-", "_"),
    new KeyButton("Equal", "=", "+", "=", "+"),
    new FunctionButton("Backspace"),
    new FunctionButton("Tab"),
    new KeyButton("KeyQ", "q", "Q", "й", "Й", true, true),
    new KeyButton("KeyW", "w", "W", "ц", "Ц", true, true),
    new KeyButton("KeyE", "e", "E", "у", "К", true, true),
    new KeyButton("KeyR", "r", "R", "к", "У", true, true),
    new KeyButton("KeyT", "t", "T", "е", "Е", true, true),
    new KeyButton("KeyY", "y", "Y", "н", "Н", true, true),
    new KeyButton("KeyU", "u", "U", "г", "Г", true, true),
    new KeyButton("KeyI", "i", "I", "ш", "Ш", true, true),
    new KeyButton("KeyO", "o", "O", "ў", "Ў", true, true),
    new KeyButton("KeyP", "p", "P", "з", "З", true, true),
    new KeyButton("BracketLeft", "[", "{", "х", "Х", false, true),
    new KeyButton("BracketRight", "]", "}", "ъ", "Ъ", false, true),
    new FunctionButton("Delete"),
    new FunctionButton("CapsLock", "Caps"),
    new KeyButton("KeyA", "a", "A", "ф", "Ф", true, true),
    new KeyButton("KeyS", "s", "S", "ы", "Ы", true, true),
    new KeyButton("KeyD", "d", "D", "в", "В", true, true),
    new KeyButton("KeyF", "f", "F", "а", "А", true, true),
    new KeyButton("KeyG", "g", "G", "п", "П", true, true),
    new KeyButton("KeyH", "h", "H", "р", "Р", true, true),
    new KeyButton("KeyJ", "j", "J", "о", "О", true, true),
    new KeyButton("KeyK", "k", "K", "л", "Л", true, true),
    new KeyButton("KeyL", "l", "L", "д", "Д", true, true),
    new KeyButton("Semicolon", ";", ":", "ж", "Ж", false, true),
    new KeyButton("Quote", "'", '"', "э", "Э", false, true),
    new KeyButton("Backslash", "\\", "|", "\\", "/"),
    new FunctionButton("Enter"),
    new FunctionButton("ShiftLeft", "Shift"),
    new KeyButton("KeyZ", "z", "Z", "я", "Я", true, true),
    new KeyButton("KeyX", "x", "X", "ч", "Ч", true, true),
    new KeyButton("KeyC", "c", "C", "с", "С", true, true),
    new KeyButton("KeyV", "v", "V", "м", "М", true, true),
    new KeyButton("KeyB", "b", "B", "і", "І", true, true),
    new KeyButton("KeyN", "n", "N", "т", "Т", true, true),
    new KeyButton("KeyM", "m", "M", "ь", "Ь", true, true),
    new KeyButton("Comma", ",", "<", "б", "Б", false, true),
    new KeyButton("Period", ".", ">", "ю", "Ю", false, true),
    new KeyButton("Slash", "/", "?", ".", ","),
    new KeyButton("ArrowUp", "▲", "▲", "▲", "▲"),
    new FunctionButton("ShiftRight", "Shift"),
    new FunctionButton("ControlLeft", "Ctrl"),
    new FunctionButton("MetaLeft", "Win"),
    new FunctionButton("AltLeft", "Alt"),
    new KeyButton("Space", " ", " ", " ", " "),
    new FunctionButton("AltRight", "Alt"),
    new KeyButton("ArrowLeft", "◄", "◄", "◄", "◄"),
    new KeyButton("ArrowDown", "▼", "▼", "▼", "▼"),
    new KeyButton("ArrowRight", "►", "►", "►", "►"),
    new FunctionButton("ControlRight", "Ctrl"),
  ];
  function getLang() {
    if (window.localStorage.getItem("eng") === null) return true;
    return window.localStorage.getItem("eng") == "true" ? true : false;
  }
  let eng = getLang();
  console.log(eng);
  let caps = false;
  let lastPress = null;
  const btnValues = new Map();

  const keyboard = document.createElement("div");
  keyboard.id = "keyboard";
  keyboard.classList.add("keyboard");

  buttons.forEach((btn) => {
    btnValues.set(btn.code, btn);
    keyboard.append(getBtn(btn));
  });
  const textArea = document.createElement("textarea");
  textArea.id = "textarea";
  document.querySelector("body").append(textArea);
  document.querySelector("body").append(keyboard);

  document.addEventListener("keydown", keyboardPress);
  document.addEventListener("keydown", keyboardFunction);
  document.addEventListener("keydown", changeLang);
  document.addEventListener("keyup", keyboardUp);

  keyboard.addEventListener("mousedown", keyboardPress);
  keyboard.addEventListener("mousedown", keyboardFunction);
  keyboard.addEventListener("mouseup", keyboardUp);

  function getBtn(btnProp) {
    const { code } = btnProp;
    const btn = document.createElement("button");
    btn.setAttribute("data-code", code);
    btn.classList.add("btn");
    if (btnProp instanceof KeyButton) {
      if (eng) {
        btn.innerHTML = btnProp.val;
      } else {
        btn.innerHTML = btnProp.belVal;
      }
    } else {
      btn.innerHTML = btnProp.name;
    }
    return btn;
  }
  function keyboardPress(ev) {
    ev.preventDefault();
    const code = ev.type === "keydown" ? ev.code : ev.target.dataset.code;
    const btn = document.querySelector(`[data-code=${code}]`);
    if (btn != undefined && code !== "CapsLock") {
      lastPress = btn;
      btn.classList.add("press");
      if (btnValues.get(code) instanceof KeyButton) printChar(btn.innerHTML);
    }
  }
  function keyboardUp(ev) {
    if (ev.type === "keyup") {
      const btn = document.querySelector(`[data-code=${ev.code}]`);
      if (btn != undefined && ev.code !== "CapsLock")
        btn.classList.remove("press");
      if (ev.code === "ShiftRight" || ev.code === "ShiftLeft") siftCaps(false);
    } else {
      if (lastPress !== null) {
        lastPress.classList.remove("press");
        if (
          lastPress.dataset.code === "ShiftRight" ||
          lastPress.dataset.code === "ShiftLeft"
        )
          siftCaps(false);
        lastPress = null;
      }
    }
  }
  function changeLang(ev) {
    if (ev.ctrlKey && ev.altKey) {
      eng = !eng;
      window.localStorage.setItem("eng", eng);
      siftCaps(false);
    }
  }
  function keyboardFunction(ev) {
    let ta = document.querySelector("textarea");
    let ts = ta.selectionStart;
    const code = ev.type === "keydown" ? ev.code : ev.target.dataset.code;
    switch (code) {
      case "Enter":
        printChar("\n");
        break;
      case "Tab":
        printChar("\t");
        break;
      case "Backspace":
        if (ta.selectionStart == 0) return;
        ta.value =
          ta.value.slice(0, ta.selectionStart - 1) +
          ta.value.slice(ta.selectionStart);
        ta.selectionStart = ts - 1;
        ta.selectionEnd = ts - 1;
        break;
      case "Delete":
        if (ta.selectionStart == ta.value.length) return;
        ta.value =
          ta.value.slice(0, ta.selectionStart) +
          ta.value.slice(ta.selectionStart + 1);
        ta.selectionStart = ts;
        ta.selectionEnd = ts;
        break;
      case "CapsLock":
        caps = !caps;
        const capsBtn = document.querySelector(`[data-code=CapsLock]`);
        caps
          ? capsBtn.classList.add("press")
          : capsBtn.classList.remove("press");
        siftCaps(false);
        break;
      case "ShiftRight":
        siftCaps(true);
        break;
      case "ShiftLeft":
        siftCaps(true);
        break;
      default:
        break;
    }
  }
  function printChar(char) {
    const ta = document.querySelector("textarea");
    const ts = ta.selectionStart;
    ta.value = `${ta.value.slice(0, ta.selectionStart)}${char}${ta.value.slice(
      ta.selectionStart
    )}`;
    ta.selectionStart = ts + 1;
    ta.selectionEnd = ts + 1;
  }
  function siftCaps(isShift) {
    if (isShift == false && caps == false) {
      [...document.querySelectorAll(".btn")].forEach((btn) => {
        let btnFromMap = btnValues.get(btn.dataset.code);
        if (btnFromMap instanceof KeyButton)
          btn.innerHTML = eng ? btnFromMap.val : btnFromMap.belVal;
      });
    } else if (isShift == true && caps == false) {
      [...document.querySelectorAll(".btn")].forEach((btn) => {
        let btnFromMap = btnValues.get(btn.dataset.code);
        if (btnFromMap instanceof KeyButton)
          btn.innerHTML = eng ? btnFromMap.shiftVal : btnFromMap.belShiftVal;
      });
    } else if (isShift == false && caps == true) {
      eng
        ? [...document.querySelectorAll(".btn")].forEach((btn) => {
            let btnFromMap = btnValues.get(btn.dataset.code);
            if (btnFromMap.isLetter) {
              btn.innerHTML = btnFromMap.shiftVal;
            } else if (
              btnFromMap instanceof KeyButton &&
              !btnFromMap.isLetter
            ) {
              btn.innerHTML = btnFromMap.val;
            }
          })
        : [...document.querySelectorAll(".btn")].forEach((btn) => {
            let btnFromMap = btnValues.get(btn.dataset.code);
            if (btnFromMap.isBelLetter) {
              btn.innerHTML = btnFromMap.belShiftVal;
            } else if (
              btnFromMap instanceof KeyButton &&
              !btnFromMap.isBelLetter
            ) {
              btn.innerHTML = btnFromMap.belVal;
            }
          });
    } else if (isShift == true && caps == true) {
      eng
        ? [...document.querySelectorAll(".btn")].forEach((btn) => {
            let btnFromMap = btnValues.get(btn.dataset.code);
            if (btnFromMap.isLetter) {
              btn.innerHTML = btnFromMap.val;
            } else if (
              btnFromMap instanceof KeyButton &&
              !btnFromMap.isLetter
            ) {
              btn.innerHTML = btnFromMap.shiftVal;
            }
          })
        : [...document.querySelectorAll(".btn")].forEach((btn) => {
            let btnFromMap = btnValues.get(btn.dataset.code);
            if (btnFromMap.isLetter) {
              btn.innerHTML = btnFromMap.belVal;
            } else if (
              btnFromMap instanceof KeyButton &&
              !btnFromMap.isBelLetter
            ) {
              btn.innerHTML = btnFromMap.belShiftVal;
            }
          });
    }
  }
});
