let planetTemplate = "<div id='$planetId'><a href='$link.html'></a></div>"

$(function() {
    createPlanet('neptune', 20000, 700, 32, "images/info/planets/neptune.png");
    createPlanet('uranus', 18000, 630, 40, "images/info/planets/uranus.png");
    createPlanet('saturn', 15000, 520, 80, "images/info/planets/saturn.png");
    createPlanet('jupiter', 14000, 400, 60, "images/info/planets/jupiter.png");
    createPlanet('mars', 7000, 340, 15, "images/info/planets/mars.webp");
    createPlanet('earth', 6000, 290, 25, "images/info/planets/earth.webp");
    createPlanet('venus', 5000, 240, 20, "images/info/planets/venus.png");
    createPlanet('mercury', 3000, 200, 10, "images/info/planets/mercury.png");
})

function createPlanet(planet, time, orbitRadius, planetRadius, imageLink) {
    $('.menu').append(planetTemplate
        .replace('$planetId', planet)
        .replace('$link', planet));
    $('#' + planet).css({
        top: 'calc(50% - ' + orbitRadius + 'px)',
        left: 'calc(50% - ' + orbitRadius + 'px)',
        padding: orbitRadius
    });
    $('#' + planet + ' > a').css({
        padding: planetRadius,
        right: 'calc(100% - ' + planetRadius + 'px)',
        backgroundImage: 'url("' + imageLink + '")',
        transformOrigin: 'calc(100% + ' + (orbitRadius - planetRadius) + 'px)',
        transition: 'transform ' + time/1000 + 's linear'
    });
    setTimeout(() => rotatePlanet(planet, time), 1);
}

function rotatePlanet(planet, time) {
    let rotate = 180;
    $('#' + planet + ' > a').css({
        transform: 'rotate(' + rotate + 'deg)'
    });
    rotate += 180;
    setInterval(() => {
        $('#' + planet + ' > a').css({
            transform: 'rotate(' + rotate + 'deg)'
        });
        rotate += 180;
    }, time);
}