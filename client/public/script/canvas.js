function AnimateCanvas(){
	const config = {
		waveSpeed : .2,
		wavesToBlend: 4,
		curvesNum: 40,
		framesToMove: 1
	};
	
	class waveNoise {
		constructor() {
			this.waveSet = [];
		}
	
		addWaves(requireWaves) {
			for(let i = 0; i < requireWaves; ++i) {
				let randomAngle = Math.random() * 360;
				this.waveSet.push(randomAngle);
			}
		}
	
		getWave() {
			let blendedWave = 0;
			for(let e of this.waveSet) {
				blendedWave += Math.sin(e / 180 * Math.PI);
			}
			return (blendedWave / this.waveSet.length + 1) / 2;
		}
	
		update() {
			this.waveSet.forEach((e, i) => {
				let r = Math.random() * (i + 1) * config.waveSpeed;
				this.waveSet[i] = (e + r) % 360;
			})
		}
	}
	
	class Animation {
		constructor() {
			this.cnv = null;
			this.ctx = null;
			this.size = {w: 0, h: 0, cx: 0, cy:0};
			this.controls = [];
			this.controlsNum = 3;
			this.frameCounter = 0;
		}
	
		init() {
			this.createCanvas();
			this.createControls();
			this.updateAnimation();
		}
	
		createCanvas() {
			let wrapper = document.querySelector('.vg-reviews');
			this.cnv = wrapper.querySelector('canvas');
			this.ctx = this.cnv.getContext('2d');
			this.setCanvasSize();
			if(!wrapper) {
				return
			}
			window.addEventListener('resize', () => this.setCanvasSize());
		}
	
		setCanvasSize() {
			this.size.w = this.cnv.width = window.innerWidth;
			this.size.h = this.cnv.height = window.innerHeight;
			this.size.cx = this.size.w / 2;
			this.size.cy = this.size.h / 2;
		}
	
		createControls() {
			for (let i = 0; i < this.controlsNum + config.curvesNum; ++i) {
				let control = new waveNoise();
				control.addWaves(config.wavesToBlend);
				this.controls.push(control);
			}
		}
	
		updateCurves() {
			let c = this.controls;
			let _controlX1 = c[0].getWave() * this.size.w;
			let _controlY1 = c[1].getWave() * this.size.h;
			let _controlX2 = c[2].getWave() * this.size.w;
	
			for (let i = 0; i < config.curvesNum; ++i) {
				let _controlY2 = c[3 + i].getWave();
				let curveParam = {
					startX: this.size.w,
					startY: 0,
					controlX1: _controlX1,
					controlY1: _controlY1,
					controlX2: _controlX2,
					controlY2: _controlY2 * this.size.h,
					endX: 0,
					endY: this.size.h,
					alpha: _controlY2,
				};
				this.drawCurve(curveParam);
			}
		}
	
		drawCurve({startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, alpha }) {
			this.ctx.strokeStyle = `rgba(255,255,255, ${alpha})`;
			this.ctx.beginPath();
			this.ctx.moveTo(startX, startY);
			this.ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
			this.ctx.stroke();
		}
	
		updateCanvas() {
			this.ctx.fillStyle = `rgba(233, 233, 233, 1)`;
			this.ctx.fillRect(0, 0, this.size.w, this.size.h);
		}
	
		updateControls() {
			this.controls.forEach(e => e.update());
		}
	
		updateFrameCounter() {
			this.frameCounter = (this.frameCounter + 1) % config.framesToMove;
			if(this.frameCounter === 0) {
				this.type4Start = Math.random();
				this.type4End = Math.random()
			}
		}
	
		updateAnimation() {
			this.updateFrameCounter();
			this.updateCanvas();
			this.updateCurves();
			this.updateControls();
			window.requestAnimationFrame(() => this.updateAnimation());
		}
	}

	new Animation().init();
}

document.addEventListener('DOMContentLoaded', () => {
	AnimateCanvas();
});