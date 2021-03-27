var index=0;
    function ChangeImg() {
        index++;
        var a=document.getElementsByClassName("img-slide");
        if(index>=a.length) index=0;
        for(var i=0;i<a.length;i++){
            a[i].style.display='none';
        }
        a[index].style.display='block';
    }
    function stop(){
		clearInterval(timeId);
	}
	function start(){
		clearInterval(timeId);
		timeId=setInterval(divInterval,2000);
	}
    onblur = function(){
	stop();
}
onfocus = function(){
	start();
}
    setInterval(ChangeImg,2000);