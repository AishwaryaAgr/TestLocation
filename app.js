// Try HTML5 geolocation.
const test = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            fetch('https://kfxgwg1uxj.execute-api.ap-south-1.amazonaws.com/default/LocationTest-API-MQTT',{
                method: 'PUT',
                body: JSON.stringify(pos),
                headers: { 'Content-Type': 'application/json' },
            }).then((item)=> console.log(item))
        });
    } else {
        // Browser doesn't support Geolocation
        console.log(error);
    }
    // console.log("object")
}