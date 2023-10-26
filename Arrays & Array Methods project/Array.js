var food = ["hotdog","burito","hamburger","Salami","french fries"]
var drinks = ["water","sprite","coke","pepsi","hot chocolate"]

console.log(tostring());
// console.log(food);
push("taco");
// console.log(food);

function push(item){
    food[food.length] = item;      
}

pop()
function pop(){
    var newArray = [];
    // food = ["hotdog","burito","hamburger","Salami","french fries"]
    for(let i = 0; i < food.length-1; i++){
        newArray[i] = food[i];
    }
    return newArray;
    // console.log(foodPop);
}

tostring()
function tostring(){
    let string = "";

    for(let i = 0; i < food.length; i++){
        if(i == 0){
            string = string + food[i];
        }
        else{
            string = string + "," + food[i];

        }
    }

    return string;
}

join("*")
function join(seperator)
{
    var foodjoin = [];
    food = ["hotdog","burito","hamburger","Salami","french fries"]
    for (let i = 0; i < food.length; i++)
    {
        if (i == 0)
        {
            foodjoin = foodjoin + food[i]
        }
        else
        {
            foodjoin = foodjoin+ seperator + food[i]
        }
    }
    console.log(foodjoin)
}

concatArray()
function concatArray()
{
    var con = []
    for(let i = 0; i < food.length; i++)
    {
        if (i == 0)
        {
            con += food[i]
        }
        else
        {
            con += "," + food[i]
        }
    }

    for(i=0; i < drinks.length; i++)
    {
        con += "," + drinks[i] 
    }
    console.log(con)
}