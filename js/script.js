const Direction = Object.freeze({
	LEFT: 0,
	RIGHT: 1,
  
	left_arr: Object.freeze(["left", "l"]),
	right_arr: Object.freeze(["right", "r"])
});

let defaultSide = Direction.LEFT;
let headerSide = Direction.LEFT;
let defaultText = "";
let root = document.querySelector("#root");

function getSide(ind) {
	
	
	let side = data[ind].side;
	
	if (side != null) {
		if (Direction.right_arr.indexOf(side.toLowerCase()) != -1) {
			return Direction.RIGHT;
		} else if (Direction.left_arr.indexOf(side.toLowerCase()) != -1) {
			return Direction.LEFT;
		}
	}
	
	return defaultSide;
}

function getHeader(ind) {
	return data[ind].header;
}

function getText(ind) {
	return data[ind].text;
}

function topRightSection(header = defaultText, text = defaultText) {
	let element = `
		<div class="row align-items-center justify-content-end how-it-works" tabindex="-1">
            <div class="col-6 text-right">
                <h5>${header}</h5>
                <p>${text}</p>
            </div>
            <div class="col-2 text-center bottom-right">
                <div class="circle">
                    <div class="circle-inner"></div>
                </div>
            </div>
        </div>
	`;
	
	root.insertAdjacentHTML("afterbegin", element);
}

function topLeftSection(header = defaultText, text = defaultText) {
	let element = `
		<div class="row align-items-center how-it-works" tabindex="-1">
            <div class="col-2 text-center bottom-left">
                <div class="circle">
                    <div class="circle-inner"></div>
                </div>
            </div>
            <div class="col-6">
                <h5>${header}</h5>
                <p>${text}</p>
            </div>
        </div>
	`;
	
	root.insertAdjacentHTML("afterbegin", element);
}

function connectionToRight() {
	let element = `
		<div class="row timeline">
            <div class="col-2">
                <div class="corner right-bottom"></div>
            </div>
            <div class="col-8">
                <hr />
            </div>
            <div class="col-2">
                <div class="corner top-left"></div>
            </div>
        </div>
	`;
	
	root.insertAdjacentHTML("afterbegin", element);
}

function connectionToLeft() {
	let element = `
		<div class="row timeline">
            <div class="col-2">
                <div class="corner top-right"></div>
            </div>
            <div class="col-8">
                <hr />
            </div>
            <div class="col-2">
                <div class="corner left-bottom"></div>
            </div>
        </div>
	`;
	
	root.insertAdjacentHTML("afterbegin", element);
}

function midRightSection(header = defaultText, text = defaultText) {
	let element = `
		<div class="row align-items-center justify-content-end how-it-works" tabindex="-1">
            <div class="col-6 text-right">
                <h5>${header}</h5>
                <p>${text}</p>
            </div>
            <div class="col-2 text-center top-right bottom-right">
                <div class="circle">
                    <div class="circle-inner"></div>
                </div>
            </div>
        </div>
	`;
  
	root.insertAdjacentHTML("afterbegin", element);
}

function midLeftSection(header = defaultText, text = defaultText) {
	let element = `
		<div class="row align-items-center how-it-works" tabindex="-1">
            <div class="col-2 text-center top-left bottom-left">
                <div class="circle">
                    <div class="circle-inner"></div>
                </div>
            </div>
            <div class="col-6">
                <h5>${header}</h5>
                <p>${text}</p>
            </div>
        </div>
	`;
  
	root.insertAdjacentHTML("afterbegin", element);
}

function bottomLeftSection(header = defaultText, text = defaultText) {
	let element = `
		 <div class="row align-items-center how-it-works" tabindex="-1">
            <div class="col-2 text-center top-left">
                <div class="circle">
                    <div class="circle-inner"></div>
                </div>
            </div>
            <div class="col-6">
                <h5>${header}</h5>
                <p>${text}</p>
            </div>
        </div>
	`;
  
	root.insertAdjacentHTML("afterbegin", element);
}

function bottomRightSection(header = defaultText, text = defaultText) {
	let element = `
		 <div class="row align-items-center justify-content-end how-it-works" tabindex="-1">
            <div class="col-6 text-right">
                <h5>${header}</h5>
                <p>${text}</p>
            </div>
            <div class="col-2 text-center top-right">
                <div class="circle">
                    <div class="circle-inner"></div>
                </div>
            </div>
        </div>
	`;
  
	root.insertAdjacentHTML("afterbegin", element);
}

function roadmapInit() {
	if (!data.length) {
		return;
	}
	
	let currentSide = getSide(0);
	
	if (currentSide === Direction.RIGHT) {
		bottomRightSection(getHeader(0), getText(0));
	} else if (currentSide === Direction.LEFT) {
		bottomLeftSection(getHeader(0), getText(0));
	}
	
	for (let i = 1; i < data.length - 1; i++) {
		let side = getSide(i);
		if (side === Direction.RIGHT) {
			if (currentSide === Direction.LEFT) {
				connectionToRight();
			}
			midRightSection(getHeader(i), getText(i));
			currentSide = side;
		} else if (side === Direction.LEFT) {
			if (currentSide === Direction.RIGHT) {
				connectionToLeft();
			}
			midLeftSection(getHeader(i), getText(i));
			currentSide = side;
		}
	}
	
	let lastInd = data.length - 1;
	let side = getSide(lastInd);
	if (side === Direction.RIGHT) {
		if (currentSide === Direction.LEFT) {
			connectionToRight();
		}
		topRightSection(getHeader(lastInd), getText(lastInd));
	} else if (side === Direction.LEFT) {
		if (currentSide === Direction.RIGHT) {
			connectionToLeft();
		}
		topLeftSection(getHeader(lastInd), getText(lastInd));
	}
	
	let headerClasses = "pb-3 pt-2";
	if (headerSide === Direction.LEFT) {
		headerClasses += " align-l";
	} else if (headerSide === Direction.RIGHT) {
		headerClasses += " align-r";
	}
	
	root.insertAdjacentHTML("afterbegin", `<h2 class="${headerClasses}">${title}</h2>`);
}

roadmapInit();