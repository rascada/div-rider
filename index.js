let renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

let stage = new PIXI.Container();

let dot = new PIXI.Graphics();
let hover = false;

stage.addChild(dot);

dot.beginFill(0xFF9900);
dot.drawRect(0, 0, 100, 100); 
dot.endFill();

dot.pivot.x = 50;
dot.pivot.y = 50;
dot.position.x = 200;
dot.position.y = 150;
dot.interactive = true;

dot.mouseover = e => hover = true;
dot.mouseout = e => hover = false;

animate();
function animate() {
    requestAnimationFrame(animate);
	
	if (hover) {
		dot.position.x += 2;
		dot.position.y += 2;
	}
  
  renderer.render(stage);
}
