/*!
=========================================================
* Mawira Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// load the NewsApi on News section
const wrapContainer = document.getElementById("news");

const container = document.createElement("div");
container.setAttribute("class", "container");

wrapContainer.appendChild(container);

var request = new XMLHttpRequest();

request.open("GET", "https://news-api-request.vercel.app/news", true);

request.setRequestHeader(
    "Access-Control-Allow-Origin",
    "https://localhost:4000"
);

const api_url = "https://news-api-request.vercel.app/news";

request.onload = async function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    const newsContainer = document.createElement("div");
    newsContainer.setAttribute("class", "container");

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "mb-5 pb-4");
    h2.textContent = "Top ";

    const span = document.createElement("span");
    span.setAttribute("class", "text-danger");
    span.textContent = "News";

    const row = document.createElement("row");
    row.setAttribute("class", "row");

    container.appendChild(newsContainer);
    newsContainer.appendChild(h2);
    h2.appendChild(span);
    newsContainer.appendChild(row);

    if (request.status >= 200 && request.status < 400) {
        data.articles.forEach((news) => {
            const blogCard = document.createElement("div");
            blogCard.setAttribute("class", "blog-card");

            const imgHolder = document.createElement("div");
            imgHolder.setAttribute("class", "img-holder");

            const img = document.createElement("img");
            img.src = news.urlToImage;
            img.alt = news.url;

            const contentHolder = document.createElement("div");
            contentHolder.setAttribute("class", "content-holder");

            const h6 = document.createElement("h6");
            h6.setAttribute("class", "title");
            h6.textContent = news.title;

            const sourceText = document.createElement("p");
            sourceText.setAttribute("class", "post-details");

            const sourceTag = document.createElement("a");
            sourceTag.href = "";
            sourceTag.textContent = `By: ${news.source.name}`;

            const detailsText = document.createElement("p");
            detailsText.textContent = news.description;

            const content = document.createElement("p");
            content.textContent = news.content;

            row.appendChild(blogCard);
            blogCard.appendChild(imgHolder);
            imgHolder.appendChild(img);
            blogCard.appendChild(contentHolder);
            contentHolder.appendChild(h6);
            contentHolder.appendChild(sourceText);
            sourceText.appendChild(sourceTag);
            contentHolder.appendChild(detailsText);
            contentHolder.appendChild(content);
        });
    } else {
        console.log("error");
    }
};

request.send();

// smooth scroll
$(document).ready(function() {
    $(".navbar .nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                700,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// portfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
            filter: ".new",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1,
            },
        }),
        $(".filters a").click(function() {
            $(".filters .active").removeClass("active"), $(this).addClass("active");
            var i = $(this).attr("data-filter");
            return (
                t.isotope({
                    filter: i,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1,
                    },
                }), !1
            );
        });
});

// google maps
function initMap() {
    // pension towers loita str
    const pensionTowers = {
        lat: -1.284,
        lng: 36.818
    };
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById("map"), {
        center: pensionTowers,
        zoom: 15,
        scrollwheel: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#242f3e"
                }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#242f3e"
                }]
            },
            {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#746855"
                }]
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#263c3f"
                }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#6b9a76"
                }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#38414e"
                }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#212a37"
                }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9ca5b3"
                }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#746855"
                }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#1f2835"
                }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#f3d19c"
                }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#2f3948"
                }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#d59563"
                }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#17263c"
                }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#515c6d"
                }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#17263c"
                }],
            },
        ],
    });

    const marker = new google.maps.Marker({
        position: pensionTowers,
        map: map,
    });
}