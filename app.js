var width = 0;

var User = {
    userWood: 0,
    userStone: 0,
    userCoal: 0,
    userIron: 0,
    userGold: 0,
    userDiamond: 0
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
    diamondButton: document.getElementById('diamond-button')
}

var UIDisplay = {
    woodAmt: document.getElementById('woodAmt'),
    stoneAmt: document.getElementById('stoneAmt'),
    coalAmt: document.getElementById('coalAmt'),
    ironAmt: document.getElementById('ironAmt'),
    goldAmt: document.getElementById('goldAmt'),
    diamondAmt: document.getElementById('diamondAmt')
}

var ItemNames = {
    wood: 'wood',
    stone: 'stone',
    coal: 'coal',
    iron: 'iron',
    gold: 'gold',
    diamond: 'diamond'
}

var ItemHealths = {
    woodHealth: 0,
    stoneHealth: 3,
    coalHealth: 5,
    ironHealth: 7,
    goldHealth: 9,
    diamondHealth: 11
}

var MineTimes = {
    woodTime: 0,
    stoneTime: 300,
    coalTime: 500,
    ironTime: 700,
    goldTime: 900,
    diamondTime: 1100
}

main();

function main() {
    Buttons.woodButton.addEventListener('click', 
    mine.bind(this, ItemHealths.woodHealth, ItemNames.wood, MineTimes.woodTime));

    Buttons.stoneButton.addEventListener('click', 
    mine.bind(this, ItemHealths.stoneHealth, ItemNames.stone, MineTimes.stoneTime));

    Buttons.coalButton.addEventListener('click', 
    mine.bind(this, ItemHealths.coalHealth, ItemNames.coal, MineTimes.coalTime));

    Buttons.ironButton.addEventListener('click',
    mine.bind(this, ItemHealths.ironHealth, ItemNames.iron, MineTimes.ironTime));

    Buttons.goldButton.addEventListener('click',
    mine.bind(this, ItemHealths.goldHealth, ItemNames.gold, MineTimes.goldTime));

    Buttons.diamondButton.addEventListener('click',
    mine.bind(this, ItemHealths.diamondHealth, ItemNames.diamond, MineTimes.diamondTime));
}

function mine(health, item, time) {
    var counter = 0;
    var getItem = setInterval(function() {
        if (counter < health) {
            if (item != 'wood') {
                updateProgressBar(item, time/1000);
                counter++;
            } else {
                counter++;
            }
        } else {
            if (width >= 100 && item != 'wood') {
                addItemToUser(item)
                clearInterval(getItem);
                updateUI();
                resetProgressBar();
            } else {
                addItemToUser(item)
                clearInterval(getItem);
                updateUI();
            }
        }
    }, time)
}

function addItemToUser(item) {
    if (item == 'wood') {
        User.userWood += 4;
    } else if (item == 'stone') {
        User.userStone++;
    } else if (item =='coal') {
        User.userCoal++;
    } else if (item =='iron') {
        User.userIron++;
    } else if(item == 'gold') {
        User.userGold++;
    } else if (item == 'diamond') {
        User.userDiamond++;
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