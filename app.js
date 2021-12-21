window.onload=()=>{

function showTime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();


    if(hours===0){
        hours=12;
    }


    let session='AM';

    if(hours>12){
        hours=hours-12;
        session='PM'
    }

    hours=(hours<10)? '0' +hours: hours;
    minutes=(minutes<10)? '0' +minutes: minutes;
    seconds=(seconds<10)? '0' + seconds : seconds;

    let time=hours+':'+minutes+':'+seconds+" "+ session;

    document.querySelector('#myTime').innerText=time;

    setTimeout(showTime,1000);
}
showTime();

}