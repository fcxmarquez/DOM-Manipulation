const maximum = 122,
  minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum));

const createImageNode = () => {
  const imageContainer = document.createElement("div");
  imageContainer.className = "p-4";

  const image = document.createElement("img");
  image.src = `https://randomfox.ca/images/${random()}.jpg`;
  image.alt = "fox";
  image.width = 320;
  image.className = "mx-auto";

  imageContainer.appendChild(image);

  return imageContainer;
};

const container = document.getElementById("images");
const newImage = createImageNode();

const addButton = document.querySelector("button");
const addImage = () => {
  const newImage = createImageNode();
  container.appendChild(newImage);
};
addButton.addEventListener("click", addImage);

container.appendChild(newImage);
