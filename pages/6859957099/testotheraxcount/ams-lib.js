var startingJson = {
  "form_fields": {
    "name": {
      "label": "Nome",
      "required": "true",
      "classes": "col-lg-4 col-md-6 col-sm-12 mb-2",
      "placeholder": "Nome e Cognome *"
    },
    "phone_number": {
      "label": "Telefono",
      "required": "true",
      "classes": "col-lg-4 col-md-6 col-sm-12 mb-2",
      "placeholder": "Cellulare *"
    },
    "email": {
      "label": "Email",
      "required": "false",
      "classes": "col-lg-4 col-md-6 col-sm-12 mb-2",
      "placeholder": "Email"
    },
    "address": {
      "label": "Indirizzo",
      "required": "false",
      "classes": "col-lg-4 col-md-6 col-sm-12 mb-2",
      "placeholder": "Indirizzo completo"
    },
    "city": {
      "label": "Comune",
      "required": "false",
      "classes": "col-lg-4 col-md-6 col-sm-12 mb-2",
      "placeholder": "Comune"
    },
    "notes": {
      "label": "Note per il corriere",
      "required": "false",
      "classes": "col-sm-12 mb-2",
      "placeholder": "Note per il Corriere",
      "type": "textarea"
    }
  },
  "template": {
    "background": "#FFFFFF",
    "field_border": "#000000",
    "field_color": "#000000",
    "button_color": "#FFFFFF",
    "button_border": "#25D366",
    "button_background": "#25D366"
  },
  "submit": {
    "label": "ORDINA ORA!",
    "icon": ""
  },
  "redirect_url": (function() {
    const url = new URL(window.location.href);
    url.pathname = url.pathname.replace(/\/$/, "") + "/thankyou/";
    return url.toString();
  })()
};

$(document).ready(function($) {
  $("<style type='text/css'>"
    + "#as_form_container { padding: 10px 0px 10px; background: " + startingJson.template.background + "; }"
    + ".as-error { border: 1px solid red; }"
    + ".as-person-info { color: " + startingJson.template.field_color + "; border: 1px solid " + startingJson.template.field_border + "; }" 
    + "</style>").appendTo("head");

  var htmlResult = "";
  $.each(startingJson.form_fields, function(index, val) {
    var label = val.label;
    if (val.required === "true") {
      label += " <span class=\"mandatory-asterysc\">*</span>";
    }
    htmlResult += "<div class='" + val.classes + "'>";
    htmlResult += "<label for='" + index + "'>" + label + "</label>";
    if (val.type == "textarea") {
      htmlResult += "<textarea class='form-control w-100 as-person-info' style='resize:none; height: 150px;' id='" + index + "' placeholder='" + val.placeholder + "'></textarea>";
    } else {
      htmlResult += "<input type='text' id='" + index + "' class='form-control col-sm-12 rounded as-person-info' placeholder='" + val.placeholder + "'";
      if (val.required === "true") {
        htmlResult += " required />";
      } else {
        htmlResult += " />";
      }
    }
    htmlResult += "</div>";
  });

  htmlResult += "<div id='as_submit_container' class='col-lg-5 col-sm-12'></div>";

  htmlResult += "<div id='as_form_error_message' class='w-100 pt-2 pb-2 mt-2 text-center' style='display:none;background-color:#f9fcbb'>"
    + "Per favore controlla i campi inseriti e riprova."
    + "</div>";

  htmlResult += "<div id='as_generic_error_message' class='w-100 pt-2 pb-2 mt-2 text-center' style='display:none;background-color:#f9fcbb'>"
    + "Errore durante l'invio dei dati."
    + "</div>";

  htmlResult += "<div id='as_500_error_message' class='w-100 pt-2 pb-2 mt-2 text-center' style='display:none;background-color:#ea5252'>"
    + "Errore nell'invio dei dati."
    + "</div>";

  htmlResult += "<button id='as_submit_order_button' type='submit' class='btn btn-info w-100 mt-2' style='background-color:" + startingJson.template.button_background + "; border:1px solid " + startingJson.template.button_border + "; color:" + startingJson.template.button_color + ";'>" + startingJson.submit.label + "</button>";

  $("#as_form_container").append(htmlResult);

  var formSubmitted = 0;
  $("#as_submit_order_button").click(function(e) {
    e.preventDefault();
    $(".as-error").removeClass("as-error");

    if (formSubmitted > 0) {
      $("#as_form_error_message").text("Hai già inviato il form.").show();
      return;
    }

    const nomeCognome = $("#name").val().trim();
    const telefono = $("#phone_number").val().trim();
    const indirizzo = $("#address").val().trim();
    const email = $("#email").val().trim();
    const city = $("#city").val().trim();
    const notes = $("#notes").val().trim();
    const fbPixelId = "000";
    const fbAccessToken = "";
    const prodotto = "Shahs";

    let hasError = false;

    if (nomeCognome === "") {
      $("#name").addClass("as-error");
      hasError = true;
    }

    if (telefono === "" || !/^\+?\d+$/.test(telefono)) {
      $("#phone_number").addClass("as-error");
      hasError = true;
    }

    if (hasError) {
      $("#as_form_error_message").show();
      return;
    } else {
      $("#as_form_error_message").hide();
    }

    const eventId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const now = new Date();
    const pageLang = document.documentElement.lang || navigator.language || 'en';
    const data = now.toLocaleDateString(pageLang);
    const orario = now.toLocaleTimeString(pageLang);
    const dominio = window.location.hostname;
    const userAgent = navigator.userAgent;

    const payload = {
      fb_pixel_id: fbPixelId,
      fb_access_token: fbAccessToken,
      event_name: "Lead",
      event_id: eventId,
      nomeCognome,
      telefono,
      indirizzo,
      email,
      city,
      notes,
      data,
      orario,
      dominio,
      userAgent,
      prodotto,
      custom_data: { currency: "EUR", value: 1.0, content_name: prodotto }
    };

    fetch("https://hook.us2.make.com/vj67yj68vn7ui2d65zavc0dt58xgeuh7", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        $("#as_generic_error_message").text("Errore durante l'invio dei dati.").show();
        throw new Error('Errore invio webhook');
      }
      formSubmitted++;
      const params = new URLSearchParams({
        event_id: eventId,
        nomeCognome: encodeURIComponent(nomeCognome),
        telefono: encodeURIComponent(telefono),
        email: encodeURIComponent(email || ''),
        city: encodeURIComponent(city || ''),
        indirizzo: encodeURIComponent(indirizzo || ''),
        notes: encodeURIComponent(notes || ''),
        prodotto: encodeURIComponent(prodotto)
      });
      window.location.href = startingJson.redirect_url + '?' + params.toString();
    })
    .catch(error => {
      $("#as_500_error_message").show();
      console.error("Errore invio webhook:", error);
    });
  });
});