$(document).ready(function() {
    var preBlocks = $("pre");
    $.each(preBlocks, function(preIndex, preBlock) {

        $.each(preBlock.children, function(childIndex, codeBlock) {

        // Parse the contennts of the code block with ScratchBlocks library
        var doc = scratchblocks.parse(codeBlock.innerHTML);
        doc.render(function (svg) {

            // Create the Div element that the Scratch blocks will go into
            var answerId = "scratch-" + preIndex + "_" + childIndex;
            var answerDiv = $("<div id=\"" + answerId + "\" class=\"scratch-blocks\"></div>");
            answerDiv[0].appendChild(svg);

            // Add the SVG to the DOM and remove the text Code
            preBlock.after(answerDiv[0]);
            preBlock.remove();

        });
        });
    });
});