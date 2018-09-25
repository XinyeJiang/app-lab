//1
function ReverseWord(word){
    var wordLength=word.length
    var rev=''
    for (var i=1;i<wordLength+1;i++){
    rev+=word[wordLength-i]
    }
    print(rev)
}
ReverseWord("Pancakes")

//2
function consonanats(word){
var cons="bcdfghjklmnpqrstvwxyz"
var total=0
for(var i=0;i<word.length;i++){
    if(cons.indexOf(word[i]) >= 0){
    word.replace(word[i],'')
    total=total+1
    }
}
print(total)
}
consonanats("ssssadd")

//3
function getChange(totalDue,totalGiven){
    return totalGiven-totalDue
}
print(getChange(15,20))


//4
function return3(){
return 3
}

function add3(x){
return x+return3()
}
print(add3(5))

//5
function pyramid(levels){
for(var i=0;i<levels;i++){
    var spaces=(levels - i - 1)
    var stars=(2 * i + 1)
    print(' '.repeat(spaces)+'*'.repeat(stars))
}
}
pyramid(5)