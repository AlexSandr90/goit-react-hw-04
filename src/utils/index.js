export const scrolledImages = () => {
  const timeout = setTimeout(() => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
    clearTimeout(timeout);
  }, 1000);
};
