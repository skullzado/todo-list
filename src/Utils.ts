const Utils = {
  removeChildren<T extends HTMLElement>(parentEl: T) {
    if (!parentEl) return;
    while (parentEl.firstChild) {
      parentEl.removeChild(parentEl.firstChild);
    }
  },
  trimAndCapitalize(str: string): string {
    return (str.charAt(0).toUpperCase() + str.slice(1, str.length)).trim();
  },
};

export default Utils;
