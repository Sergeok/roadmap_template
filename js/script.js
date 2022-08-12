let root = document.querySelector('#root');

function topRightSection(header, text) {
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

function topLeftSection(header, text) {
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

function midRightSection(header, text) {
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

function midLeftSection(header, text) {
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

function bottomLeftSection(header, text) {
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

function bottomRightSection(header, text) {
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
	
	if (sourceOnTheRight) {
		bottomRightSection(data[0].header, data[0].text);
		connectionToLeft()
	} else {
		bottomLeftSection(data[0].header, data[0].text);
		connectionToRight()
	}
	
	
	for (let i = 1; i < data.length - 1; i++) {
		if (i % 2 == sourceOnTheRight) {
			midLeftSection(data[i].header, data[i].text);
			connectionToRight()
		} else {
			midRightSection(data[i].header, data[i].text);
			connectionToLeft()
		}
	}
	
	if (data.length % 2 == sourceOnTheRight) {
		topRightSection(data[data.length - 1].header, data[data.length - 1].text);
	} else {
		topLeftSection(data[data.length - 1].header, data[data.length - 1].text);
	}
	
	root.insertAdjacentHTML("afterbegin", `<h2 class="pb-3 pt-2">${title}</h2>`);
}

roadmapInit();