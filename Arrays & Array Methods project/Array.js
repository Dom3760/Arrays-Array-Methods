var food = ["hotdog","burito","hamburger","Salami","french fries"]
var drinks = ["water","sprite","coke","pepsi","hot chocolate"]

console.log(food);
push("taco");
console.log(food);

function push(item){
    food[food.length] = item;      
}

pop()
function pop(){
    var foodPop = [];
    food = ["hotdog","burito","hamburger","Salami","french fries"]
    for (i=(food.length - 2); i >= 0; i--)
    {
        foodPop.unshift(food[i]);
    }
    console.log(foodPop);
}

tostring()
function tostring(){
    console.log(food)
}

join()
function join()
{
    var foodjoin = [];
    food = ["hotdog","burito","hamburger","Salami","french fries"]
    for (i=(food.length - 2); i >= 0; i--)
    {
        foodjoin.unshift(food[i],"/");
    }
    console.log(foodjoin);
    console.log(food)
}

concat()
function concat()
{
    var biglist = (food+","+drinks)
    console.log(biglist)
}
//push//
// numbers[food.length]=6
// function()
// {
// numbers()
// }
//pop//

//toString//
// console.log("toString:")
// for(i=0; i<food.length; i++)
// {
//     let tostr = (food[i])
//     console.log (tostr,",")
// }

// //join//
// console.log("Join:")
// for(i=0; i<food.length; i++)
// {
//     let Join1 = (food[i])
//     console.log (Join1,"/")
// }

// //concat//
// console.log("Concat:")
// for (i = 0; i < (food.length + drinks.length) ; i ++)
// {
//     console.log (food[i])
// }

// for (i = 0; i < (food.length + drinks.length) ; i ++)
// {
//     console.log (drinks [i])
// }