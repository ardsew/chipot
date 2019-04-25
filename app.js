var width = 0;
var wood_counter = 1;
var stone_counter = 1;
var coal_counter = 1;
var diamond_counter = 1;
var gold_counter = 1;
var iron_counter = 1;

var User = {
    userWood: 0,
    userStone: 0,
    userCoal: 0,
    userIron: 0,
    userGold: 0,
    userDiamond: 0
}

setTimeout(function(){
    odometer.innerHTML = 456;
}, 1000);

var Progressbars = {
    stonePB: document.getElementById('stone-progress-bar'),
    coalPB: document.getElementById('coal-progress-bar'),
    ironPB: document.getElementById('iron-progress-bar'),
    goldPB: document.getElementById('gold-progress-bar'),
    diamondPB: document.getElementById('diamond-progress-bar')
}

var Buttons = {
    woodButton: document.getElementById('wood-button'),
    stoneButton: document.getElementById('stone-button'),
    coalButton: document.getElementById('coal-button'),
    ironButton: document.getElementById('iron-button'),
    goldButton: document.getElementById('gold-button'),
    diamondButton: document.getElementById('diamond-button'),

    woodMinerButton: document.getElementById('wood-miner-button'),
    stoneMinerButton: document.getElementById('stone-miner-button'),
    coalMinerButton: document.getElementById('coal-miner-button'),
    ironMinerButton: document.getElementById('iron-miner-button'),
    goldMinerButton: document.getElementById('gold-miner-button'),
    diamondMinerButton: document.getElementById('diamond-miner-button'),

    woodAxeButton: document.getElementById('wood-axe-button'),
    stoneAxeButton: document.getElementById('stone-axe-button'),
    purpleAxeButton: document.getElementById('purple-axe-button'),
    ironAxeButton: document.getElementById('iron-axe-button'),
    goldAxeButton: document.getElementById('gold-axe-button'),
    diamondAxeButton: document.getElementById('diamond-axe-button')
}

var UIDisplay = {
    woodAmt: document.getElementById('woodAmt'),
    stoneAmt: document.getElementById('stoneAmt'),
    coalAmt: document.getElementById('coalAmt'),
    ironAmt: document.getElementById('ironAmt'),
    goldAmt: document.getElementById('goldAmt'),
    diamondAmt: document.getElementById('diamondAmt'),

    woodMineTime: document.getElementById('woodMineTime'),
    stoneMineTime: document.getElementById('stoneMineTime'),
    coalMineTime: document.getElementById('coalMineTime'),
    ironMineTime: document.getElementById('ironMineTime'),
    goldMineTime: document.getElementById('goldMineTime'),
    diamondMineTime: document.getElementById('diamondMineTime')
}

var ItemNames = {
    wood: 'wood',
    stone: 'stone',
    coal: 'coal',
    iron: 'iron',
    gold: 'gold',
    diamond: 'diamond',
    purple: 'purple'
}

var ItemHealths = {
    woodHealth: 0,
    stoneHealth: 3,
    coalHealth: 5,
    ironHealth: 7,
    goldHealth: 9,
    diamondHealth: 11
}

var UserMineTimes = {
    woodTime: 0,
    stoneTime: 3000,
    coalTime: 5000,
    ironTime: 7000,
    goldTime: 9000,
    diamondTime: 11000
}

var WoodMineTimes = {
    woodTime: 0,
    stoneTime: 2000,
    coalTime: 4000,
    ironTime: 6000,
    goldTime: 8000,
    diamondTime: 10000
}

var StoneMineTimes = {
    woodTime: 0,
    stoneTime: 1000,
    coalTime: 3000,
    ironTime: 5000,
    goldTime: 7000,
    diamondTime: 9000
}

var goldMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 2000,
    ironTime: 4000,
    goldTime: 6000,
    diamondTime: 8000
}

var DiamondMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 0,
    ironTime: 1000,
    goldTime: 2000,
    diamondTime: 3000
}

var purpleMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 0,
    ironTime: 0,
    goldTime: 1000,
    diamondTime: 2000
}


// The price corresponds to that resource
// Example: wood miner would require 800 wood
var MinerPrice = {
    woodMinerPrice: 0,  //200
    stoneMinerPrice: 0, //150
    coalMinerPrice: 0,  //125
    ironMinerPrice: 0,  //100
    goldMinerPrice: 0,   //75
    diamondMinerPrice: 0 //50
}

var ownMiner = {
    boolWoodMiner: false,
    boolStoneMiner: false,
    boolCoalMiner: false,
    boolIronMiner: false,
    boolGoldMiner: false,
    boolDiamondMiner: false
}

var ownAxe = {
    woodAxe: false,
    stoneAxe: false,
    purpleAxe: false, 
    ironAxe: false, 
    goldAxe: false,
    diamondAxe: false
}

var costAxe = {
    woodAxe: {coal: 1, wood: 1}, //5 20
    stoneAxe: {coal: 10, wood: 40, stone: 2}, //10 40 20
    purpleAxe: {coal: 100, wood: 400, gold: 50, diamond: 10},
    ironAxe: {coal: 50, wood: 100, stone:20, iron: 20},
    goldAxe: {coal: 100, wood: 400, gold: 50},
    diamondAxe: {coal: 500, wood: 2000, diamond: 50}
}

main();

function main() {
    Buttons.woodButton.addEventListener('click', 
    mine.bind(this, ItemHealths.woodHealth, ItemNames.wood, UserMineTimes.woodTime));

    Buttons.stoneButton.addEventListener('click', 
    mine.bind(this, ItemHealths.stoneHealth, ItemNames.stone, UserMineTimes.stoneTime));

    Buttons.coalButton.addEventListener('click', 
    mine.bind(this, ItemHealths.coalHealth, ItemNames.coal, UserMineTimes.coalTime));

    Buttons.ironButton.addEventListener('click',
    mine.bind(this, ItemHealths.ironHealth, ItemNames.iron, UserMineTimes.ironTime));

    Buttons.goldButton.addEventListener('click',
    mine.bind(this, ItemHealths.goldHealth, ItemNames.gold, UserMineTimes.goldTime));

    Buttons.diamondButton.addEventListener('click',
    mine.bind(this, ItemHealths.diamondHealth, ItemNames.diamond, UserMineTimes.diamondTime));

    Buttons.woodMinerButton.addEventListener('click', function(){buyMiner(ItemNames.wood);});
    Buttons.stoneMinerButton.addEventListener('click', function(){buyMiner(ItemNames.stone);});
    Buttons.coalMinerButton.addEventListener('click', function(){buyMiner(ItemNames.coal);});
    Buttons.ironMinerButton.addEventListener('click', function(){buyMiner(ItemNames.iron);});
    Buttons.goldMinerButton.addEventListener('click', function(){buyMiner(ItemNames.gold);});
    Buttons.diamondMinerButton.addEventListener('click', function(){buyMiner(ItemNames.diamond);});

    //AutoClicker portion
    setInterval(function(){
        if(ownMiner.boolWoodMiner == true)
            Buttons.woodButton.click();
        if(ownMiner.boolStoneMiner == true)
            Buttons.stoneButton.click();
        if(ownMiner.boolCoalMiner == true)
            Buttons.coalButton.click();
        if(ownMiner.boolIronMiner == true)
            Buttons.ironButton.click();
        if(ownMiner.boolGoldMiner == true)
            Buttons.goldButton.click();
        if(ownMiner.boolDiamondMiner == true)
            Buttons.diamondButton.click();
    },1000)

    Buttons.woodAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.wood); });
    Buttons.stoneAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.stone); });
    Buttons.purpleAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.purple); });
    Buttons.ironAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.iron); });
    Buttons.goldAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.gold); });
    Buttons.diamondAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.diamond); });

    setMineTimes("User");
}


//This function buys miners and subtracts the needed amount of resource from what user has
//updates UI, changes background color to red
function buyMiner(item){
    var woodRequired = parseInt(MinerPrice.woodMinerPrice) - parseInt(User.userWood);
    var stoneRequired = parseInt(MinerPrice.stoneMinerPrice) - parseInt(User.userStone);
    var coalRequired = parseInt(MinerPrice.coalMinerPrice) - parseInt(User.userCoal);
    var ironRequired = parseInt(MinerPrice.ironMinerPrice) - parseInt(User.userIron);
    var goldRequired = parseInt(MinerPrice.goldMinerPrice) - parseInt(User.userGold);
    var diamondRequired = parseInt(MinerPrice.diamondMinerPrice) - parseInt(User.userDiamond);

    if(item == "wood"){ 
        if(parseInt(User.userWood) >= parseInt(MinerPrice.woodMinerPrice)){
            ownMiner.boolWoodMiner = true;
            User.userWood -= MinerPrice.woodMinerPrice;
            Buttons.woodMinerButton.disabled = true;
            Buttons.woodMinerButton.style.backgroundColor = "red";
            updateUI();
        }else {alert("You need: " + woodRequired + " wood");}
    }

    if(item == "stone"){
        if(parseInt(User.userStone) >= parseInt(MinerPrice.stoneMinerPrice)){
            ownMiner.boolStoneMiner = true;
            User.userStone -= MinerPrice.stoneMinerPrice;
            Buttons.stoneMinerButton.disabled = true;
            Buttons.stoneMinerButton.style.backgroundColor = "red";
            updateUI();
        }else{alert("You need: " + stoneRequired + " stone");}
    }
    
    if(item == "coal"){
        if(parseInt(User.userCoal) >= parseInt(MinerPrice.coalMinerPrice)){
            ownMiner.boolCoalMiner = true;
            User.userCoal -= MinerPrice.coalMinerPrice;
            Buttons.coalMinerButton.disabled = true;
            Buttons.coalMinerButton.style.backgroundColor = "red";
            updateUI();
        }else{alert("You need: " + coalRequired + " coal");}
    }

    if(item == "iron"){
        if(parseInt(User.userIron) >= parseInt(MinerPrice.ironMinerPrice)){
            ownMiner.boolIronMiner = true;
            User.userIron -= MinerPrice.ironMinerPrice;
            Buttons.ironMinerButton.disabled = true;
            Buttons.ironMinerButton.style.backgroundColor = "red";
            updateUI();
        }else{alert("You need: " + ironRequired + " iron");}
    }

    if(item == "gold"){
        if(parseInt(User.userGold) >= parseInt(MinerPrice.goldMinerPrice)){
            ownMiner.boolGoldMiner = true;
            User.userGold -= MinerPrice.goldMinerPrice;
            Buttons.goldMinerButton.disabled = true;
            Buttons.goldMinerButton.style.backgroundColor = "red";
            updateUI();
        }else{alert("You need: " + goldRequired + " gold");}
    }
    
    if(item == "diamond"){
        if(parseInt(User.userDiamond) >= parseInt(MinerPrice.diamondMinerPrice)){
            ownMiner.boolDiamondMiner = true;
            User.userDiamond -= MinerPrice.diamondMinerPrice;
            Buttons.diamondMinerButton.disabled = true;
            Buttons.diamondMinerButton.style.backgroundColor = "red";
            updateUI();
        }else{alert("You need: " + diamondRequired + " diamond");}
    }
}

function mine(health, item, time) {
    setTimeout(function() {
        addItemToUser(item);
        updateUI();
    }, time)
}

function addItemToUser(item) {
    if (item == 'wood') {
        User.userWood += wood_counter;
        wood_counter++;
    } else if (item == 'stone') {
        User.userStone+= stone_counter;
        stone_counter++;
    } else if (item =='coal') {
        User.userCoal+= coal_counter;
        coal_counter++;
    } else if (item =='iron') {
        User.userIron+= iron_counter;
        iron_counter++;
    } else if(item == 'gold') {
        User.userGold+= gold_counter;
        gold_counter++;
    } else if (item == 'diamond') {
        User.userDiamond+= diamond_counter;
        diamond_counter++;
    }
}

function updateUI() {
    UIDisplay.woodAmt.textContent = User.userWood;
    UIDisplay.stoneAmt.textContent = User.userStone;
    UIDisplay.coalAmt.textContent = User.userCoal;
    UIDisplay.ironAmt.textContent = User.userIron;
    UIDisplay.goldAmt.textContent = User.userGold;
    UIDisplay.diamondAmt.textContent = User.userDiamond;
}

function updateProgressBar(name, time) {
    var id = setInterval(frame, time);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            if (name == 'stone') {
            Progressbars.stonePB.style.width = width + "%";
            } else if (name == 'coal') {
                Progressbars.coalPB.style.width = width + "%";
            } else if (name =='iron') {
                Progressbars.ironPB.style.width = width + "%";
            } else if (name =='gold') {
                Progressbars.goldPB.style.width = width + "%";
            } else if (name =='diamond') {
                Progressbars.diamondPB.style.width = width + "%";
            }
        }
    }
}

function resetProgressBar() {
    width = 0;
    Progressbars.stonePB.style.width = width;
    Progressbars.coalPB.style.width = width;
    Progressbars.ironPB.style.width = width;
    Progressbars.goldPB.style.width = width;
    Progressbars.diamondPB.style.width = width;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function uncapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

var promptWindowOpen = false;
var promptCurrent;
var currentAxe; 
function clickAxe(item){
    if(promptWindowOpen == true){
        exitPrompt();
    }
    promptCurrent = item;
    if(ownAxe[item + "Axe"] == false){
        document.getElementById('prompt-title').innerHTML = "Buy " + item + " pickaxe";
        promptMaterialAccount("Axe", item);
        document.getElementById('prompt-window').style.display = "inline";
    }
    else{
        document.getElementById('prompt-title').innerHTML = item + " pickaxe";
        promptUse("Axe", item, currentAxe == item);
        document.getElementById('prompt-window').style.display = "inline";
    }
    setTimeout(function(){
        if(promptWindowOpen && item == promptCurrent){
            clickAxe(item);
        }
    }, 1000);
    promptWindowOpen = true;
}

function promptUse(type, item, use){
    document.getElementById('prompt-col').innerHTML = "<img id='prompt-use-img' src=./img/" + item + "-" + uncapitalize(type) + ".png>";
    document.getElementById('prompt-col').className = 'col-md-12';
    document.getElementById('prompt-col').style.display = 'inline';
    if(use){
        document.getElementById('button-col1').className = "col-md-6";
        document.getElementById('button-col1').innerHTML = '<button id="use" onclick="pauseItem()" arg1="' + uncapitalize(type) + '" arg2="' + item + '">  pause' + '</button>';
        document.getElementById('button-col1').style.display = "inline";
        document.getElementById('button-col2').className = "col-md-6";
        document.getElementById('button-col2').innerHTML = "<button onclick='exitPrompt()'> exit </button>";
        document.getElementById('button-col2').style.display = "inline";
    }
    else{
        document.getElementById('button-col1').className = "col-md-6";
        document.getElementById('button-col1').innerHTML = '<button id="use" onclick="useItem()" arg1="' + uncapitalize(type) + '" arg2="' + item + '">  use' + '</button>';
        document.getElementById('button-col1').style.display = "inline";
        document.getElementById('button-col2').className = "col-md-6";
        document.getElementById('button-col2').innerHTML = "<button onclick='exitPrompt()'> exit </button>";
        document.getElementById('button-col2').style.display = "inline";
    }
    document.getElementById('prompt-window').style.height = "37%";
}

function promptMaterialAccount(type, item){
    //cost
    var prompt = "<p id='prompt-header'> <b>material</b> </p>";
    var list = eval("cost" + capitalize(type))[item + type];
    var i = 0;
    for(var material in list){
        i++;
        prompt +=  "<p id='prompt-text'> <img id='prompt-img' src=./img/" + material + ".png>" 
        + "  " + list[material] + "<br>";
    }
    prompt += "</p>";
    document.getElementById('prompt-col1').innerHTML = prompt;

    //user material
    prompt = "<p id='prompt-header'> <b>account</b> </p>";
    var buy = true;
    for(var material in list){
        if(User["user"+ capitalize(material.toString())] < list[material]){
            prompt +=  "<p id='prompt-text'> <img id='prompt-img' src=./img/" + material + ".png>" + 
            " <span style='color:red'> " + User["user"+ capitalize(material.toString())] + "</span><br>";
            buy = false;
        }
        else{
            prompt +=  "<p id='prompt-text'> <img id='prompt-img' src=./img/" + material + ".png>" + 
            " <span style='color:green'> " + User["user"+ capitalize(material.toString())] + "</span><br>";
        }
    }
    prompt += "</p>";
    document.getElementById('prompt-col2').innerHTML = prompt;
<<<<<<< HEAD

    document.getElementById('prompt-col1').className = 'col-md-6';
    document.getElementById('prompt-col2').className = 'col-md-6';
    document.getElementById('prompt-col1').style.display = 'inline';
    document.getElementById('prompt-col2').style.display = 'inline';

    if(buy){
        document.getElementById('button-col1').className = "col-md-6";
        document.getElementById('button-col1').innerHTML = '<button id="buy" onclick="buyItem()" arg1="' + type + '" arg2="' + item + '"> buy' + '</button>';
        document.getElementById('button-col1').style.display = "inline";
        document.getElementById('button-col2').className = "col-md-6";
        document.getElementById('button-col2').innerHTML = "<button onclick='exitPrompt()'> exit </button>";
        document.getElementById('button-col2').style.display = "inline";
    }
    else{
=======
    if(buy){
    }{
>>>>>>> 59fa2f07aebdbeb406ac2634454d5544169e3f42
        document.getElementById('button-col').className = "col-md-12";
        document.getElementById('button-col').innerHTML = "<button onclick='exitPrompt()'> exit </button>";
        document.getElementById('button-col').style.display = "inline";
    }

    document.getElementById('prompt-window').style.height = (23 + i*7) + "%";
}

function exitPrompt(){
    document.getElementById('button-col').style.display = 'none';
    document.getElementById('button-col1').style.display = 'none';
    document.getElementById('button-col2').style.display = 'none';
    document.getElementById('prompt-window').style.display = 'none';
    document.getElementById('prompt-col1').style.display = 'none';
    document.getElementById('prompt-col2').style.display = 'none';
    document.getElementById('prompt-col').style.display = 'none';
    promptWindowOpen = false;
}

function buyItem(){
    var type = document.getElementById('buy').getAttribute("arg1");
    var item = document.getElementById('buy').getAttribute("arg2");
    var list = eval("cost" + capitalize(type))[item + type];
    for(var material in list){
        User["user"+ capitalize(material.toString())] -= list[material];
    }
    eval("own" + capitalize(type))[item + type] = true;
    exitPrompt();
}

function useItem(){
    var type = document.getElementById('use').getAttribute("arg1");
    var item = document.getElementById('use').getAttribute("arg2");
    if(capitalize(type) == "Axe"){
        useAxe(item);
    }
    exitPrompt();
}

function pauseItem(){
    var type = document.getElementById('use').getAttribute("arg1");
    var item = document.getElementById('use').getAttribute("arg2");
    if(capitalize(type) == "Axe"){
        pauseAxe(item);
    }
    exitPrompt();
}

function useAxe(item){
  setMineTimes(item);
  currentAxe = item;
}

function pauseAxe(item){
    setMineTimes("User");
    currentAxe = "User";
}

function setMineTimes(item){
    var list = eval(capitalize(item) + "MineTimes");
    for(var item in list){
        document.getElementById(item.toString()).innerHTML = list[item]/1000;
    }
}
