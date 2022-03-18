function updateMap()
{
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp =>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            //mark on the map
            new mapboxgl.Marker({
                draggable: false
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
            
        });
    })
}

updateMap();