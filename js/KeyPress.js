function keyDown(event){
	if(event.code == 'ArrowLeft'){
  	alert("rotate left");
  }else if(event.code == 'ArrowRight'){
  	alert("rotate right");
  }else if(event.code == 'Space'){
  	alert("shoot!");
  }
}

document.body.addEventListener('keydown', keyDown);