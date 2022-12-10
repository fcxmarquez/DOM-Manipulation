const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const action = (entry) => {
  console.log("Loading image");

  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (img) => {
  observer.observe(img);
};
