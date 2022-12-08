/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const formatPrice = (price) => {
  const formatedPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return formatedPrice;
};

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

appNode.addEventListener("click", (e) => {
  if (e.target.nodeName === "H2") {
    window.alert("Hello");
  }
}); // Instead of add an addEventListener to each element, we can add it to the parent and then check the target

//web api
(async () => {
  const response = await fetch(`${baseUrl}/api/avo`);
  const responseJson = await response.json();
  const allItems = [];

  responseJson.data.forEach((item) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("div");

    image.src = `${baseUrl}${item.image}`;
    title.textContent = item.name;
    title.className = "text-xl font-bold";
    price.textContent = formatPrice(item.price);
    container.append(image, title, price);

    allItems.push(container);
  });

  appNode.append(...allItems);
})();
