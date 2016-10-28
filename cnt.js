function ago(s) {
		if(s<=59){return Math.floor(s)+" s";}
		else if(s>=60 && s<=3599){min=Math.floor(s/60);sec=s-(min*60);return min+" min "+sec+" s";}
		else{h=Math.floor(s/3600);min=Math.floor((s-(h*3600))/60);sec=Math.floor(s-(h*3600+min*60));return h+"h "+min+"m "+sec+"s";}
}
setInterval(function(){var sec=Math.floor((new Date()-new Date('10/28/2016 11:47:24'))/1000);document.querySelector('.selector').innerHTML=ago(sec);},1000);
