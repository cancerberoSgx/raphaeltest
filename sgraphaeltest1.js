describe("A suite", function() {

	var paper;
	beforeEach(function() {
		// $(document.body).empty();
		paper = Raphael(400, 0, 600, 600);
	});

	it("Basic Shape Attributes", function() {
		
		var s1 = paper.rect(1, 2, 3, 4, 5); 		
		expect(s1.attr("x")).toBe(1);
		expect(s1.attr("y")).toBe(2);
		expect(s1.attr("width")).toBe(3);
		expect(s1.attr("height")).toBe(4);
		expect(s1.type).toBe("rect");
		
		var s2 = paper.circle(10,10,2).attr({fill: "#ededed"}); 
		expect(s2.attr("cx")).toBe(10);
		expect(s2.attr("cy")).toBe(10);
		expect(s2.attr("r")).toBe(2);
		expect(s2.attr("fill")).toBe("#ededed");
		expect(s2.type).toBe("circle");
		
		var s3 = paper.ellipse(10, 11, 3, 4).attr({stroke: "rgb(1,2,3)"}); 
		expect(s3.attr("cx")).toBe(10);
		expect(s3.attr("cy")).toBe(11);
		expect(s3.attr("rx")).toBe(3);
		expect(s3.attr("ry")).toBe(4);
		expect(s3.attr("stroke")).toBe("rgb(1,2,3)");
		expect(s3.type).toBe("ellipse");
		
	});
});

