const animate = () => {
  const cardContainer = document.querySelector(".card-container");
  const card = document.querySelector("#card");
  cardContainer.style.perspective = `1500px`;
  card.addEventListener("mousemove", function (clickEvent) {
    console.log(clickEvent);
    cardContainer.style.perspectiveOrigin = "top right";
    card.style.backgroundColor = `rgb(${clickEvent.layerX}, ${clickEvent.layerY}, 50)`;
    card.style.transform = `rotateY(${
      clickEvent.clientX / 100 + 40
    }deg) rotateX(${clickEvent.clientX / 100 + 40}deg) rotateZ(${
      clickEvent.layerX / 100 + 20
    }deg)`;
  });
};
animate();
