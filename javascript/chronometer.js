class Chronometer {
  constructor() {
    this.currentTime=parseInt(0);
    this.intervalId=parseInt(0);
  }
  
  startClick(callback) {
 
    let time=this.currentTime;   
  
    setInterval(() => {     
      this.currentTime++;  
    }, 1000);
  
  
  }



  getMinutes() {
    if (isNaN(this.currentTime)){
      return 0;
    } else {
      return Math.trunc((this.currentTime/60));
    }
  }

  getSeconds() {

    if (isNaN(this.currentTime)){
      return 0;
    } else if (this.currentTime>60){
      return this.currentTime % 60      
    } else { 
      return this.currentTime;
    }
  }


  twoDigitsNumber() {  

    let min=String(this.getMinutes());
    let sec=String(this.getSeconds());

    if (min.length < 2){
      min='0'+min;
      return min;
    } else {
      return min;
    }

    if (sec.length < 2){    // no entiendo que pide exactamente la función
                            // es decir, si, pero ¿no deberia entrar algo como parámetro para convertirlo a 2digit?
      sec='0'+sec;
      return sec;
    } else {
      return sec;
    }   
  }

  stopClick() {
    clearInterval();
  }

  resetClick() {
    clearInterval();
    this.currentTime=0;
  }

  splitClick() {

    let min = String(this.getMinutes());
    let sec = String(this.getSeconds());

    if (min < 10 && sec < 10) {
      return('0'+min+':'+'0'+sec)
    } else if (min < 10 && sec > 10) {
      return('0'+min+':'+sec);
    } else if (min > 10 && sec < 10) {
      return(min+':0'+sec);
    } else {
      return(min+':'+sec);
    }
  }
}

let pp=new Chronometer;

 pp.startClick();

 pp.getMinutes();

 pp.twoDigitsNumber();
