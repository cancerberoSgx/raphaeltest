describe("A suite", function() {

	var paper, flag;
	beforeEach(function() {
		paper = Raphael(400, 0, 600, 600);
		flag=0;
	});

	it("more_eve branch test 1", function() {
		
		//listening for shape creation : event "raphael.elementCreate.*" 
		eve.on("raphael.elementCreate.*", function(e) { 
			flag++;
		});
		
		expect(flag).toBe(0); 
		var rect = paper.circle(10,10,6);
		expect(flag).toBe(1);
			
		
		var rect = paper.rect(10,10,11,11).attr({fill: "#ededed", opacity: 0.1});//BUG in more_eve: we need to create a shape for t to start counting.
		expect(flag).toBe(2);
		
		//creating a shape triggering elementCreate event    
		//alert("creating a shape triggering elementCreate event   ");

		// eve("raphael.elementCreate.ellipse.*", {}, paper, "ellipse", {cx: 100, cy: 100, rx: 50, ry: 70, fill: "yellow"});

		
		
		
//		rect = paper.rect(0,0,100,100); //this will count
		
		
//		alert(paper.countShapes());

		// test.assertTrue(flag==1, "eve2"); 

		//creating a shape triggering elementCreate event    
		//alert("creating a shape triggering elementCreate event   ");

		// eve("raphael.elementCreate.ellipse.*", {}, paper, "ellipse", {cx: 100, cy: 100, rx: 50, ry: 70, fill: "yellow"});

		// test.assertTrue(flag==2, "eve3: "+flag); 

		//creating a set should also trigger raphael.elementCreate
		// paper.set(); 
		// test.assertTrue(flag==3, "eve4: "+flag); 

		//register a shape remove listener
		// eve.on("raphael.elementRemove.*", function(e){
//		 	//alert("element removed: "+this.id);
//		 	flag++;
		// });

//		rect.remove();
		// test.assertTrue(flag==4, "eve5: "+flag); 


		//paper.setStart();
		//var shape1 = paper.setFinish();// var shape1 = paper.setFinish();


		//remove a shape triggering elementRemove event
		//eve("raphael.elementRemove."+rect.id, {}, paper, rect.id);

//		alert(test.print());
	});
});

