function speed(speed){
    //2 points for every 5km/s sbove limit
    //speedlimit is 70km/s
    //license suspended after 12 point
    const Limit= 70;
    const unit= km/speed;
    const kmPerdemeritPoint = 5;
    const pointsPerFiveKmoverLimit = +2;
    const maxDemerit = 12;

    if(speed<= limit){
        console.log("Ok")
        return;
    
    }
    if (demeritPoints> maxDemerit){
        console.log("license suspended");
    
    }
    else {
        console.log("points:" + demeritPoints);
    }
   speed(80)
}