const fillGasTank = (gallons) => {
    if (gallons > 15) {
        console.log("You cannot add this much gas to the tank")
    }
    else {
        console.log(`I filled the tank with ${gallons} of gas`)
}
    }

fillGasTank(6)
fillGasTank(20)



/* Since the minion needs information from you to do its job, you need to define the parameter of gallons inside the parenthesis. When you do that successfully, run the code and the minion will let you know when it completes the task.

Now change the argument value. It is currently 15. Change it to any other number and see how the behavior of the function changes when the argument does.

Helpful hint
You can expand the hints below if you are stuck and don't know what to do. Make sure you try a few times and fail, and then talk with your teammates before looking at the hints.

Hint: Function with parameter defined */

/* Now modify the instructions for the task. 
Use an if..else block of code to prevent the function from filling up the gas tank of the value of the parameter is greater than 15. 
If it is greater, log the following message to the console.*/