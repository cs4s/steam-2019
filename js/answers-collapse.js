$(document).ready(function() {

	var section_headings = $("h2.section-header");
	var answers = [];

	$.each(section_headings, function(section_index, section_heading) {

		// Get all the header elements for the different exercise answers
		var section_exercises = [];
		if (section_index !== section_headings.length - 1) {
			section_exercises = $("#" + section_heading.id).nextUntil("#" + section_headings[section_index + 1].id, "h4.collapse-answer-header");
		} else {
			section_exercises = $("#" + section_heading.id).nextUntil("footer", "h4.collapse-answer-header");
		}

		// Go through each of the exercise headers and create the collapsible panels
		$.each(section_exercises, function (exercise_index, answer_heading) {

			answer = {};
			answer["header_id"] = answer_heading.id;
			answer["content"] = "";

			var answer_content = "";
			var next_elements = [];

			if (section_index !== section_headings.length - 1) {

				if (exercise_index !== section_exercises.length - 1) {
					next_elements = $("#" + answer_heading.id).nextUntil("h3.exercise-header");
				} else {
					next_elements = $("#" + answer_heading.id).nextUntil("h2.section-header");
				}
					
			} else {

				if (exercise_index !== section_exercises.length - 1) {
					next_elements = $("#" + answer_heading.id).nextUntil("h3.exercise-header");
				} else {
					next_elements = $("#" + answer_heading.id).nextUntil("footer");
				}
			}

			// Add all the HTML for the content within the answer
			$.each(next_elements, function(index, content_element) {
				answer["content"] += content_element.outerHTML + '\n';
			});

			// Add temporary divs to be replaced later with a template for the accordion
			var added_answer = $("<div id='card-" + answer["header_id"] +  "' class='card'></div>");
			answer_heading.after(added_answer[0]);

			answers.push(answer);

			// Remove the content with the outcomes (they will be added later again in the accordion)
			next_elements.remove();
			answer_heading.remove();
		});
	});

	// Create the accordion control that shows the outcomes that the session covers
	if (answers.length !== 0) {

		var answers_section_template = "";

		var template_div = $("<div id='template'></div>")
		template_div.load("../js/outcomes_template.html", function() {

			// For each set of outcomes, there will be a panel in the accordion
			$.each(answers, function(index, answer) {

				var added_answer = $("#card-" + answer["header_id"]);

				var answer_section_content = template_div[0].innerHTML.replace(/HEADING_ID/g, "heading-" + answer["header_id"])
					.replace(/COLLAPSE_ID/g, "collapse-" + answer["header_id"])
					.replace(/HEADING_GOES_HERE/g, "Answer")
					.replace(/CONTENT_GOES_HERE/g, answer["content"]);

				added_answer.html(answer_section_content);
				
			});

			var preBlocks = $("pre");
			$.each(preBlocks, function(preIndex, preBlock) {
	            
				$.each(preBlock.children, function(childIndex, codeBlock) {
	  
					// Parse the contennts of the code block with ScratchBlocks library
				  	var doc = scratchblocks.parse(codeBlock.innerHTML);
				  	var docView = scratchblocks.newView(doc, { style: "scratch3" });

					// Render the Scrath blocks code and replace the code with the SVG
					var svg = docView.render();
					var answerId = "scratch-" + preIndex + "_" + childIndex;
					var answerDiv = $("<div id=\"" + answerId + "\" class=\"scratch-blocks\"></div>");
					answerDiv[0].appendChild(svg);
			  
					// Add the SVG to the DOM and remove the text Code
					preBlock.after(answerDiv[0]);
					preBlock.remove();
	  
				});
			});
		});
	}
});