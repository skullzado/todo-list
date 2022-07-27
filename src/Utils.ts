const Utils = {
  removeChildren<T extends HTMLElement>(parentEl: T) {
    if (!parentEl) return;
    while (parentEl.firstChild) {
      parentEl.removeChild(parentEl.firstChild);
    }
  },
};

export default Utils;
