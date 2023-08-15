function sumValue(){
    let sum = 0;
    
    return function(num){
        sum += num;
        return sum;
    }

}
const sum = sumValue();
alert(sum(3));
alert(sum(5));
alert(sum(20));

