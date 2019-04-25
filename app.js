var User = {
    userWood: 0,
    userStone: 0,   
    userCoal: 0,
    userIron: 0,
    userGold: 0,
    userDiamond: 0
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

var UserMineTimes1 = {
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


var IronMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 2000,
    ironTime: 1000,
    goldTime: 7000,
    diamondTime: 8000
}

var GoldMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 1000,
    ironTime: 2000,
    goldTime: 3000,
    diamondTime: 7000
}

var DiamondMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 0,
    ironTime: 1000,
    goldTime: 2000,
    diamondTime: 3000
}

var PurpleMineTimes = {
    woodTime: 0,
    stoneTime: 0,
    coalTime: 0,
    ironTime: 0,
    goldTime: 1000,
    diamondTime: 2000
}

var ownMiner = {
    woodMiner: false,
    stoneMiner: false,
    coalMiner: false,
    ironMiner: false,
    goldMiner: false,
    diamondMiner: false
}

var useMiner = {
    woodMiner: false,
    stoneMiner: false,
    coalMiner: false,
    ironMiner: false,
    goldMiner: false,
    diamondMiner: false
}

var costMiner = {
    woodMiner: {wood: 2},
    stoneMiner: {stone: 2},
    coalMiner: {coal: 2},
    ironMiner: {iron: 2},
    goldMiner: {gold: 2},
    diamondMiner: {diamond: 2}
}

var costMiner1 = {
    woodMiner: {wood: 60, stone: 50, coal: 40, iron: 30, gold: 20, diamond: 10},
    stoneMiner: {wood: 80, stone: 70, coal: 60, iron: 50, gold: 40, diamond: 30},
    coalMiner: {wood: 110, stone: 100, coal: 90, iron: 80, gold: 70, diamond: 60},
    ironMiner: {wood: 150, stone: 140, coal: 130, iron: 120, gold: 110, diamond: 100},
    goldMiner: {wood: 200, stone: 190, coal: 180, iron: 170, gold: 160, diamond: 150},
    diamondMiner: {wood: 260, stone: 250, coal: 240, iron: 230, gold: 220, diamond: 210}
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
    woodAxe: {coal: 1, wood: 1},
    stoneAxe: {coal: 1, stone: 1}, 
    purpleAxe: {coal: 1, gold: 1, diamond: 1},
    ironAxe: {coal: 1, stone:1, iron: 1},
    goldAxe: {coal: 1, gold: 1},
    diamondAxe: {coal: 1, diamond: 1}
}

var costAxe1 = {
    woodAxe: {coal: 5, wood: 20},
    stoneAxe: {coal: 10, wood: 40, stone: 20}, 
    purpleAxe: {coal: 100, wood: 400, gold: 50, diamond: 10},
    ironAxe: {coal: 50, wood: 100, stone:20, iron: 20},
    goldAxe: {coal: 100, wood: 400, gold: 50},
    diamondAxe: {coal: 500, wood: 2000, diamond: 50}
}

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

var Unlock = {
    done: false,
    unlock0: false,
    unlock1: false,
    unlock2: false,
    unlock3: false,
    unlock4: false,
    unlock5: false,
    unlock6: false
}

var width = 0;
var wood_counter = 1;
var stone_counter = 1;
var coal_counter = 1;
var diamond_counter = 1;
var gold_counter = 1;
var iron_counter = 1;

setTimeout(function(){
    odometer.innerHTML = 456;
}, 1000);

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

    Buttons.woodMinerButton.addEventListener('click', function(){clickMiner(ItemNames.wood);});
    Buttons.stoneMinerButton.addEventListener('click', function(){clickMiner(ItemNames.stone);});
    Buttons.coalMinerButton.addEventListener('click', function(){clickMiner(ItemNames.coal);});
    Buttons.ironMinerButton.addEventListener('click', function(){clickMiner(ItemNames.iron);});
    Buttons.goldMinerButton.addEventListener('click', function(){clickMiner(ItemNames.gold);});
    Buttons.diamondMinerButton.addEventListener('click', function(){clickMiner(ItemNames.diamond);});

    Buttons.woodAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.wood); });
    Buttons.stoneAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.stone); });
    Buttons.purpleAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.purple); });
    Buttons.ironAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.iron); });
    Buttons.goldAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.gold); });
    Buttons.diamondAxeButton.addEventListener('click', function(){ clickAxe(ItemNames.diamond); });

    //AutoClicker portion
    setInterval(function(){
        if(useMiner.woodMiner == true && 
            Buttons.woodButton.getAttribute("disabled") == null){
            Buttons.woodButton.click();
            Buttons.woodMinerButton.style.backgroundColor = "LightSkyBlue";
            setTimeout(function(){
                Buttons.woodMinerButton.style.backgroundColor = "transparent";
            }, 100);
        }
        if(useMiner.stoneMiner == true &&
            Buttons.stoneButton.getAttribute("disabled") == null){
            Buttons.stoneButton.click();
            Buttons.stoneMinerButton.style.backgroundColor = "Orange";
            setTimeout(function(){
                Buttons.stoneMinerButton.style.backgroundColor = "transparent";
            }, 100);
        }
        if(useMiner.coalMiner == true &&
            Buttons.coalButton.getAttribute("disabled") == null){
            Buttons.coalButton.click();
            Buttons.coalMinerButton.style.backgroundColor = "MediumSeaGreen";
            setTimeout(function(){
                Buttons.coalMinerButton.style.backgroundColor = "transparent";
            }, 100);
        }
        if(useMiner.ironMiner == true &&
            Buttons.ironButton.getAttribute("disabled") == null){
            Buttons.ironButton.click();
            Buttons.ironMinerButton.style.backgroundColor = "Green";
            setTimeout(function(){
                Buttons.ironMinerButton.style.backgroundColor = "transparent";
            }, 100);
        }
        if(useMiner.goldMiner == true &&
            Buttons.goldButton.getAttribute("disabled") == null){
            Buttons.goldButton.click();
            Buttons.goldMinerButton.style.backgroundColor = "Black";
            setTimeout(function(){
                Buttons.goldMinerButton.style.backgroundColor = "transparent";
            }, 100);
        }
        if(useMiner.diamondMiner == true &&
            Buttons.diamondButton.getAttribute("disabled") == null){
            Buttons.diamondButton.click();
            Buttons.diamondMinerButton.style.backgroundColor = "Turquoise";
            setTimeout(function(){
                Buttons.diamondMinerButton.style.backgroundColor = "transparent";
            }, 100);
        }
    },1000)

    for(var button in Buttons){
        Buttons[button].setAttribute("disabled", true);
    }

    Buttons.woodButton.removeAttribute("disabled");
    setInterval(function(){
        if(!Unlock["done"]){
            unlockItems();
        }
        else{
            return;
        }
    }, 300);

    setMineTimes("User");
}

function unlockItems(){
    if(User.userWood > 2 && Unlock["unlock0"] == false){
        Buttons.stoneButton.removeAttribute("disabled");
        Unlock["unlock0"] = true;
    }
    else if(User.userStone > 0 && !Unlock["unlock1"]){
        Buttons.coalButton.removeAttribute("disabled");
        Buttons.woodMinerButton.removeAttribute("disabled");
        Unlock["unlock1"] = true;
    }
    else if(User.userCoal > 0 && !Unlock["unlock2"]){
        Buttons.ironButton.removeAttribute("disabled");
        Buttons.stoneMinerButton.removeAttribute("disabled");
        Buttons.woodAxeButton.removeAttribute("disabled");
        Unlock["unlock2"] = true;
    }
    else if(User.userIron > 0 && !Unlock["unlock3"]){
        Buttons.goldButton.removeAttribute("disabled");
        Buttons.coalMinerButton.removeAttribute("disabled");
        Buttons.ironMinerButton.removeAttribute("disabled");
        Buttons.stoneAxeButton.removeAttribute("disabled");
        Unlock["unlock3"] = true;
    }
    else if(User.userGold > 0 && !Unlock["unlock4"]){
        Buttons.diamondButton.removeAttribute("disabled");
        Buttons.goldMinerButton.removeAttribute("disabled");
        Buttons.purpleAxeButton.removeAttribute("disabled");
        Unlock["unlock4"] = true;
    }
    else if(User.userDiamond > 0 && !Unlock["unlock5"]){
        Buttons.diamondMinerButton.removeAttribute("disabled");
        Buttons.ironAxeButton.removeAttribute("disabled");
        Unlock["unlock5"] = true;
    }
    else if(ownMiner.woodMiner == true && !Unlock["unlock6"] && Unlock["unlock5"]){
        Buttons.goldAxeButton.removeAttribute("disabled");
        Unlock["unlock6"]= true;
    }
    else if(ownMiner.stoneMiner == true && Unlock["unlock6"]){
        Buttons.diamondAxeButton.removeAttribute("disabled");
        Unlock["done"] = true;
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
    promptCurrent = item + "Axe";
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
        if(promptWindowOpen && item + "Axe" == promptCurrent){
            clickAxe(item);
        }
    }, 1000);
    promptWindowOpen = true;
}

var currentManager; 
function clickMiner(item){
    if(promptWindowOpen == true){
        exitPrompt();
    }
    promptCurrent = item + "Miner";
    if(ownMiner[item + "Miner"] == false){
        document.getElementById('prompt-title').innerHTML = "Buy " + item + " miner";
        promptMaterialAccount("Miner", item);
        document.getElementById('prompt-window').style.display = "inline";
    }
    else{
        document.getElementById('prompt-title').innerHTML = item + " miner";
        promptUse("Miner", item, useMiner[item + "Miner"]);
        document.getElementById('prompt-window').style.display = "inline";
    }
    setTimeout(function(){
        if(promptWindowOpen && item + "Miner" == promptCurrent){
            clickMiner(item);
        }
    }, 1000);
    promptWindowOpen = true;
}

function promptUse(type, item, use){
    document.getElementById('prompt-col').innerHTML = "<img id='prompt-use-img' src=./img/" + item + "-" + uncapitalize(type) + ".png> <br>";
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
        document.getElementById('button-col').className = "col-md-12";
        document.getElementById('button-col').innerHTML = "<button onclick='exitPrompt()'> exit </button>";
        document.getElementById('button-col').style.display = "inline";
    }

    document.getElementById('prompt-window').style.height = (23 + i*7) + "%";
}

// exits popup display from clicking on an Upgrade
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
    updateUI();
    exitPrompt();
}

function useItem(){
    var type = document.getElementById('use').getAttribute("arg1");
    var item = document.getElementById('use').getAttribute("arg2");
    if(capitalize(type) == "Axe"){
        useAxe(item);
    }
    else if(capitalize(type) == "Miner"){
        setMiner(item);
    }
    exitPrompt();
}

function pauseItem(){
    var type = document.getElementById('use').getAttribute("arg1");
    var item = document.getElementById('use').getAttribute("arg2");
    if(capitalize(type) == "Axe"){
        pauseAxe(item);
    }
    else if(capitalize(type) == "Miner"){
        pauseMiner(item);
    }
    exitPrompt();
}

function useAxe(item){
    for(var axe in ItemNames){
        if(axe != "coal"){
            document.getElementById(ItemNames[axe] + "-axe-button").style.backgroundColor = "transparent";
        }
    }
    document.getElementById(uncapitalize(item) + "-axe-button").style.backgroundColor = "Cyan";
    setMineTimes(item);
    currentAxe = item;
}

function pauseAxe(item){
    document.getElementById(uncapitalize(item) + "-axe-button").style.backgroundColor = "transparent";
    setMineTimes("User");
    currentAxe = "User";
}

function setMineTimes(item){
    var list = eval(capitalize(item) + "MineTimes");
    for(var item in list){
        document.getElementById(item.toString()).innerHTML = list[item]/1000;
    }
}

function setMiner(item){
    useMiner[item + "Miner"] = true;
}

function pauseMiner(item){
    useMiner[item + "Miner"] = false;
}

// changes cursor to something else
$('html,body').css('cursor','cell');
$('.ml1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 5000,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 80000,
    easing: "easeOutExpo",
    delay: 1000
  });

document.addEventListener("DOMContentLoaded", function(event) {

    function ground() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#ground", 20, {
          backgroundPosition: "1301px 0px",
          force3D:true,
          rotation:0.01,
          z:0.01,
          autoRound:false,
          ease: Linear.easeNone
        });
  
      return tl;
    }
  
    function clouds() {
  
      var tl = new TimelineMax({
        repeat: -1
      });
  
      tl.to("#clouds", 52, {
        backgroundPosition: "-2247px bottom",
        force3D:true,
        rotation:0.01,
        z:0.01,
        ease: Linear.easeNone
      });
      
      return tl;
    }
  
    var masterTL = new TimelineMax({
      repeat: -1
    });
    
  window.onload = function() {
    
    masterTL
    .add(ground(),0)
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();
  
  };
    
  });
  
