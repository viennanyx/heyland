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

  // Funzione per generare un event_id unico
  function generateEventId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  // Funzione per inviare eventi alla CAPI con retry
  async function sendCapiEvent(eventName, customData = {}, retries = 3, delay = 1000) {
    const fbPixelId = "618827440995521";
    const fbAccessToken = "";
    if (!fbAccessToken) {
      console.warn("No fb_access_token provided, skipping CAPI event");
      return;
    }

    const payload = {
      fb_pixel_id: fbPixelId,
      fb_access_token: fbAccessToken,
      event_name: eventName,
      event_id: generateEventId(),
      nomeCognome: $("#name").val()?.trim() || "",
      telefono: $("#phone_number").val()?.trim() || "",
      email: $("#email").val()?.trim() || "",
      city: $("#city").val()?.trim() || "",
      dominio: window.location.hostname,
      userAgent: navigator.userAgent,
      prodotto: "pantaloni antipiega uomo",
      custom_data: customData,
      test_event_code: "TEST92713"
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch("https://capi-server-huerqqfk4-viennanyxs-projects.vercel.app/capi", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(payload),
          mode: "cors",
          credentials: "include"
        });

        if (!response.ok) {
          throw new Error(`CAPI request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`CAPI event '${eventName}' sent successfully (attempt ${attempt}):`, data);
        return;
      } catch (error) {
        console.error(`Errore invio CAPI (attempt ${attempt}/${retries}):`, error);
        if (attempt < retries) {
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2; // Exponential backoff
        } else {
          console.error(`Failed to send CAPI event '${eventName}' after ${retries} attempts`);
          // Fallback: Track client-side
          if (fbPixelId !== '000' && typeof fbq !== 'undefined') {
            fbq('track', eventName, customData, { eventID: payload.event_id });
            console.warn(`Fallback: Tracked ${eventName} client-side due to CAPI failure`);
          }
        }
      }
    }
  }

  // Traccia PageView e ViewContent con deduplicazione
  if ("618827440995521" !== '000' && typeof fbq !== 'undefined') {
    const eventId = generateEventId();
    fbq('track', 'PageView', {}, { eventID: eventId });
    setTimeout(() => {
      const viewContentId = generateEventId();
      fbq('track', 'ViewContent', { value: 80, currency: 'EUR' }, { eventID: viewContentId });
      sendCapiEvent('ViewContent', { value: 80, currency: 'EUR' });
    }, 5000);
  }

  // Traccia clic sui bottoni
  $(".btn_price, .special_link").click(function() {
    if ("618827440995521" !== '000' && typeof fbq !== 'undefined') {
      const eventId = generateEventId();
      fbq('trackCustom', 'ButtonClick', { button: $(this).text() }, { eventID: eventId });
      sendCapiEvent('ButtonClick', { button: $(this).text() });
    }
  });

  $("#as_submit_order_button").click(function(e) {
    e.preventDefault();
    $(".as-error").removeClass("as-error");

    const nomeCognome = $("#name").val().trim();
    const telefono = $("#phone_number").val().trim();
    const indirizzo = $("#address").val().trim();
    const email = $("#email").val().trim();
    const city = $("#city").val().trim();
    const notes = $("#notes").val().trim();
    const fbPixelId = "618827440995521";
    const fbAccessToken = "";
    const prodotto = "pantaloni antipiega uomo";

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

    const eventId = generateEventId();
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

    // Traccia Lead con Pixel
    if (fbPixelId !== '000' && typeof fbq !== 'undefined') {
      fbq('track', 'Lead', { currency: 'EUR', value: 1.0, content_name: prodotto }, { eventID: eventId });
    }

    // Invia al webhook originale
    fetch("https://hook.us2.make.com/horx0b97m76flzvx2ke9m2lspf55wfn9", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        $("#as_generic_error_message").text("Errore durante l'invio dei dati.").show();
        throw new Error('Errore invio webhook');
      }
      // Invia alla CAPI se c'è un Access Token
      if (fbAccessToken) {
        sendCapiEvent("Lead", { currency: "EUR", value: 1.0, content_name: prodotto });
      }
      window.location.href = startingJson.redirect_url + '?event_id=' + encodeURIComponent(eventId);
    })
    .catch(error => {
      $("#as_500_error_message").show();
      console.error("Errore invio webhook:", error);
    });
  });


});