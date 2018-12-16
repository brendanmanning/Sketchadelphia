var starSelected = 0;

function submitRating() {

    fetch('https://ip0edi2ra8.execute-api.us-east-1.amazonaws.com/default/sketchadelphiaRatingSubmitted?rating=' + starSelected + "&uid=" + randomstr(25) + "&campaign=" + getUrlVar("campaign"), {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (myjson) {
            json = myjson;

            if (json['success']) {
                M.toast({html: 'Thanks for the feedback!'})
            } else {
                M.toast({html: 'Thank you for your feedback!'})
            }
        }).catch(function () {
            M.toast({html: 'Thank you for your feedback!'})
        });
}

function hoverStar(i) {

    starSelected = i;
    document.getElementById("rating-submit-button").disabled = "";

    for(var n = 1; n <= i; n++) {
        var element = document.getElementById("rating-star-" + n);
        element.innerHTML = "<i class='material-icons' style='font-size: 36px;'>star</i>";
    }
    for(var n = i + 1; n <= 5; n++) {
        var element = document.getElementById("rating-star-" + n);
        element.innerHTML = "<i class='material-icons' style='font-size: 36px;'>star_border</i>";
    }
}

function noHover() {

    starSelected = 0;
    document.getElementById("rating-submit-button").disabled = "disabled";


    for(var n = 1; n <= 5; n++) {
        var element = document.getElementById("rating-star-" + n);
        element.innerHTML = "<i class='material-icons' style='font-size: 36px;'>star_border</i>";
    }
}  