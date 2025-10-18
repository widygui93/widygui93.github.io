function konsultasi() {
	window.open('https://wa.me/6283175778119?text=Halo, saya ingin konsultasi tentang jasa pembuatan website landing page ataupun pembuatan sistem terkait bisnis saya','_blank','noopener,noreferrer')
}

var map = L.map('map').setView([-6.24194921085695, 106.62870398825801], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);