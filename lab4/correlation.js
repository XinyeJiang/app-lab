//Data already collected
//Index in each array corresponds to the Order Number
//So the first order is seasonalDrinkNum[0] and numberOfPeopleInOrder[1]
var seasonalDrinkNum=[0,1,1,4,2,0,1,2,2,4,0,1,1,0,2,1,0,0,2,2]
var numberOfPeopleInOrder=[0,2,3,5,2,3,2,1,3,6,2,1,3,1,4,2,1,2,1,4]

//Form them into a matrix
//Data from the first order is now only data[0][0] & data[1][0]
//where data[0||1][i] is the details for order i 
var data=[seasonalDrinkNum,numberOfPeopleInOrder]


//Simple function to push the new drink order info to the correct arrays
function appendDrinkInfo(numSeasonalDrinks, numP){
    seasonalDrinkNum.push(numSeasonalDrinks)
    numberOfPeopleInOrder.push(numP)
    return 0}

//Core functionality of simple Linear Regression
function linearReg(){
    
    //Variables
    var xyProduct=[]
    var xSquare=[]
    var ySquare=[]
    var Slope,B
    var sumX, sumY, sumXY, sumXX,sumYY
    var numVar
    sumX=0
    sumY=0
    sumXY=0
    sumXX=0
    sumYY=0
    //Now to loop through every order to calculate the needed values
    for(var i=0;i<data[0].length;i++){
        //Need product of X*Y , where X is seasonalDrinkNum number, and Y is numberOfPeopleInOrder
        xyProduct.push(data[0][i]*data[1][i])
        //Need product of X*X or seasonalDrinkNum[i]**2
        xSquare.push(data[0][i]*data[0][i])
        ySquare.push(data[1][i]*data[1][i])
        //Add X,Y,XY,XX to sumX,sumY,sumXY,sumXX variable for each i position
        sumX+=data[0][i]
        sumY+=data[1][i]
        sumXY+=xyProduct[i]
        sumXX+=xSquare[i]
        sumYY+=ySquare[i]
    }
    
    /*
    print("VAR MATH DONE")
    print(xSquare)
    print(xyProduct)
    print(sumX)
    print(sumY)
    print(sumXY)
    print(sumXX) 
    print(sumYY)
    */
        
    //Now to do the real math
    //First get the number of orders again
    var numVar=data[0].length
    //Top is  (NΣXY - (ΣX)(ΣY)) 
    //Top= [(N*summation from i=0..n(Xsubscript i *Ysubscript i))-(summation from i=0..n(X subscript i) -summation from i=0..n(Y subscript i))] 
    var top=((numVar*sumXY)-(sumX*sumY))
    var covx=((numVar*sumXX)-(Math.pow(sumX,2)))
    var covy=((numVar*sumYY)-(Math.pow(sumY,2)))
    var bottom=(Math.sqrt(covx*covy))

    //Slope is top/bottom or (NΣXY - (ΣX)(ΣY)) / (NΣX2 - (ΣX)2)
    Slope=top/bottom
    
    //Now using intercept=(ΣY - b(ΣX)) / N 
    //B=(sumY-Slope*sumX)/numVar
    
    console.log("THIS IS YOUR DATA CORRELATION COEFFIENCIENT")
    console.log(Slope)
    //print(B)
}


//Perform Simple Linear Regression On Data already collected
console.log(data[0])
console.log(data[1])
linearReg()
