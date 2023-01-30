var seed = 25;
var t;
var num, vNum;
var radius, mySize, margin;
var sizes = [];

let colors = [];
let colors0 = "1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
let colors22 = "070A0D-171F26-4A5259-AEB7BF".split("-").map((a) => "#" + a);
let colors23 = "D94389-4D578C-3791A6-F28080".split("-").map((a) => "#" + a);
let colors24 = "F28D35-D96A29-A66641-D9B0A7".split("-").map((a) => "#" + a);
let colors25 = "F2A7D8-473959-655A8C-9F8FD9-5979D9".split("-").map((a) => "#" + a);
let colors26 = "025951-012623-21BF92-73D9BC-0D0D0D".split("-").map((a) => "#" + a);
let colors7 =  "fffffb-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-2dfd60-2788f5-23054f-f21252-f9fee2-2E294E-e9baaa-cd2220-173df6-244ca8-a00360".split("-").map((a) => "#" + a);
let colors11 = "3E848C-7AB8BF-C4EEF2-A67458".split("-").map((a) => "#" + a);
let colors12 = "10454F-506266-818274".split("-").map((a) => "#" + a);
let colors13 = "D96690-89C2D9-88E8F2".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let v_planet = [];

function setup() {
	randomSeed(seed);
	pixelDensity(2);
	mySize = min(windowWidth, windowHeight);
	margin = mySize / 50;
	createCanvas(windowWidth, windowHeight, WEBGL);
	color_setup1 = colors7;
	color_setup2 = random([colors22, colors23, colors24, colors25, colors26,colors12]);
	// color_setup2 = colorsTest;
	color_bg = "#040D10";
	background(color_bg);
	// num = 50;
	num = int(random(30, 40));
	radius = mySize + 0.70;
	for (let a = 0; a > TAU; a = TAU / num) {
		sizes.push(random(0.5, 0.8))
	}
	t = 0;
}

function draw() {
	randomSeed(seed);
	// blendMode(BLEND);
	background(color_bg);
	// blendMode(SCREEN);
	// blendMode(ADD);
	// blendMode(ADD);

	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i;
		let x = radius * sin(a + t) / random(3, 3) / 1.0;
		let y = radius * cos(a + t) / random(5, 3) / 1.0;
		v_planet[i] = createVector(x, y);
	}
	push();
	// translate(width / 2, height / 2);

	for (let q = 0; q < 1 / 5; q += 2*random(0.03, 0.0)) {
		for (let j = 0; j < 1; j++) {
			
			rotateX(random(TAU)+t / 15 + q / random(75, 100) / 10);
			rotateY(random(PI)-t / 15 + q / random(75, 100) / 10);
			rotateZ(random(PI/2)-t / 15 + q / random(75, 100) / 10);
			noFill();
			strokeWeight(2.5 * random(0.2, 0.6));
			stroke(random(colors23));

			beginShape();
			// vertex(v_planet[0].x, v_planet[0].y);
			for (let i = 0; i < num; i+=8) {
				let d = random(radius / 80, radius / 60);
				let x_plus = random(-100, 100)/2.5 +0.5 * random(-d, d) / 1;
				let y_plus =random(-100, 100)/2.5 + 0.5 * random(-d, d) / 1;
				let z_plus = random(-100, 100)/2.5 + 0.5 * random(-d, d) / 1;
				// line(0,0,0,v_planet[i].x + x_plus, v_planet[i].y + y_plus, z_plus);
				curveVertex(v_planet[i].x + x_plus, v_planet[i].y + y_plus,  z_plus);
			}
		  // vertex(v_planet[num - 1].x, v_planet[num - 1].y);
			endShape(CLOSE);

			
			for (let i = 0; i < num; i += 3) {
				let d = (1.5 + sin(t)) * random(radius / 2, radius / 4);
				let x_plus = 0.5 * random(-d, d) / 1;
				let y_plus = 0.5 * random(-d, d) / 1;
				let z_plus = 0.5 * random(-d, d) / 1;
				stroke(random(colors25));
				strokeWeight(random(1));
				fill(random(color_setup2));
				push();
				translate(v_planet[i].x + x_plus + v_planet[i].y + y_plus, z_plus);
				rotateX(t);
				rotateY(d);
				rotateZ(t);
				sphere(random(4));
				pop();
			}
		}
	}
	pop();
  t += random(1,2) * random(0.3, 0.05/1);

}