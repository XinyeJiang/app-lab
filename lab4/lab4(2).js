//lab4 
// calculate the correlation of 
//"number of customers" and "quantity of seasonal drinks"

//our observations
const observation = [
    {CustomerCount:1, SeasonalDrinkCount:0},
    {CustomerCount:2, SeasonalDrinkCount:1},
    {CustomerCount:3, SeasonalDrinkCount:1},
    {CustomerCount:5, SeasonalDrinkCount:4},
    {CustomerCount:2, SeasonalDrinkCount:2},
    {CustomerCount:3, SeasonalDrinkCount:0},
    {CustomerCount:2, SeasonalDrinkCount:1},
    {CustomerCount:1, SeasonalDrinkCount:2},
    {CustomerCount:3, SeasonalDrinkCount:2},
    {CustomerCount:6, SeasonalDrinkCount:4},
    {CustomerCount:2, SeasonalDrinkCount:0},
    {CustomerCount:1, SeasonalDrinkCount:1},
    {CustomerCount:3, SeasonalDrinkCount:1},
    {CustomerCount:1, SeasonalDrinkCount:0},
    {CustomerCount:4, SeasonalDrinkCount:2},
    {CustomerCount:2, SeasonalDrinkCount:1},
    {CustomerCount:1, SeasonalDrinkCount:0},
    {CustomerCount:2, SeasonalDrinkCount:0},
    {CustomerCount:1, SeasonalDrinkCount:2},
    {CustomerCount:4, SeasonalDrinkCount:2},];

//number of obvervations
const num = observation.length;
//console.log(num);

//covarience of CustomerCount,SeasonalDrinkCount

const  cov = () => {
    sum1 = 0; //∑xy = x1y1+x2y2+...
    sum2 = 0; //∑x = x1+x2+x3...
    sum3 = 0; //∑y = y1+y2+y3...
    for(i=0;i<observation.length;i++) {
        sum1 = observation[i].CustomerCount * observation[i].SeasonalDrinkCount + sum1;
    }
    //console.log(sum1);
    for(i=0;i<observation.length;i++) {
        sum2 = observation[i].CustomerCount + sum2;
    }
    //console.log(sum2);
    for(i=0;i<observation.length;i++) {
        sum3 = observation[i].SeasonalDrinkCount + sum3;
    }
    //console.log(sum3);
    covxy = sum1* num - sum2*sum3;
    return covxy; //cov = n*∑xy-∑x*∑y
}
console.log('covarience:');
console.log(cov());

//varience of CustomerCount
const  varx = () => {
    sum1 = 0; //∑x^2
    sum2 = 0; //∑x
    for(i=0;i<observation.length;i++) {
        sum1 = Math.pow(observation[i].CustomerCount, 2) + sum1;
    }
    for(i=0;i<observation.length;i++) {
        sum2 = observation[i].CustomerCount + sum2;
    }
    sum1= sum1 * num; 
    sum2 = sum2 * sum2; 
    vax = sum1-sum2;
    return vax; //n*∑x^2 - (∑x)^2
}
console.log('varience of CustomerCount:');
console.log(varx());


//varience of SeasonalDrinkCount
const  vary = () => {
    sum1 = 0;//∑y^2
    sum2 = 0; //∑y
    for(i=0;i<observation.length;i++) {
        sum1 = Math.pow(observation[i].SeasonalDrinkCount, 2) + sum1;
    }
    for(i=0;i<observation.length;i++) {
        sum2 = observation[i].SeasonalDrinkCount + sum2;
    }
    sum1= sum1 * num; 
    sum2 = sum2 * sum2;
    vay = sum1-sum2;
    return vay; //n*∑y^2 - (∑y)^2
}
console.log('varience of SeasonalDrinkCount:');
console.log(vary());

//correlation of CustomerCount and SeasonalDrinkCount
const Correlation = () => { //cov xy / varx*var*y^1/2
    return (   cov() / ((Math.sqrt(varx()*vary())    )));
}

console.log('the Correlation is ');
console.log(Correlation());