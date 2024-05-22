function toggleSeasonOptions() {
    var contentType = document.getElementById("content-type").value;
    var seasonSelect = document.getElementById("season-select");
    if (contentType === "serie") {
        seasonSelect.style.display = "block";
    } else {
        seasonSelect.style.display = "none";
    }
}

function showOtherReasonInput() {
    var reason = document.getElementById("reason").value;
    var otherReasonInput = document.getElementById("other-reason-input");
    if (reason === "otro") {
        otherReasonInput.style.display = "block";
    } else {
        otherReasonInput.style.display = "none";
    }
}

function sendReport(event) {
    event.preventDefault();

    var contentType = document.getElementById("content-type").value;
    var reason = document.getElementById("reason").value;
    var otherReason = document.getElementById("other-reason").value;
    var contentName = document.getElementById("content-name").value;
    var season = document.getElementById("season").value;

    // Si el motivo seleccionado es "otro", usa el motivo especificado por el usuario
    if (reason === "otro") {
        reason = otherReason;
    }

    var templateParams = {
        content_type: contentType,
        reason: reason,
        content_name: contentName,
        season: contentType === 'serie' ? season : 'N/A'
    };

    emailjs.send('service_frjbvcd', 'template_h6la77l', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage();
        }, function(error) {
            console.log('FAILED...', error);
        });
}

function showMessage() {
    document.getElementById("report-form").style.display = "none";
    document.getElementById("thank-you-message").style.display = "block";
}
