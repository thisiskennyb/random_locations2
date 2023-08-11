window.onload = () => {
  const baseUrl = "http://127.0.0.1:8000";
  const userContainer = document.querySelector("#userContainer");
  const mapContainer = document.querySelector("#map");

  const doFetch = async (url) => {
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };

  const getLocation = async () => {
    const url = `${baseUrl}/all`;
    const fetchResult = await doFetch(url);
    const locations = fetchResult.locations;
    let randomNum = Math.floor(
      Math.random(locations.length) * locations.length
    );
    // console.log(randomNum)
    createHtmlPerson(locations[randomNum]);
    updateMap(locations[randomNum]);
  };

  const removeUsers = () => {
    while (userContainer.firstChild) {
      userContainer.removeChild(userContainer.firstChild);
    }
  };

  const createHtmlPerson = (location) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    h3.innerText = `id: ${location[0]}`;
    p1.innerText = `lat: ${location[1]}`;
    p2.innerText = `lon: ${location[2]}`;

    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);

    div.className = "item";

    userContainer.appendChild(div);
  };

  const createMap = () => {
    map = L.map("map").setView([0, 0], 13); // Initialize the map instance
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 11,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  };

  const updateMap = (location) => {
    const lat = Number(location[1]);
    const lon = Number(location[2]);
    map.setView([lat, lon], 13);
  };

  createMap();

  listBtn.addEventListener("click", () => {
    removeUsers();
    getLocation();
  });
};
