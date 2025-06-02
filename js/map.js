document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map').setView([48.63025115214606, -0.6628731897150845], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const festivals = {
        "Francofolies, La Rochelle": [46.155286877974554, -1.157270462871814],
        "Garorock, Marmande": [44.489962811045956, 0.16464310516195382],
        "Burdigala Fest, Bordeaux": [44.83879938988657, -0.5911211568125361],
        "Initial, Bordeaux": [44.89382970475388, -0.5761740647613016],
        "ODP, Talence": [44.80809096000953, -0.5898247034198687],
        "Balterno, Bègles": [44.79525459548204, -0.5600134782726451],
        "SunSka, Vertheuil": [45.24430221491649, -0.8875177511068462],
        "We Love Green, Paris": [48.82833970667415, 2.433107925643727],
        "Les Vieilles Charrues, Carhaix-Plouguer": [48.27104108005381, -3.5602270941012213],
        "Tomorrowland, Boom": [51.091738788113645, 4.385633381593768]
    };

    for (const [name, coords] of Object.entries(festivals)) {
        L.marker(coords).addTo(map).bindPopup(name);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToMapBtn = document.getElementById("scroll-to-map");
    const festivalMap = document.getElementById("map");

    scrollToMapBtn.addEventListener("click", () => {
        festivalMap.scrollIntoView({ behavior: "smooth" });
    });
});