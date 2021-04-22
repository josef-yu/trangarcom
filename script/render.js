const renderHome = () => {
	document.getElementById('portfolio-content1').style.visibility = 'hidden';
	document.getElementById('portfolio-content2').style.visibility = 'hidden';
	document.getElementById('instructions').style.visibility = 'hidden';
	document.getElementById('home-content').style.visibility = 'visible';
	
	document.getElementById('prev-button').style.visibility = 'hidden';
	document.getElementById('next-button').style.visibility = 'hidden';
}

const renderPortfolio = () => {
	document.getElementById('portfolio-content1').style.visibility = 'visible';
	document.getElementById('instructions').style.visibility = 'hidden';
	document.getElementById('portfolio-content2').style.visibility = 'hidden';
	document.getElementById('home-content').style.visibility = 'hidden';
	
	document.getElementById('prev-button').style.visibility = 'visible';
	document.getElementById('next-button').style.visibility = 'visible';
}

const renderPortfolio2 = () => {
	document.getElementById('portfolio-content1').style.visibility = 'hidden';
	document.getElementById('instructions').style.visibility = 'hidden';
	document.getElementById('portfolio-content2').style.visibility = 'visible';
	document.getElementById('home-content').style.visibility = 'hidden';
	
	document.getElementById('prev-button').style.visibility = 'visible';
	document.getElementById('next-button').style.visibility = 'visible';
}

const renderPersonal = () => {
	window.location.href = "https://github.com/victorkoenders";
}

const renderTrangar = () => {
	window.location.href = "https://github.com/Trangar";
}

const renderInstruction = () => {
	if(currentSelected != null) {
		currentSelected.dehighlight();
		currentSelected.disable = false;
		currentSelected.rendered = false;
		currentSelected = null;
		
		pageSelected.dehighlight();
		pageSelected.disable = false;
		pageSelected.rendered = false;
		
		pageSelected = prev;
		pageSelected.highlight();
		pageSelected.disable = true;
		pageSelected.rendered = true;
		
		document.getElementById('home-content').style.visibility = 'hidden';
		document.getElementById('portfolio-content2').style.visibility = 'hidden';
		document.getElementById('portfolio-content1').style.visibility = 'hidden';
		document.getElementById('prev-button').style.visibility = 'hidden';
		document.getElementById('next-button').style.visibility = 'hidden';
		
		
		
		var element = document.getElementById('instructions');
		if(element.style.visibility == 'visible') {
			element.style.visibility = 'hidden';
		} else {
			element.style.visibility = 'visible';
		}
	}
}

const getScreenWidth = () => {
	return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

const getScreenHeight = (ratio) => {
	return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

const detectMob = ()  => {
	ratio = window.devicePixelRatio || 1;
	screen_width = getScreenWidth();
	screen_height = getScreenHeight();
    return ( ( screen_width/ratio <= 1020 ) ) ;
  }

const renderMobile = () => {
	var body = document.getElementById('body');
	body.innerHTML = '';
	body.style.display = 'flex';
	body.style.justifyContent = 'center';
	body.style.alignItems = 'center';
	body.style.textAlign = 'center';
	body.style.backgroundColor = '#005951';
	
	var div = document.createElement('div');
	div.innerHTML = 'Page does not support lower resolutions.<br>Please resize the browser and refresh the page.';
	div.style.position = 'absolute';
	div.style.top = '40%';
	div.style.fontSize = '35px';
	
	body.appendChild(div);
}

const handleResize = () => {
	var nextRatio = window.devicePixelRatio || 1;
	var nextWidth = getScreenWidth();
	var nextHeight = getScreenHeight();
	var nextToCurrentWidth = nextWidth/screen_width;
	var nextToCurrentHeight = nextHeight/screen_height;
	
	var arr = [buttons,pages];
	
	car1.x = car1.x*nextToCurrentWidth;
	car1.y = car1.y*nextToCurrentHeight;
	
	arr.forEach(buttons => {
		Object.values(buttons).forEach(button=> {
			button.x = button.x*nextToCurrentWidth;
			button.y = button.y*nextToCurrentHeight;
			button.ref.style.left =  button.x + 'px';
			button.ref.style.top =  button.y + 'px';
		})
	});
	
	screen_width = nextWidth;
	screen_height = nextHeight;
	ratio = nextRatio;
}