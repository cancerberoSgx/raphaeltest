/**
 * a raphael extension for switching between coordinates relative to the paper
 * and coordinates relative to the parent window (absolute)
 */
(function() {

	var jQuery = window.jQuery;

	/**
	 * @param domEl
	 *            the DOM element obtained with aShape.node
	 * @return the raphael shape element corresponding to given DOM element
	 *         'node'
	 * @see https://groups.google.com/d/topic/raphaeljs/imEQIVn42nQ/discussion
	 * @see http://jsfiddle.net/Jgnmh/6/
	 */
	Raphael.fn.getElementFromNode = function(domEl) {
		return this.getById(domEl.raphaelid);
	};

	/**
	 * @return a [x, y] array containing the current coordinates of this paper
	 *         relative to the document.
	 */
	Raphael.fn.getDocumentCoords = function() {
		return jQuery(this.canvas).offset();
	};

	/**
	 * transform a window relative coordinate into coordinates relative to this
	 * paper.
	 * 
	 * @return an array [x2, y2] with coordinates relative to the paper.
	 */
	Raphael.fn.windowToPaper = function(x, y) {
		var pb = this.getDocumentCoords();
		return [ x - pb.left, y - pb.top ];
	};

	/**
	 * transform a paper relative coordinate into absolute coordinates. 
	 */
	Raphael.fn.paperToWindow = function(x, y) {
		var pb = this.getDocumentCoords();
		return [ x + pb.left, y + pb.top ];
	};

})();

/* for this to work first we need to install a */
/*
 * if(!this.__windowToPaperRefShape) { this.__windowToPaperRefShape =
 * this.rect(0,0,1,1).attr({opacity: 0.0001, fill: '#ffffff'}); }
 */