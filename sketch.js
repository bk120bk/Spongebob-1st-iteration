var num = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
}
function draw() {
	background(0,100, 180);
	fill(255,254,76)
	rect(600,20, 500, 700)
	rect(680,700,30,200)
	rect(980,700,30,200)
	rect(450,500,150,25)
	rect(1100,500,150,25)
	fill(255,255,255)
	strokeWeight(4)
	ellipse(750,150,200,200)
	ellipse(950,150,200,200)
	fill(57,188,232)
	ellipse(750,165,60,60)
	ellipse(950,165,60,60)
	fill(0,0,0)
	ellipse(750,170,20,20)
	ellipse(950,170,20,20)
	strokeWeight(2)
	fill(255,254,97)
	ellipse(850,250,40,80)
	strokeWeight(4)
	//smile
	noFill()
	bezier(630,300,680,400,1000,400,1060,300)
	line(750,50,750,30)
	line(700,60,700,30)
	line(800,60,800,30)
	line(950,50,950,30)
	line(900,60,900,30)
	line(1000,60,1000,30)
	strokeWeight(0)
	fill(214,79,52)
	//dimples
	ellipse(631,290,5,5)
	ellipse(624,280,5,5)
	ellipse(638,280,5,5)
	ellipse(1060,290,5,5)
	ellipse(1053,280,5,5)
	ellipse(1067,280,5,5)
	strokeWeight(2)
	fill(255,255,255)
	rect(790,375,40,60)
	rect(860,375,40,60)
	rect(600,450,500,100)
	fill(212,128,33)
	rect(600,550,500,170)
	strokeWeight(0)
	fill(164,177,58)
	ellipse(700,300,32,75)
	ellipse(1058,54,25,64)
	ellipse(643,62,23,69)
	ellipse(620,93,17,48)
	ellipse(950,405,24,67)
	ellipse(990,420,17,53)
	strokeWeight(1)
	//tie
	fill(247,0,32)
	//rect(810,450,70,150)
	quad(840,450,860,450,790,580,900,580)
	triangle(790,580,845,630,900,580)
	
	fill(0,0,0)
	rect(620,580,70,30)
	rect(710,580,70,30)
	rect(910,580,70,30)
	rect(1000,580,70,30)

		
	//jelly
strokeWeight(1)
fill(208,122,220)
ellipse(1400-num,60,120,90)
line(1380-num,100,1380-num,140)
line(1400-num,100,1400-num,140)
line(1420-num,100,1420-num,140)
strokeWeight(0)
fill(144,53,159)
ellipse(1405-num,62,20,17)
ellipse(1360-num,73,17,15)
ellipse(1430-num,58,17,22)
//jelly2
strokeWeight(1)
fill(208,122,220)
ellipse(1400-num,500,120,90)
line(1380-num,540,1380-num,580)
line(1400-num,540,1400-num,580)
line(1420-num,540,1420-num,580)
strokeWeight(0)
fill(144,53,159)
ellipse(1405-num,502,20,17)
ellipse(1360-num,513,17,15)
ellipse(1430-num,498,17,22)

//spatula
fill(152,157,161)
rect(1150, 510, 250,10)
//quad(1150,505,1400,505,1400-frameCount%50,515-frameCount%50,1150,515)
rect(1400,475,80,80)
fill(0,0,0)
rect(1150,510,80,10)
fill(0,100,180)
strokeWeight(1)
rect(1420,535,50,7)
rect(1420,513,50,7)
rect(1420,488,50,7)

//patty
strokeWeight(0)
fill(143,27,16)
ellipse(1450, 500-frameCount%220, 300, 100-frameCount%220);
strokeWeight(1)
//line(1310,500-frameCount%220,1590,500-frameCount%220)

}
function mousePressed() {
	fill(255,254,97)
	ellipse(750,150,200,200)
	ellipse(950,150,200,200)
	strokeWeight(4)
	line(650,150,850,150)
	line(850,150,1050,150)
	
}

function mouseReleased() {
	fill(255,255,255)
	strokeWeight(4)
	ellipse(750,150,200,200)
	ellipse(950,150,200,200)
	fill(57,188,232)
	ellipse(750,165,60,60)
	ellipse(950,165,60,60)
	fill(0,0,0)
	ellipse(750,170,20,20)
	ellipse(950,170,20,20)
	strokeWeight(2)
	noFill()
	ellipse(850,250,40,80)
}

function mouseClicked() {
strokeWeight(1)
fill(208,122,220)
ellipse(1400-num,60,120,90)
line(1380-num,100,1380-num,140)
line(1400-num,100,1400-num,140)
line(1420-num,100,1420-num,140)
strokeWeight(0)
fill(144,53,159)
ellipse(1405-num,62,20,17)
ellipse(1360-num,73,17,15)
ellipse(1430-num,58,17,22)


strokeWeight(1)
fill(208,122,220)
ellipse(1400-num,500,120,90)
line(1380-num,540,1380-num,580)
line(1400-num,540,1400-num,580)
line(1420-num,540,1420-num,580)
strokeWeight(0)
fill(144,53,159)
ellipse(1405-num,502,20,17)
ellipse(1360-num,513,17,15)
ellipse(1430-num,498,17,22)
num+=50
}
