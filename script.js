document.getElementById('firstBtn').addEventListener('click', function (){
    const mainBlance = getInputFieldValueToNum('Main_blance');
    const inputAmount = input('firstInput');
    if (inputAmount > mainBlance) {
        alert('You Do Not Enough Money');
        return;
    }
    else {

        const NoakhaliAddn = getInputFieldValueToNum('NoakhaliAdd');
        document.getElementById('NoakhaliAdd').innerText = inputAmount + NoakhaliAddn;
        let mainBlancex = mainBlance - inputAmount;
        document.getElementById('Main_blance').innerText = mainBlancex;

        if (inputAmount > 0) {
            let div = document.createElement('div');
            let xx = createTimeAndDateElement();
            div.innerHTML = `
            <div id="CRdiV" class="border p-2 rounded mt-3 text-green-500"> 
                <h1>${inputAmount} Taka is Donated for famine-2024 at Feni, Bangladesh total donated taka ${inputAmount + NoakhaliAddn} <br> ${xx}</h1>
        
            </div>
            `;
            document.getElementById('historySec').appendChild(div);
            document.getElementById('donate1N').classList.remove('hidden');
        };
    };
});

document.getElementById('secondBtn').addEventListener('click', function () {
    const mainBlance = getInputFieldValueToNum('Main_blance');
    const secondInputAmountF = input('secondInputAmount');
    if (secondInputAmountF > mainBlance) {
        alert('You Do Not Enough Money');
        return;
    }
    else {
        const secondFundAdd = getInputFieldValueToNum('SecondFund');
        document.getElementById('SecondFund').innerText = secondInputAmountF + secondFundAdd;
        let mainBlancex = mainBlance - secondInputAmountF;
        document.getElementById('Main_blance').innerText = mainBlancex;
        if (secondInputAmountF > 0) {
            const div = document.createElement('div');
            let xx = createTimeAndDateElement();
            div.innerHTML = `
            <div class="border p-2 rounded mt-3 text-indigo-500"> 
                <h1>${secondInputAmountF} Taka is Donated for Flood Relief in Feni,Bangladesh total donated taka ${secondInputAmountF + secondFundAdd} <br> ${xx}</h1>
            </div>
            `;
            document.getElementById('historySec').appendChild(div);
            document.getElementById('secondSec_PoP').classList.remove('hidden');
        };
    };
});

document.getElementById('thirdBtn').addEventListener('click', function () {
    const mainBlance = getInputFieldValueToNum('Main_blance');
    const thirdInputnum = input('thirdInput');
    if (thirdInputnum > mainBlance) {
        alert('You Do Not Enough Money');
        return;
    }
    else {
        const thirdFundNum = getInputFieldValueToNum('thirdFund');
        document.getElementById('thirdFund').innerText = thirdInputnum + thirdFundNum;

        let mainBlancex = mainBlance - thirdInputnum;
        document.getElementById('Main_blance').innerText = mainBlancex;
        if (thirdInputnum > 0) {
            const div = document.createElement('div');
            let xx = createTimeAndDateElement();
            div.innerHTML = `
            <div class="border p-2 rounded mt-3 text-fuchsia-500"> 
                <h1>${thirdInputnum} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh total donated taka ${thirdInputnum + thirdFundNum} <br> ${xx}</h1>
            </div>
            `;
            document.getElementById('historySec').appendChild(div);
            document.getElementById('thirD_poP_Sec').classList.remove('hidden');
        }

    };

});
//Button Donation
document.getElementById('BtnDonation').addEventListener('click', function () {
    showHidden('donationsec')
});
// button History
document.getElementById('BtnHistory').addEventListener('click', function (event) {
    event.preventDefault();
    showHidden('historySec');
    
});
// Button Congrats!
document.getElementById('First_pop_btn1').addEventListener('click',function(event){
    document.getElementById('donate1N').classList.add('hidden');
});
document.getElementById('pupBtN2').addEventListener('click',function(event){
    document.getElementById('secondSec_PoP').classList.add('hidden');
});
document.getElementById('thIrdPOP_btN').addEventListener('click',function(event){
    document.getElementById('thirD_poP_Sec').classList.add('hidden');
});
// Button Congrats!

function showHidden(id) {
    //hidden all form
    document.getElementById('donationsec').classList.add('hidden');
    document.getElementById('historySec').classList.add('hidden');
    //show only spesific form
    document.getElementById(id).classList.remove('hidden');
};

function getInputFieldValueToNum(id) {
    const valu = document.getElementById(id).value;
    if (typeof valu === 'string') {
        const valuNum = parseFloat(valu);
        return valuNum;
    }
    else {
        const text = document.getElementById(id).innerText;
        const textNum = parseFloat(text);
        return textNum;
    };
};
// Check Validation of input amount
function input(id) {
    const valu = document.getElementById(id).value;
    if (typeof valu === 'string' && /^[0-9]+$/.test(valu)) {
        const valuNum = parseFloat(valu);
        return valuNum;
    }
    else {
        alert('Your Value Is not a number');
        return 0;
    };
};
document.getElementById('bloG').addEventListener('click', function(){
    window.location.href = 'New-folder/indexx.html';
});

function createTimeAndDateElement() {
    const heading = document.createElement('h1');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear().toString().slice(2);
    const timeText = `Time is ${hours}.${minutes}`;
    const dateText = `Date is ${day}/${month}/${year}`;
    heading.innerText = `${timeText} and ${dateText}`;

    return heading.innerText;
}
// Nav Button 
document.getElementById('navButton').addEventListener('click', function(){
    hideAndShow('allNavi');
    hideAndShowzx('navBtnDiv');
    // document.getElementById('navBtnDiv').classList.add('bg-white')
})

function hideAndShow(id){
    if (document.getElementById(id).classList.contains('hidden') === true) {
        document.getElementById(id).classList.remove('hidden');
    }
    else if(document.getElementById(id).classList.contains('hidden') === false){
        document.getElementById(id).classList.add('hidden');
    };
};
function hideAndShowzx(id){
    if (document.getElementById(id).classList.contains('bg-white') === true) {
        document.getElementById(id).classList.remove('bg-white');
        document.getElementById(id).classList.add('bg-pink-50');
    }
    else if(document.getElementById(id).classList.contains('bg-pink-50') === true){
        
        document.getElementById(id).classList.remove('bg-pink-50');
        document.getElementById(id).classList.add('bg-white');
    };
};

