var startingJson = JSON.parse(atob('eyJmb3JtX2ZpZWxkcyI6eyJuYW1lIjp7ImxhYmVsIjoiTm9tZSIsInJlcXVpcmVkIjoidHJ1ZSIsImNsYXNzZXMiOiJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tMTIgbWItMiIsInBsYWNlaG9sZGVyIjoiTm9tZSBlIENvZ25vbWUgKiJ9LCJwaG9uZV9udW1iZXIiOnsibGFiZWwiOiJUZWxlZm9ubyIsInJlcXVpcmVkIjoidHJ1ZSIsImNsYXNzZXMiOiJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tMTIgbWItMiIsInBsYWNlaG9sZGVyIjoiQ2VsbHVsYXJlICoifSwiZW1haWwiOnsibGFiZWwiOiJFbWFpbCIsInJlcXVpcmVkIjoiZmFsc2UiLCJjbGFzc2VzIjoiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIG1iLTIiLCJwbGFjZWhvbGRlciI6IkVtYWlsIn0sImFkZHJlc3MiOnsibGFiZWwiOiJJbmRpcml6em8iLCJyZXF1aXJlZCI6InRydWUiLCJjbGFzc2VzIjoiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIG1iLTIiLCJwbGFjZWhvbGRlciI6IkluZGlyaXp6byBjb21wbGV0byAqIn0sImNpdHkiOnsibGFiZWwiOiJDb211bmUiLCJyZXF1aXJlZCI6ImZhbHNlIiwiY2xhc3NlcyI6ImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBtYi0yIiwicGxhY2Vob2xkZXIiOiJDb211bmUgKiJ9LCJub3RlcyI6eyJsYWJlbCI6Ik5vdGUgcGVyIGlsIGNvcnJpZXJlIiwicmVxdWlyZWQiOiJmYWxzZSIsImNsYXNzZXMiOiJjb2wtc20tMTIgbWItMiIsInBsYWNlaG9sZGVyIjoiTm9tZSBzdWwgY2l0b2Zvbm8gZWQgYWx0cmUgTm90ZSBwZXIgaWwgQ29ycmllcmUiLCJ0eXBlIjoidGV4dGFyZWEifX0sInZhcmlhdGlvbiI6IiIsInF1YW50aXRpZXMiOlt7Im5hbWUiOiJCUiBWSURFTyBTTUFSVCBMQU1QIiwiaW1hZ2UiOiIiLCJxdWFudGl0eSI6IjIiLCJwcmljZSI6IjU5In1dLCJleHRyYXNfbGFiZWwiOiIiLCJwYXltZW50X21ldGhvZCI6W3sibmFtZSI6IlNwZXNlIiwicHJpY2UiOiI4IiwiaW1hZ2UiOiIiLCJkZXNjcmlwdGlvbiI6IiIsInJlZGlyZWN0IjoiZmFsc2UifV0sInRlbXBsYXRlIjp7ImJhY2tncm91bmQiOiIjRkZGRkZGIiwiZmllbGRfYm9yZGVyIjoiIzAwMDAwMCIsImZpZWxkX2NvbG9yIjoiIzAwMDAwMCIsImJ1dHRvbl9jb2xvciI6IiNGRkZGRkYiLCJidXR0b25fYm9yZGVyIjoiIzI1RDM2NiIsImJ1dHRvbl9iYWNrZ3JvdW5kIjoiIzI1RDM2NiIsImhhbmRsaW5nX2Nvc3RzX2JhY2tncm91bmQiOiIjRjJGMkYyIiwiZXh0cmFfY29zdHNfYmFja2dyb3VuZCI6IiNGRkZGRkYiLCJzaGlwcGluZ19jb3N0c19iYWNrZ3JvdW5kIjoiI0ZGRkZGRiJ9LCJzdWJtaXQiOnsibGFiZWwiOiJPUkRJTkEgT1JBISIsImljb24iOiIifSwiY291cG9ucyI6IiIsInJlZGlyZWN0X3VybCI6Imh0dHBzOlwvXC9vZmZlcnRlLXByb2RvdHRpLWNhc2EuaXRcL3NtYXJ0bGFtcFwvZ3JhemllX29yZGluZS5odG1sIn0='));
var langObj = JSON.parse(atob('eyJjdXJyZW5jeSI6IiYjODM2NDsiLCJwYXltZW50X21ldGhvZCI6Ik1ldG9kbyBkaSBQYWdhbWVudG8iLCJleHRyYV9zdWJ0b3RhbCI6IlNwZXNlIiwiY291cG9uX3N1YnRvdGFsIjoiU2NvbnRvIiwicHJvZHVjdF9zdWJ0b3RhbCI6IlRvdGFsZSBQcm9kb3R0aSIsInRvdGFsIjoiVG90YWxlIiwiY2hvb3NlX3ZhcmlhdGlvbiI6IlNjZWdsaSB1bmEgdGFnbGlhIiwiY2hlY2tfaW5wdXRzX2FuZF9yZXRyeSI6IkNvbnRyb2xsYSBpIGNhbXBpIGUgcmlwcm92YSIsImVycm9yX3doaWxlX3NlbmRpbmdfZGF0YSI6IkVycm9yZSBpbiBmYXNlIGRpIGludmlvIG9yZGluZSIsImZyZWVfY29zdCI6IkdyYXR1aXRvIiwiZXJyb3Jfbm9fcHJpdmFjeSI6IkF0dGVuemlvbmUhIEFjY2V0dGFyZSBsYSBQcml2YWN5IFBvbGljeSAmIzIzMjsgb2JibGlnYXRvcmlvIiwiaW52YWxpZF9jb3Vwb24iOiJJbCBjb3Vwb24gaW5zZXJpdG8gbm9uICYjMjMyOyB2YWxpZG8uIiwiYXBwbHlfY291cG9uIjoiQXBwbGljYSBDb3Vwb24ifQ=='));

$(document).ready(function($) {
	$(						  
		"<style type='text/css'>"
	  + "#as_form_container { padding: 10px 0px 10px; }"
	  + ".as-error{ border: 1px solid red } "
	  + ".as-person-info { color: " + startingJson.template.field_color + "; border: 1px solid " + startingJson.template.field_border + "; }" 
	  + ".as-quantities:checked ~ label { background: " + startingJson.template.button_background + "20; border: 1px solid " + startingJson.template.button_border + "; }"
	  + ".as-extra:checked ~ label { background: " + startingJson.template.button_background + "20; border: 1px solid " + startingJson.template.button_border + "; }"
	  + ".as-payment:checked ~ label { background: " + startingJson.template.button_background + "20; border: 1px solid " + startingJson.template.button_border + "; }"
	  + "#as_form_container { background: " + startingJson.template.background + "; }"   
	  + "</style>"
	).appendTo("head");
	var htmlResult = "";
	$.each(startingJson.form_fields, function(index, val) {
		var label = val.label;
		if (val.hasOwnProperty("required") && checkBool(val.required)) {
			label += " <span class=\"mandatory-asterysc\">*</span>";
		}
		htmlResult += "<div class='" + val.classes + "'>";
		htmlResult += "<label for='" + index + "'>" + label + "</label>";
		if (val.type == "textarea") {
			htmlResult += "<textarea class='form-control w-100 as-person-info' style='resize:none; height: 150px;' id='" + index + "' placeholder='" + val.placeholder + "'></textarea>";
		} else {
			htmlResult += "<input type='text' id='" + index + "' class='form-control col-sm-12 rounded as-person-info' placeholder='" + val.placeholder + "'";
			if (val.hasOwnProperty("required") && checkBool(val.required)) {
				htmlResult += "required />";
			} else {
				htmlResult += "/>"
			}
		}
		htmlResult += "</div>";
	});
	if (startingJson.hasOwnProperty("quantities") && startingJson.quantities.length > 0) {
		htmlResult += "<div id='as_quantity_container' class='form-group col-sm-12'>"; 
		htmlResult += "<label for='as_quantity_container'>Offerta</label>";
		htmlResult += "<div class='row'>";
		$.each(startingJson.quantities, function(index, val) {
			var checked = "";
			if (index == 0) {
				checked = "checked"
			}
			htmlResult += "<div class='col-md-4 col-12'>"
							+ "<div class='form-check' style='position: relative; padding: 0px;'>"
							+ "<input class='form-check-input as-quantities' style='position: absolute; top: 10px; right: 15px; width: 20px; height: 20px;'" 
							   + "data-name='" + val.name + "'" 
							   + "data-quantity='" + val.quantity + "'"
							   + "type='checkbox' " 
							   + checked 
							   + " id='quantity_checkbox_" + index + "'" 
							   + "value='" + val.price + "'" 
							   + "onchange='toggleSelection(this); fillFormVariation(); calculateSummary();'" 
							+ ">"
							+ "<label class='form-check-label' for='quantity_checkbox_" + index + "' style='display:block; overflow: auto; width: 100%; cursor: pointer; padding: 10px;'>"
							   + (val.image != "" ? "<div style='background-image: url(" + val.image + "); background-size: cover; background-position: center; width: 100%; height: 200px;'></div>" : "") 
						   	   +  "<h4 style='display: block; text-align: right;'>" + val.name + "</h4>"
						   	   +  "<h4 style='display: block; text-align: right;'> " + getLO("currency") + " " + parseFloat(val.price).toFixed(2) + "</h4>" 
					    	+ "</label>"
					    	+ "</div>"
					    + "</div>";
		});
		htmlResult += "</div>";
		htmlResult += "</div>";
		htmlResult += "<div class='as-variation col-sm-12'><div class='row'></div></div>";
	}
	if (startingJson.hasOwnProperty("management_cost")) {
		htmlResult += "<div class='col-sm-12'><div class='row pl-3 pr-3'><div id='as_management_cost_container' " 
						 + "style='background-color: " + startingJson.template.handling_costs_background + ";' " 
						 + "data-price='" + startingJson.management_cost.price + "' " 
						 + "class='" + startingJson.management_cost.classes + "' "
						 + "onload='calculateSummary()'"
					+ ">"
					+ "<span for='as_management_cost_container'>" 
						 + startingJson.management_cost.label 
					     + "(" + getLO("currency") + " " + parseFloat(startingJson.management_cost.price).toFixed(2) + ")"
					+ "</span>";
		htmlResult += "</div></div></div>";
	}
	if (startingJson.hasOwnProperty("extras") && startingJson.extras.length > 0) {
		htmlResult += "<div class='col-sm-12'><div class='row'><div id='as_extras_container' "
						 + "class='form-group col-sm-12 pt-2 pb-2 mb-2' "
						 + "style='background-color: " + startingJson.template.extra_costs_background + ";' "
					+ ">"
					+ "<label for='as_extras_container'>" + startingJson.extras_label + "</label>";
		htmlResult += "<div class='row'>";
		$.each(startingJson.extras, function(index, val) {
			htmlResult += "<div class='col-md-3 col-6'>";
			htmlResult += "<div class='form-check' style='position: relative; padding: 0px;'>";
			htmlResult += "<input class='form-check-input as-extra' type='checkbox' value='" + val.price + "' id='" + val.reference + "' onchange='calculateSummary()' style='position: absolute; top: 10px; left: 35px; width: 20px; height: 20px;'>"
						   + "<label class='form-check-label' for='" + val.reference + "' style='display:block; overflow: auto; width: 100%; cursor: pointer; padding: 10px;'>"
							   + (val.image != "" ? "<div style='background-image: url(" + val.image + "); background-size: cover; background-position: center; width: 100%; height: 120px;'></div>" : "") 
						   	   + "<p style='display: block; text-align: right; font-weight: bold; margin-bottom: 0px;'>" + val.name + "</p>"
						   	   + "<p style='display: block; text-align: right; font-weight: bold;'> " + getLO("currency") + " " + parseFloat(val.price).toFixed(2) + "</p>" 
					       + "</label>";
			htmlResult += "</div>"
						+ "</div>";
		});
		htmlResult += "</div>";
		htmlResult += "</div></div></div>";
	}
	if (startingJson.hasOwnProperty("payment_method") && startingJson.payment_method.length > 0) {
		htmlResult += "<div class='col-sm-12'><div class='row'><div id='as_payment_container' "
						 + "class='form-group col-sm-12 pt-2 pb-2 mb-2 rounded' "
						 + "style='background-color: " + startingJson.template.shipping_costs_background + ";'"
					+ ">"
					+ "<label for='as_payment_container'>" + getLO("payment_method") + "</label>";
		htmlResult += "<ul style='display: block; overflow: auto; width: 100%; padding: 0px'>";
		$.each(startingJson.payment_method, function(index, val) {
			var checked = "";
			if (index == 0) {
				checked = "checked"
			}
			htmlResult += "<li style='display: block; list-style: none;'>"
							+ "<div class='form-check' style='position: relative; padding: 0px;'>"
							+ "<input class='form-check-input as-payment'"
							   + "style='position: absolute; top: 10px; right: 15px;'" 
							   + "data-name='" + val.name + "'"
							   + "data-redirect='" + val.redirect + "'" 
							   + "type='checkbox'" 
							   + checked 
							   + " id='payment_checkbox_" + index + "'" 
							   + "value='" + val.price + "'" 
							   + "onchange='toggleSelection(this); calculateSummary();'" 
							+ ">"
							+ "<label class='form-check-label' for='payment_checkbox_" + index + "' style='display: block; overflow: auto; width: 100%; cursor: pointer; padding: 10px;'> "
							+ "<div class='row w-100'>"
							   + "<div class='col-md-4 col-3 as-payment-img-container'>" + (val.image != "" ? "<img src='" + val.image + "' style='max-width: 300px; max-height: 40px;' />" : "") + "</div>"
						   	   + "<div class='col-md-4 col-9'>" + val.name
						   	   +  " (" + (parseFloat(val.price) > 0 ? " &euro; " + parseFloat(val.price).toFixed(2) : getLO("free_cost")) + ")" + "</div>"
						   	   +  "<div class='col-md-4 col-12'>" + (val.description != "" ? val.description : "") + "</div>"
						   	+ "</div>"
					    	+ "</label>"
					    	+ "</div>"
					    + "</li>";
		});
		htmlResult += "</ul>";
		htmlResult += "</div></div></div>";
	}
	if (startingJson.hasOwnProperty("privacy")) {
		htmlResult += "<div class='col-sm-12'><div class='row'><div id='as_privacy_container' class='form-group col-sm-12 pt-2 pb-4 mb-2'>"
						+ "<input class='form-check-input as-privacy' " 
							   + "type='checkbox' "
							   + "value='' "
							   + "id='privacy_check' "
							   + "style='margin-left: 0px;'"
						+ ">"
						+ "<label class='form-check-label' for='privacy_check' style='margin-left: 25px;'>"
							   + startingJson.privacy.label
							   + " <a href='" + startingJson.privacy.privacy_url + "'>" + startingJson.privacy.info_label + "</a>"
					    + "</label>"
					+ "</div></div></div>";
	}
	htmlResult += "<div class='col-sm-12'><div class='row'><div id='as_summary_container' class='col-lg-7 col-sm-12'>";
	if (startingJson.hasOwnProperty("coupons") && startingJson.coupons != null && startingJson.coupons != "") {
		htmlResult += "<div class='row mb-1' style='margin-top: -15px;'>"
						+ "<div class='col-12'>"
							+ startingJson.coupons.label
						+ "</div>"
						+ "<div class='col-md-6 mb-1'>"
							+ "<input type='text' class='w-100 form-control' value='' id='as_coupon_value' />"
						+ "</div>"
						+ "<div class='col-md-6 mb-2'>"
							+ "<button id='as_apply_coupon_button' type='button' class='btn btn-info w-100' onclick='applyCoupon()'>" + getLO("apply_coupon") + "</button>"
						+ "</div>"
					+ "</div>";
	}
	htmlResult += "<ol style='list-style: none'>"
				  + "<li class='text-right'><h5 class='as-total-extras'>" + getLO("extra_subtotal") + ": <span id=\"as_subtotal_extra\">-</span></h5></li>"
				  + "<li class='text-right'><h5 class='as-total-product'>" + getLO("product_subtotal") + ": <span id=\"as_subtotal_product\">-</span></h5></li>"
				  + "<li class='text-right' style='display: none;'><h5 class='as-coupon' style=\"margin-bottom: 0px;\">" + getLO("coupon_subtotal") + ": <span id=\"as_coupon\">-</span></h5><small id=\"as_coupon_name\"></small></li>"
				  + "<li class='text-right'><h4 class='as-total'>" + getLO("total") + ": <span id=\"as_total\">-</span></h4></li>"
				+ "</ol>"
				+ "</div>";
	htmlResult += "<div id='as_submit_container' class='col-lg-5 col-sm-12'>";
	htmlResult += "<div id='as_coupon_error_message' "
					 + "class='w-100 pt-2 pb-2 mt-2 text-center' " 
					 + "style='display: none; "
					 		+ "background-color: #ea5252'"
				+ ">" 
				+ getLO("invalid_coupon")
				+ "</div>";
	htmlResult += "<div id='as_form_error_message' "
					 + "class='w-100 pt-2 pb-2 mt-2 text-center' "
					 + "style='display: none; "
					 		+ "background-color: #f9fcbb'"
				 + ">"
				 + getLO("check_inputs_and_retry")
				 + "</div>";
	htmlResult += "<div id='as_generic_error_message' "
					 + "class='w-100 pt-2 pb-2 mt-2 text-center' "
					 + "style='display: none; "
					 		+ "background-color: #f9fcbb'"
				 + ">"
				 + "</div>";
	htmlResult += "<div id='as_500_error_message' "
					 + "class='w-100 pt-2 pb-2 mt-2 text-center' " 
					 + "style='display: none; "
					 		+ "background-color: #ea5252'"
				+ ">" 
				+ getLO("error_while_sending_data")
				+ "</div>";
	htmlResult += "<button id='as_submit_order_button' type='button' class='btn btn-info w-100 mt-2' onclick='formToJSON()' style='background-color: " + startingJson.template.button_background + "; border: 1px solid " + startingJson.template.button_border + "; color: " + startingJson.template.button_color + ";'>" + startingJson.submit.label  + "</button>";
	htmlResult += "</div></div></div>";
	$("#as_form_container").append(htmlResult);
	calculateSummary();
	fillFormVariation();
	imageIsPresent();
});

function fillFormVariation() {
	if (startingJson.variation != null && startingJson.variation != "" && startingJson.hasOwnProperty("quantities") && startingJson.quantities.length > 0) {
		var variationsResult = "";
		var quantity = $(".as-quantities:checked").data("quantity");
		var nCurrentVariations = $(".as-variation .as-variation-comb").length;
		var nChangeVariations = quantity - nCurrentVariations;
		if (nChangeVariations > 0) {
			for (var i = nCurrentVariations; i < quantity; i++) {
				variationsResult += "<div id='as_variation_comb" + i + "' class='as-variation-comb col-md-4 col-12'>";
				variationsResult += "<div class='form-group as-variation-container'>";
				variationsResult += "<select class='form-control as-variation-entry'>"
							   	    + "<option value=''>" + getLO("choose_variation") + "...</option>";
				$.each(startingJson.variation.values, function(index, val) {
					variationsResult += "<option value='" + startingJson.variation.references[index] + "'>" + val + "</option>";
				});
				variationsResult += "</select>";
				variationsResult += "</div>";
				variationsResult += "</div>";
			}
			$(".as-variation .row").append(variationsResult);
		} else if (nChangeVariations < 0) {
			for (var i = nChangeVariations; i < 0; i++) {
				$(".as-variation-comb:last-child").remove();
			}
		}
	}
}

function toggleSelection(checkbox) {
	if ($(checkbox).is('.as-payment')) {
		if (checkbox.id == "payment_checkbox_0" && $("#" + checkbox.id).is(":checked")) {
			$('#payment_checkbox_1').prop('checked', false);
		} else if (checkbox.id == "payment_checkbox_1" && $("#" + checkbox.id).is(":checked")) {
			$('#payment_checkbox_0').prop('checked', false);
		} else {
			$(checkbox).prop('checked', true);
		}
	} else {
		if ($("#" + checkbox.id).is(":checked")) {
			var quantities = $(".as-quantities");
			$.each(quantities, function(index, val) {
			  if (val.id != checkbox.id) {
			  	$(val).prop('checked', false);
			  }
			});
		} else {
			$(checkbox).prop('checked', true);
		}
	}
}

function calculateSummary() {
	var quantityPrice = parseFloat($(".as-quantities:checked").val());
	
	var sumExtras = 0;
	$(".as-extra:checked").each(function(index, el) {
		sumExtras += parseFloat($(el).val());
	});

	if ($("#as_management_cost_container").length > 0)
		sumExtras += parseFloat($("#as_management_cost_container").data("price"));

	var payment = $(".as-payment:checked").length > 0 ? parseFloat($(".as-payment:checked").val()) : 0;
	$("#as_subtotal_extra").html(getLO("currency") + " " + parseFloat(sumExtras + payment).toFixed(2));
	$("#as_subtotal_product").html(getLO("currency") + " " + parseFloat(quantityPrice).toFixed(2));
	$("#as_total").html(getLO("currency") + " " + parseFloat(quantityPrice + sumExtras + payment).toFixed(2));
	$("#as_total").data("price", (quantityPrice + sumExtras + payment));
	applyCoupon();
}

function formToJSON() {
	$("#as_form_error_message").hide();
	$("#as_500_error_message").hide();
	$("#as_generic_error_message").hide();
	$("#as_submit_order_button").attr('disabled', 'true');
	var hasError = false;
	var infosJSON = {
		"person_info" : {},
		"quantity" : 0,
		"variations": [],
		"price" : 0,
		"management_cost" : 0,
		"extras": [],
		"payment" : {}
	};
	$("#as_form_container input[type = 'text']").each(function(index, el) {
		var attr = $(this).attr('required');
		$(el).removeClass('as-error');
		var isRequired = (typeof attr !== 'undefined' && attr !== false) || ($(".as-payment:checked").data("redirect") == "true") || ($(".as-payment:checked").data("redirect") == true);
		if (isRequired && $(el).val() == "") {
			$(el).removeClass('as-person-info');
			$(el).addClass('as-error');
			$('html, body').animate({
                scrollTop: $(el).offset().top - 50
            }, 500);
			$("#as_500_error_message").hide();
			$("#as_generic_error_message").hide();
			$("#as_form_error_message").show();
			hasError = true;
		} else {
			if (!/^\+?\d*$/.test($("#phone_number").val()) || $("#phone_number").val() == "") {
				$("#phone_number").removeClass('as-person-info');
				$("#phone_number").addClass('as-error');
				$("#as_500_error_message").hide();
				$("#as_generic_error_message").hide();
				$("#as_form_error_message").show();
				hasError = true;
			}
			var capIsRequired = ($("#cap").length > 0 && typeof $("#cap").attr('required') !== 'undefined' && $("#cap").attr('required') !== false) || ($(".as-payment:checked").data("redirect") == "true") || ($(".as-payment:checked").data("redirect") == true);
			if (capIsRequired && ($("#cap").val() == "" || !(/^\+?\d*$/.test($("#cap").val())))) {
				$("#cap").removeClass('as-person-info');
				$("#cap").addClass('as-error');
				$("#as_500_error_message").hide();
				$("#as_generic_error_message").hide();
				$("#as_form_error_message").show();
				hasError = true;
			}
			infosJSON.person_info[$(el).attr('id')] = $(el).val();
		}
	});
	if (hasError){
		$("#as_submit_order_button").removeAttr("disabled");
		return;
	}
	infosJSON.person_info[$("#as_form_container textarea").attr('id')] = $("#as_form_container textarea").val();
	infosJSON.quantity = $("input.as-quantities:checked").data("quantity");
	$(".as-variation-comb").each(function(index, el) {
		var variation = "";
		$(el).find("option:selected").each(function(index1, el1) {
			variation += $(el1).val() + " ";
		});
		variation = variation.trim();
		infosJSON.variations.push(variation);
	});
	infosJSON.price = $("#as_total").data("price");
	infosJSON.management_cost = $("#as_management_cost_container").data("price");
	$(".as-extra:checked").each(function(index, el) {
		var extra = {};
		extra.reference = $(el).attr('id');
		extra.price = $(el).val();
		infosJSON.extras.push(extra);
	});

	var paymentType = "";
	$(".as-payment:checked").each(function(index, el) {
		if ($(el).data("redirect") == "true" || $(el).data("redirect") == true) {
			paymentType = "p";
		} else {
			paymentType = "c";
		}

		infosJSON.payment.name = $(el).data("name");
		infosJSON.payment.price = $(el).val();
		infosJSON.payment.payment_type = paymentType;
	});
	if ($("#as_privacy_container").length > 0 && !$(".as-privacy").is(":checked")) {
		$("#as_500_error_message").hide();
		$("#as_form_error_message").hide();
		$("#as_generic_error_message").empty().text(getLO("error_no_privacy"));
	    $("#as_generic_error_message").show();
	    hasError = true;
	}
	if (hasError){
		$("#as_submit_order_button").removeAttr("disabled");
		return;
	}
	$.ajax('ams-ajax.php', {
	    type: 'POST',
	    data: infosJSON,
	    success: function (data) {
	    	$("#as_form_error_message").hide();
	    	$("#as_500_error_message").hide();
	    	if (data.error) {
				$("#as_form_error_message").empty().text(data.message);
	    		$("#as_form_error_message").show();
	    	} else {
		    	if ($(".as-payment:checked").data("redirect") == "true" || $(".as-payment:checked").data("redirect") == true) {
		    		window.location.replace(data.data.redirect_url + "&rdu=" + startingJson.redirect_url);
				} else {
					window.location.replace(startingJson.redirect_url);
				}
			}
	    },
	    error: function (data) {
	    	$("#as_form_error_message").hide();
	        $("#as_500_error_message").show();
			$("#as_submit_order_button").removeAttr("disabled");
	    }
	});
}

function imageIsPresent() {
	$(".as-payment-img-container").each(function(index, el) {
		var img = $(el).find('img');
		if (img.length == 0) {
			$(el).hide();
		}
	});
}

function applyCoupon(){
	if ($("#as_coupon").is(':visible')) return;
	$("#as_coupon_error_message").hide();
	if (startingJson.coupons == null || startingJson.coupons == "") return;
	var couponInput = $("#as_coupon_value").val();
	if (couponInput.trim().length == 0) return;
	var couponFound = false;
	var currentPrice = $("#as_total").data("price");
	$.each(startingJson.coupons.items, function(index, val) {
		if (couponInput.trim().toUpperCase() == val.code) {
			couponFound = true;
			if (val.type == "perc") {
				var discount = currentPrice * val.value / 100;
				var newPrice = currentPrice - (discount);
			} else {
				var discount = val.value;
				var newPrice = currentPrice - val.value;
			}
			$("#as_coupon").html(getLO("currency") + " " + parseFloat(discount).toFixed(2));
			$("#as_coupon_name").html("(" + val.name + ")");
			$("#as_total").data("price",newPrice);
			$("#as_total").html(getLO("currency") + " " + parseFloat(newPrice).toFixed(2));
		}
	});

	if (couponFound) {
		$("#as_coupon_value").attr("readonly", true);
		$(".as-coupon").closest('li').show();
	} else {
		$("#as_coupon_error_message").show();
	}
}

function checkBool(string) {
	return string == "true";
}

function getLO(code, substitutions) {
	if (typeof langObj === 'object') {
		if (code in langObj) {
			translation = langObj[code];
			if (substitutions !== undefined) {
				for (var i = 0; i < substitutions.length; i++) {
					translation.split("###" + i + "###").join(substitutions[i]);
				}
			}
			else
				return translation;
		}
		else
			return "TOADD or TODO: " + code;
	} else {
		return "NOT AN OBJ";
	}
}