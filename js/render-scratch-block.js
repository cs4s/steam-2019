$(document).ready(function() {
    var preBlocks = $("pre");
    $.each(preBlocks, function(preIndex, preBlock) {

        $.each(preBlock.children, function(childIndex, codeBlock) {

            // Parse the contents of the code block with ScratchBlocks library
            var doc = scratchblocks.parse(codeBlock.innerHTML);
            var docView = scratchblocks.newView(doc, { style: 'scratch3' });
            
            // Render the Scratch blocks code and replace the code with the SVG
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