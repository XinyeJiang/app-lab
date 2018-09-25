// CoffeeTawk - by Xinye Jiang - applab,lab1,2018

Challenge 1
    1. Larger demand in Shanghai than New York.
    2. The lines are long
    2. takes a minute or more  just to take an order
    3. takes another 5 minutes for them to walk out the door with their beverage.
    4. Payment is quick.
    5. Order-taking process is slow.
    6. Baristas are fast.
    7. But they struggle to keep up with making drinks and handling customer questions.
    8. Most people know what they want before they even walk in the store.
    9. There are still a lot of people that just stand at the register asking questions and holding up the line.
    10. Losing customers who just want to walk in, grab their drinks and go.

Challenge 2: 
    1. Employee training
    2. Reconsider the space that is being used
    3. Allow pre-ordering and prepare things earlier

Challenge 3:
import time

int startTime
int endTime
int avgTime


string drinkType
int quantity

int numberOfCustomers

bool drinksServed

drinkList=[“Coffee”, “Tea” , “Cappuccino”, “Americano”]
avgTime=[3,2,5,4]


def orderMade(orderList[]):
 avgTime=0
 for(int i=0,i<length(orderList), i++){
  if(orderList[i]==drinkList[0]{
   avgTime=avgTime+avgTime[0]}
  if(orderList[i]==drinkList[1]{
   avgTime=avgTime+avgTime[1]}
  if(orderList[i]==drinkList[2]{
   avgTime=avgTime+avgTime[2]}
  if(orderList[i]==drinkList[3]{
   avgTime=avgTime+avgTime[3]}
 }
 return avgTime

def customerOrders():
 orderList=[]
 drinksServed=false
 startTime=time.time()
 quantity=int(input("How many drinks do you want?"))
 for(int i=0,i<quantity,i++){
  drink=input("What drink would you like?")
  if(drink in drinkList){
   orderList.append(drink)
  }
 }
 statAvgTime=orderMade(orderList)

 drinkServed=makeDrinks(orderList)

 if(drinkServed == true){
  endTime=time.time()
  print("Average exepcted time to complete:"+str(avgTime))
  realTime=endTime-startTime
  print("Real time to make "+str(realTime))
 }

