var toppingList = document.getElementById("toppingList");
var total = document.getElementById("totalCost");
var totalToppings = 0;
var toppingPrice = 1;
var cheesePrice = 2;
var totalCheese = 0;
var totalPepperoni = 0;
var totalHam = 0;
var totalBacon = 0;
var totalChicken = 0;
var totalSausage = 0;
var totalBellPepper = 0;
var totalJalapeno = 0;
var totalMushroom = 0;
var totalOlives = 0;
var totalPineapple = 0;
var totalSize = 0;
var sizePrice = 1;
var isUsed = [false, false, false, false, false, false, false, false, false, false];
var interval = setInterval(calcTotal, 100);
var toppingsUsed = "";


function calcTotal() {
    toppingsUsed = "";
    totalToppings = 0;
    changeSauce();
    changeCheese();
    changePepperoni();
    changeHam();
    changeBacon();
    changeChicken();
    changeSausage();
    changeBellPepper();
    changeJalapeno();
    changeMushroom();
    changeOlives();
    changePineapple();
    changeSize();

    var toppings = totalPepperoni + totalHam + totalBacon + totalChicken + totalSausage + totalBellPepper + totalJalapeno + totalMushroom + totalOlives + totalPineapple;

    if (totalToppings == 5) {
        toppings = 3;
        document.getElementById("offer").style.visibility = "visible";
    }
    if (totalToppings > 5) {
        toppings = 3 + (totalToppings - 5);
        document.getElementById("offer").style.visibility = "visible";
    }
    if (totalToppings < 5) {
        document.getElementById("offer").style.visibility = "hidden";
    }

    checkToppings();

    console.log(toppingsUsed);
    toppingList.innerHTML = toppingsUsed;
    total.innerHTML = totalSize + totalCheese + toppings;
}

function checkToppings() {
    if (isUsed[0] == true) {
        toppingsUsed += "Pepperoni<br>";
    }
    if (isUsed[1] == true) {
        toppingsUsed += "Ham<br>";
    }
    if (isUsed[2] == true) {
        toppingsUsed += "Bacon<br>";
    }
    if (isUsed[3] == true) {
        toppingsUsed += "Chicken<br>";
    }
    if (isUsed[4] == true) {
        toppingsUsed += "Sausage<br>";
    }
    if (isUsed[5] == true) {
        toppingsUsed += "Bell Pepper<br>";
    }
    if (isUsed[6] == true) {
        toppingsUsed += "Jalapeno<br>";
    }
    if (isUsed[7] == true) {
        toppingsUsed += "Mushroom<br>";
    }
    if (isUsed[8] == true) {
        toppingsUsed += "Olives<br>";
    }
    if (isUsed[9] == true) {
        toppingsUsed += "Pineapple<br>";
    }
}

function changeSize() {
    totalSize = 0;
    var radioElements = document.getElementsByName("size");
    if (radioElements[0].checked == true) {
        totalSize = sizePrice;
    } else if (radioElements[1].checked == true) {
        totalSize = sizePrice * 2;
    } else if (radioElements[2].checked == true) {
        totalSize = sizePrice * 3;
    }
}

function changeSauce() {
    var radioElements = document.getElementsByName("sauce");
    if (radioElements[0].checked == true) {
        document.getElementById("marinara").style.visibility = "hidden";
        document.getElementById("bbq").style.visibility = "hidden";
    } else if (radioElements[1].checked == true) {
        document.getElementById("marinara").style.visibility = "visible";
        document.getElementById("bbq").style.visibility = "hidden";
    } else if (radioElements[2].checked == true) {
        document.getElementById("marinara").style.visibility = "hidden";
        document.getElementById("bbq").style.visibility = "visible";
    }
}

function changeCheese() {
    totalCheese = 0;
    var radioElements = document.getElementsByName("cheese");
    if (radioElements[0].checked == true) {
        totalCheese = 0;
        document.getElementById("mozzerella").style.visibility = "hidden";
    } else if (radioElements[1].checked == true) {
        totalCheese = cheesePrice / 2;
        document.getElementById("mozzerella").style.visibility = "visible";

    } else {
        totalCheese = cheesePrice;
        document.getElementById("mozzerella").style.visibility = "visible";

    }

}

function changePepperoni() {
    totalPepperoni = 0;
    var radioElements = document.getElementsByName("pepperoni");

    if (radioElements[0].checked == true) {
        totalPepperoni = 0;
        document.getElementById("ripper").style.visibility = "hidden";
        document.getElementById("leftripper").style.visibility = "hidden";
        document.getElementById("rightripper").style.visibility = "hidden";
        isUsed[0] = false;

    } else if (totalToppings == 0) {
        totalPepperoni = 0;
        totalToppings++;
        isUsed[0] = true;
    } else {
        totalPepperoni += toppingPrice;
        totalToppings++;
        isUsed[0] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftripper").style.visibility = "visible";
        document.getElementById("rightripper").style.visibility = "hidden";
        document.getElementById("ripper").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("ripper").style.visibility = "visible";
        document.getElementById("leftripper").style.visibility = "hidden";
        document.getElementById("rightripper").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightripper").style.visibility = "visible";
        document.getElementById("ripper").style.visibility = "hidden";
        document.getElementById("leftripper").style.visibility = "hidden";
    }
}



function changeHam() {
    totalHam = 0;
    var radioElements = document.getElementsByName("ham");

    if (radioElements[0].checked == true) {
        totalHam = 0;
        document.getElementById("ham").style.visibility = "hidden";
        document.getElementById("leftham").style.visibility = "hidden";
        document.getElementById("rightham").style.visibility = "hidden";
        isUsed[1] = false;

    } else if (totalToppings == 0) {
        totalHam = 0;
        totalToppings++;
        isUsed[1] = true;
    } else {
        totalHam += toppingPrice;
        totalToppings++;
        isUsed[1] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftham").style.visiblity = "visible";
        document.getElementById("rightham").style.visibility = "hidden";
        document.getElementById("ham").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("ham").style.visibility = "visible";
        document.getElementById("leftham").style.visibility = "hidden";
        document.getElementById("rightham").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightham").style.visibility = "visible";
        document.getElementById("ham").style.visibility = "hidden";
        document.getElementById("leftham").style.visibility = "hidden";
    }

}

function changeBacon() {
    totalBacon = 0;
    var radioElements = document.getElementsByName("bacon");

    if (radioElements[0].checked == true) {
        totalBacon = 0;
        document.getElementById("bacon").style.visibility = "hidden";
        document.getElementById("leftbacon").style.visibility = "hidden";
        document.getElementById("rightbacon").style.visibility = "hidden";
        isUsed[2] = false;

    } else if (totalToppings == 0) {
        totalPepperoni = 0;
        totalToppings++;
        isUsed[2] = true;
    } else {
        totalPepperoni += toppingPrice;
        totalToppings++;
        isUsed[2] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftbacon").style.visibility = "visible";
        document.getElementById("rightbacon").style.visibility = "hidden";
        document.getElementById("bacon").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("bacon").style.visibility = "visible";
        document.getElementById("leftbacon").style.visibility = "hidden";
        document.getElementById("rightbacon").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightbacon").style.visibility = "visible";
        document.getElementById("bacon").style.visibility = "hidden";
        document.getElementById("leftbacon").style.visibility = "hidden";
    }
}

function changeChicken() {
    totalChicken = 0;
    var radioElements = document.getElementsByName("chicken");

    if (radioElements[0].checked == true) {
        totalChicken = 0;
        isUsed[3] = false;
        document.getElementById("chicken").style.visibility = "hidden";
        document.getElementById("leftchicken").style.visibility = "hidden";
        document.getElementById("rightchicken").style.visibility = "hidden";

    } else if (totalToppings == 0) {
        totalChicken = 0;
        totalToppings++;
        isUsed[3] = true;
    } else {
        totalChicken += toppingPrice;
        totalToppings++;
        isUsed[3] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftchicken").style.visibility = "visible";
        document.getElementById("rightchicken").style.visibility = "hidden";
        document.getElementById("chicken").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("chicken").style.visibility = "visible";
        document.getElementById("leftchicken").style.visibility = "hidden";
        document.getElementById("rightchicken").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightchicken").style.visibility = "visible";
        document.getElementById("chicken").style.visibility = "hidden";
        document.getElementById("leftchicken").style.visibility = "hidden";
    }
}

function changeSausage() {
    totalSausage = 0;
    var radioElements = document.getElementsByName("sausage");

    if (radioElements[0].checked == true) {
        totalSausage = 0;
        document.getElementById("sausage").style.visibility = "hidden";
        document.getElementById("leftsausage").style.visibility = "hidden";
        document.getElementById("rightsausage").style.visibility = "hidden";
        isUsed[4] = false;

    } else if (totalToppings == 0) {
        totalSausage = 0;
        totalToppings++;
        isUsed[4] = true;
    } else {
        totalSausage += toppingPrice;
        totalToppings++;
        isUsed[4] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftsausage").style.visibility = "visible";
        document.getElementById("rightsausage").style.visibility = "hidden";
        document.getElementById("sausage").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("sausage").style.visibility = "visible";
        document.getElementById("leftsausage").style.visibility = "hidden";
        document.getElementById("rightsausage").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightsausage").style.visibility = "visible";
        document.getElementById("sausage").style.visibility = "hidden";
        document.getElementById("leftsausage").style.visibility = "hidden";
    }
}

function changeBellPepper() {
    totalBellPepper = 0;
    var radioElements = document.getElementsByName("bellPepper");

    if (radioElements[0].checked == true) {
        totalBellPepper = 0;
        isUsed[5] = false;
        document.getElementById("pepper").style.visibility = "hidden";
        document.getElementById("leftpepper").style.visibility = "hidden";
        document.getElementById("rightpepper").style.visibility = "hidden";

    } else if (totalToppings == 0) {
        totalBellPepper = 0;
        totalToppings++;
        isUsed[5] = true;
    } else {
        totalBellPepper += toppingPrice;
        totalToppings++;
        isUsed[5] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftpepper").style.visibility = "visible";
        document.getElementById("rightpepper").style.visibility = "hidden";
        document.getElementById("pepper").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("pepper").style.visibility = "visible";
        document.getElementById("leftpepper").style.visibility = "hidden";
        document.getElementById("rightpepper").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightpepper").style.visibility = "visible";
        document.getElementById("pepper").style.visibility = "hidden";
        document.getElementById("leftpepper").style.visibility = "hidden";
    }
}

function changeJalapeno() {
    totalJalapeno = 0;
    var radioElements = document.getElementsByName("jalapeno");

    if (radioElements[0].checked == true) {
        totalJalapeno = 0;
        document.getElementById("japlapeno").style.visibility = "hidden";
        document.getElementById("leftjaplapeno").style.visibility = "hidden";
        document.getElementById("rightjaplapeno").style.visibility = "hidden";
        isUsed[6] = false;

    } else if (totalToppings == 0) {
        totalJalapeno = 0;
        totalToppings++;
        isUsed[6] = true;
    } else {
        totalJalapeno += toppingPrice;
        totalToppings++;
        isUsed[6] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftjaplapeno").style.visibility = "visible";
        document.getElementById("rightjaplapeno").style.visibility = "hidden";
        document.getElementById("japlapeno").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("japlapeno").style.visibility = "visible";
        document.getElementById("leftjaplapeno").style.visibility = "hidden";
        document.getElementById("rightjaplapeno").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightjaplapeno").style.visibility = "visible";
        document.getElementById("japlapeno").style.visibility = "hidden";
        document.getElementById("leftjaplapeno").style.visibility = "hidden";
    }

}


function changeMushroom() {
    totalMushroom = 0;
    var radioElements = document.getElementsByName("mushroom");

    if (radioElements[0].checked == true) {
        totalMushroom = 0;
        document.getElementById("shroom").style.visibility = "hidden";
        document.getElementById("leftshroom").style.visibility = "hidden";
        document.getElementById("rightshroom").style.visibility = "hidden";
        isUsed[7] = false;

    } else if (totalToppings == 0) {
        totalMushroom = 0;
        totalToppings++;
        isUsed[7] = true;
    } else {
        totalMushroom += toppingPrice;
        totalToppings++;
        isUsed[7] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftshroom").style.visibility = "visible";
        document.getElementById("rightshroom").style.visibility = "hidden";
        document.getElementById("shroom").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("shroom").style.visibility = "visible";
        document.getElementById("leftshroom").style.visibility = "hidden";
        document.getElementById("rightshroom").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightshroom").style.visibility = "visible";
        document.getElementById("shroom").style.visibility = "hidden";
        document.getElementById("leftshroom").style.visibility = "hidden";
    }

}

function changeOlives() {
    totalOlives = 0;
    var radioElements = document.getElementsByName("olives");

    if (radioElements[0].checked == true) {
        totalOlives = 0;
        isUsed[8] = false;

        document.getElementById("olive").style.visibility = "hidden";
        document.getElementById("leftolive").style.visibility = "hidden";
        document.getElementById("rightolive").style.visibility = "hidden";
    } else if (totalToppings == 0) {
        totalOlives = 0;
        totalToppings++;
        isUsed[8] = true;
    } else {
        totalOlives += toppingPrice;
        totalToppings++;
        isUsed[8] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftolive").style.visibility = "visible";
        document.getElementById("rightolive").style.visibility = "hidden";
        document.getElementById("olive").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("olive").style.visibility = "visible";
        document.getElementById("leftolive").style.visibility = "hidden";
        document.getElementById("rightolive").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightolive").style.visibility = "visible";
        document.getElementById("olive").style.visibility = "hidden";
        document.getElementById("leftolive").style.visibility = "hidden";
    }
}

function changePineapple() {
    totalPineapple = 0;
    var radioElements = document.getElementsByName("pineapple");

    if (radioElements[0].checked == true) {
        totalPineapple = 0;
        document.getElementById("pine").style.visibility = "hidden";
        document.getElementById("leftpine").style.visibility = "hidden";
        document.getElementById("rightpine").style.visibility = "hidden";
        isUsed[9] = false;

    } else if (totalToppings == 0) {
        totalPineapple = 0;
        totalToppings++;
        isUsed[9] = true;
    } else {
        totalPineapple += toppingPrice;
        totalToppings++;
        isUsed[9] = true;
    }
    if (radioElements[1].checked == true) {
        document.getElementById("leftpine").style.visibility = "visible";
        document.getElementById("rightpine").style.visibility = "hidden";
        document.getElementById("pine").style.visibility = "hidden";
    }
    if (radioElements[2].checked == true) {
        document.getElementById("pine").style.visibility = "visible";
        document.getElementById("leftpine").style.visibility = "hidden";
        document.getElementById("rightpine").style.visibility = "hidden";
    }

    if (radioElements[3].checked == true) {
        document.getElementById("rightpine").style.visibility = "visible";
        document.getElementById("pine").style.visibility = "hidden";
        document.getElementById("leftpine").style.visibility = "hidden";
    }
}
var cheesey = document.getElementsByName("cheese")

var chicken = document.getElementsByName("chicken");

var pepperoni = document.getElementsByName("pepperoni");

var bacon = document.getElementsByName("bacon");

var ham = document.getElementsByName("ham");

var chicken = document.getElementsByName("chicken");

var sausage = document.getElementsByName("sausage");

var bellpep = document.getElementsByName("bellPepper");

var jalapeno = document.getElementsByName("jalapeno");

var mushroom = document.getElementsByName("mushroom");

var olives = document.getElementsByName("olives");

var pine = document.getElementsByName("pineapple");

var sauceyWench = document.getElementsByName('sauce');

function bbq() {

    var radioElements = document.getElementsByName("premade");

    if (radioElements[0].checked == true) {
        pepperoni[0].checked = true;
        chicken[2].checked = true;
        bacon[2].checked = true;
        ham[2].checked = true;
        sausage[2].checked = true;
        bellpep[0].checked = true;
        jalapeno[0].checked = true;
        mushroom[0].checked = true;
        olives[0].checked = true;
        cheesey[1].checked = true;
        sauceyWench[2].checked = true;
        pine[0].checked = true;

    }
}

function meatLovers() {

    var radioElements = document.getElementsByName("premade");

    if (radioElements[1].checked == true) {
        pepperoni[2].checked = true;
        chicken[2].checked = true;
        bacon[2].checked = true;
        ham[2].checked = true;
        sausage[2].checked = true;
        bellpep[0].checked = true;
        jalapeno[0].checked = true;
        mushroom[0].checked = true;
        olives[0].checked = true;
        cheesey[1].checked = true;
        sauceyWench[1].checked = true;
        pine[0].checked = true;
    }
}

function ripperoni() {

    var radioElements = document.getElementsByName("premade");

    if (radioElements[2].checked == true) {
        pepperoni[2].checked = true;
        chicken[0].checked = true;
        bacon[0].checked = true;
        ham[0].checked = true;
        sausage[0].checked = true;
        bellpep[0].checked = true;
        jalapeno[0].checked = true;
        mushroom[0].checked = true;
        olives[0].checked = true;
        cheesey[1].checked = true;
        sauceyWench[1].checked = true;
        pine[0].checked = true;

    }
}

function primeMeat() {

    var radioElements = document.getElementsByName("premade");

    if (radioElements[3].checked == true) {
        pepperoni[2].checked = true;
        chicken[2].checked = true;
        bacon[2].checked = true;
        ham[2].checked = true;
        sausage[2].checked = true;
        bellpep[2].checked = true;
        jalapeno[2].checked = true;
        mushroom[0].checked = true;
        olives[0].checked = true;
        cheesey[1].checked = true;
        sauceyWench[1].checked = true;
        pine[0].checked = true;
    }
}

function custom() {

    var radioElements = document.getElementsByName("premade");

    if (radioElements[4].checked == true) {
        pepperoni[0].checked = true;
        chicken[0].checked = true;
        bacon[0].checked = true;
        ham[0].checked = true;
        sausage[0].checked = true;
        bellpep[0].checked = true;
        jalapeno[0].checked = true;
        mushroom[0].checked = true;
        olives[0].checked = true;
        cheesey[0].checked = true;
        sauceyWench[0].checked = true;

        pine[0].checked = true;
    }
}

function cheese() {

    var radioElements = document.getElementsByName("premade");

    if (radioElements[5].checked == true) {
        pepperoni[0].checked = true;
        chicken[0].checked = true;
        bacon[0].checked = true;
        ham[0].checked = true;
        sausage[0].checked = true;
        bellpep[0].checked = true;
        jalapeno[0].checked = true;
        mushroom[0].checked = true;
        olives[0].checked = true;
        cheesey[2].checked = true;
        sauceyWench[1].checked = true;
        pine[0].checked = true;
    }
}