$(document).ready(function() {

	var header_elements = $(".collapse-outcomes-header")
	var outcomes = [];

	if (header_elements.length !== 0) {

		var session_outcomes_div = $("#session-outcomes");
		var accordion_div = $("<div id='accordion'></div>")
		session_outcomes_div.after(accordion_div);

		// Get all of the outcomes and tables into an array, removing this text from the page (to be put into an accordion in the next steps)
		$.each(header_elements, function(index, header_element) {

			outcome = {};
			outcome["header_id"] = header_element.id;
			outcome["header_text"] = header_element.innerHTML;

			var outcome_content = '';
			var next_elements = [];

			// Find all elements between each outcome header to the next header (or until the footer for the last section)
			if (index !== header_elements.length - 1) {
				next_elements = $("#" + header_element.id).nextUntil("#" + header_elements[index + 1].id);
			} else {
				next_elements = $("#" + header_element.id).nextUntil("footer");
			}

			$.each(next_elements, function(index, content_element) {
				outcome_content += content_element.outerHTML + '\n';
			});

			outcome["content"] = outcome_content;
			outcomes.push(outcome);

			// Add temporary divs to be replaced later with a template for the accordion
			var added_outcome = $("<div id='card-" + outcome["header_id"] +  "' class='card'></div>");
			accordion_div.append(added_outcome);

			// Remove the content with the outcomes (they will be added later again in the accordion)
			next_elements.remove();
			header_element.remove();
			
		});
	}

	// Create the accordion control that shows the outcomes that the session covers
	if (outcomes.length !== 0) {

		var outcome_section_template = "";

		var template_div = $("<div id='template'></div>")
		template_div.load("../../js/outcomes_template.html", function() {

			// For each set of outcomes, there will be a panel in the accordion
			$.each(outcomes, function(index, outcome) {

				var added_outcome = $("#card-" + outcome["header_id"]);

				var outcome_section_content = template_div[0].innerHTML.replace(/HEADING_ID/g, "heading-" + outcome["header_id"])
					.replace(/COLLAPSE_ID/g, "collapse-" + outcome["header_id"])
					.replace(/HEADING_GOES_HERE/g, outcome["header_text"])
					.replace(/CONTENT_GOES_HERE/g, outcome["content"]);

				added_outcome.html(outcome_section_content);
				
			});

		});

	}
});