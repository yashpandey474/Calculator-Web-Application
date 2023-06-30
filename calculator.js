const express = require("express")
const bodyParser = require("body-parser")

//REPRESENTATION OF EXPRESS MODULE
var app = express()

//PARSE DATA COMING FROM A HTML FOTM
app.use(bodyParser.urlencoded({
    extended: true //ALLOWS US TO POST NESTED OBJECTS
}))

//ROUTE GET METHOD
app.get(
    "/",
    function(request, response){
        //SENDING AN ENTIRE HTML FILE
        //DIRNAME GIVES NAME OF CURRENT DIRECTORY
        response.sendFile(__dirname + "/index.html");
});

//HANDLE POST METHODS AT HOME
app.post(
    "/",
    function(request, response){

        //RETRIEVE THE FORM DATA USING BODY-PARSER
        var num1 = Number(request.body.num1);
        var num2 = Number(request.body.num2);

        var result = num1 + num2


        response.send("Result of calculation = " + result);
    }
)

//GET METHOD FOR BMI CALCULATOR
app.get(
    "/bmicalculator",
    function(request, response){
        response.sendFile(__dirname + "/bmiCalculator.html");
    }
)

//POST METHOD FOR BMI CALCULATION
app.post(
    "/bmicalculator",
    function(request, response){
        var weight = parseFloat(request.body.weight);
        var height = parseFloat(request.body.height);

        var result = weight / (height*height);

        response.send("BMI = " + result);
    }
    
)

app.listen(3000, function(){
    console.log("Server started successfully");
});