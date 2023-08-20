// Main pages for appearing on clicking the next bubtton
const mainPersonalForm = document.querySelector('.main-personal-info');
const mainSelectPlan = document.querySelector('.main-select-plan');
const mainAddOns = document.querySelector('.main-add-ons'); 
const mainSummaryPage = document.querySelector('.main-finish-up');
const mainThanksPage  = document.querySelector('.main-thank-you')
// Form element
const formValidation = document.querySelector('.form-input'); // This is main form tag
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const numberInput = document.querySelector('.number-input');
// Next and previous button
const nextPage = document.querySelector('.Next-button')
const previousPage = document.querySelector('.Previous-button')

// Select plans form
const plan1 = document.querySelector('.option1');
const plan2 = document.querySelector('.option2');
const plan3 = document.querySelector('.option3');
// Toggle elements
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
// Switch button element
const parentToggle = document.querySelector(".toggleMonthOrYear");
const Switch = document.querySelector('.switch');

// Add ons function elements 
const selectionForm = document.querySelector('.form-select');
const selectOption1 = document.querySelector("#option1");
const selectOption2 = document.querySelector('#option2');
const selectOption3 = document.querySelector('#option3');


// Next Buttons
const personalInfo = document.querySelector('#form-step1');
const plansToSelect = document.querySelector('#plan');
const add_Ons = document.querySelector('#addons');
const finishUp = document.querySelector('#finishup');

const addOns = document.querySelectorAll('.add-on-name');
const addOnsPrice = document.querySelectorAll('.addon-price');

const selection1 = document.querySelector('.selection1');
const selection2 = document.querySelector('.selection2')
const selection3 = document.querySelector('.selection3')

function multiStepForm(){
    const nButton = document.querySelectorAll('.Next-button');
    const pButton = document.querySelectorAll('.Previous-button');
    const stepOne = document.querySelector('.one');
    const stepTwo = document.querySelector('.two');
    const stepThree = document.querySelector('.three')
    const stepFour = document.querySelector('.four')

    nButton.forEach(next => {
        next.addEventListener('click', (e) => {
            var validInput = validateInput();
            if(e.target === nButton[0] || e.target === nButton[0].childNodes[0]){
                if(validInput){
                    mainPersonalForm.style = "display:none";
                    mainSelectPlan.style = "display:flex";
                    stepOne.style.backgroundColor = 'transparent';
                    stepTwo.style.backgroundColor = 'hsl(231, 100%, 99%)';
                    localStorage.setItem('duration', 'Monthly');
                };
            }
            else if(e.target === nButton[1] || e.target === nButton[1].childNodes[0]){
                mainSelectPlan.style = "display:none";
                mainAddOns.style =  "display:flex";
                stepTwo.style.backgroundColor = 'transparent';
                stepThree.style.backgroundColor = 'hsl(231, 100%, 99%)';
            }
            else if (e.target === nButton[2] || e.target === nButton[2].childNodes[0]){
                mainAddOns.style = 'display:none';
                mainSummaryPage.style = 'display:flex'
                stepThree.style.backgroundColor = 'transparent';
                stepFour.style.backgroundColor = 'hsl(231, 100%, 99%)';
                summaryPage();
            }
            else if (e.target === nButton[3] || e.target === nButton[3].childNodes[0]){
                mainSummaryPage.style = 'display:none';
                mainThanksPage.style = 'display:flex'
                localStorage.clear()
            }

        })
    });

    pButton.forEach(prev => {
        prev.addEventListener('click', (e) => {
            
            if(e.target === pButton[0] || e.target === pButton[0].childNodes[0]){
                mainPersonalForm.removeAttribute('style');
                mainSelectPlan.style = "display:none";
                stepTwo.style.backgroundColor = 'transparent';
                stepOne.style.backgroundColor = 'hsl(231, 100%, 99%)';
            }
            else if (e.target === pButton[1] || e.target === pButton[1].childNodes[0]){
                mainAddOns.style = 'display:none';
                mainSelectPlan.style = "display:flex";
                stepThree.style.backgroundColor = 'transparent';
                stepTwo.style.backgroundColor = 'hsl(231, 100%, 99%)';
            }
            else if (e.target === pButton[2] || e.target === pButton[2].childNodes[0]){
                mainAddOns.style = "display:flex";
                mainSummaryPage.style = "display:none";
                stepFour.style.backgroundColor = 'transparent';
                stepThree.style.backgroundColor = 'hsl(231, 100%, 99%)';
            }
        })
    })
}

function selectPlans (){
    const parentOption = document.querySelectorAll('.options')
    const Switch = document.querySelector('.switch')

    // Elements that is used to change the behaviour 
    const hiddenP = document.querySelectorAll('.months-free')
    const namePrice = document.querySelectorAll('.nameprice')
    const arcadeText = namePrice[0].childNodes[1];
    const advance = namePrice[1].childNodes[1];
    const pro = namePrice[2].childNodes[1];
    const planPrice = document.querySelectorAll('.plan-price');

    parentOption.forEach(plans => {
        plans.addEventListener('click', (e) => {
            if (parentOption[0].childNodes[1]){
                if (e.target === plan1){
                    plan1.style.borderColor = "blue";
                    localStorage.setItem('plan', 'Arcade');
                    localStorage.setItem('ArcadePrice', 9)//planPrice[0].textContent)
                }
                else{
                    plan1.style = "border-color:none";
                    localStorage.removeItem('plan');
                    localStorage.removeItem('ArcadePrice');
                }
            }
            if (parentOption[0].childNodes[3]){
                if (e.target === plan2){
                    plan2.style.borderColor = "blue";
                    localStorage.setItem('plan2', 'Advanced');
                    localStorage.setItem('AdvancePrice', 12)//planPrice[1].textContent)
                }
                else{
                    plan2.style = "border-color:none";
                    localStorage.removeItem('plan2');
                    localStorage.removeItem('AdvancePrice');
                }
            }
            if (parentOption[0].childNodes[5]){
                if (e.target === plan3){
                    plan3.style.borderColor = "blue";
                    localStorage.setItem('plan3', 'Pro');
                    localStorage.setItem('ProPrice', 15)//planPrice[2].textContent)
                }
                else{
                    plan3.style = "border-color:none";
                    localStorage.removeItem('plan3');
                    localStorage.removeItem('ProPrice')
                }
            }
        });
    });
    Switch.addEventListener('change', (e) => {
        if (Switch.childNodes[3].dataset.slider ===  "0"){
            
            yearly.style.color = "hsl(213, 96%, 18%)";
            monthly.style.color = "hsl(231, 11%, 63%)";
            Switch.childNodes[3].dataset.slider = 1;

            // moves text to bottom 15px
            addClass(arcadeText, 'arc-adv-pro-text');
            addClass(advance, 'arc-adv-pro-text');
            addClass(pro, 'arc-adv-pro-text');

            // increases the height of the div
            addClass(plan1, 'arc-adv-pro')
            addClass(plan2, 'arc-adv-pro')
            addClass(plan3, 'arc-adv-pro')

            // Display the hidden text
            addClass(hiddenP[0], 'month-free-on-toggle');
            addClass(hiddenP[1], 'month-free-on-toggle');
            addClass(hiddenP[2], 'month-free-on-toggle');
            // changes plans price
            planPrice[0].textContent = "$90/yr";
            planPrice[1].textContent = "$120/yr";
            planPrice[2].textContent = "$150/yr"

            addOnsPrice[0].textContent = "$10/yr";
            addOnsPrice[1].textContent = "$20/yr";
            addOnsPrice[2].textContent = "$20/yr";
            // add to local storage
            localStorage.setItem('duration', 'Yearly');
            if(localStorage.getItem('ArcadePrice')){
                localStorage.setItem('ArcadePrice', 90)//planPrice[0].textContent);
            }
            if(localStorage.getItem('AdvancePrice')){
                localStorage.setItem('AdvancePrice', 120)//planPrice[1].textContent);
            }
            if(localStorage.getItem('ProPrice')){
                localStorage.setItem('ProPrice', 150)//planPrice[2].textContent);
            }
        }
        else if (Switch.childNodes[3].dataset.slider !== "0"){
            yearly.style.color = "none";
            monthly.style.color = "hsl(213, 96%, 18%)";
            localStorage.setItem('duration', 'Monthly')
            Switch.childNodes[3].dataset.slider = 0;

            removeClass(plan1, 'arc-adv-pro');
            removeClass(plan2, 'arc-adv-pro')
            removeClass(plan3, 'arc-adv-pro')

            removeClass(arcadeText, 'arc-adv-pro-text');
            removeClass(advance, 'arc-adv-pro-text');
            removeClass(pro, 'arc-adv-pro-text');

            removeClass(hiddenP[0], 'month-free-on-toggle');
            removeClass(hiddenP[1], 'month-free-on-toggle');
            removeClass(hiddenP[2], 'month-free-on-toggle');

            planPrice[0].textContent = "$9/mo";
            planPrice[1].textContent = "$12/mo";
            planPrice[2].textContent = "$15/mo";

            addOnsPrice[0].textContent = "$1/mo";
            addOnsPrice[1].textContent = "$2/mo";
            addOnsPrice[2].textContent = "$1/mo"


            if(localStorage.getItem('ArcadePrice')){
                localStorage.setItem('ArcadePrice', 9)//planPrice[0].textContent);
            }
            if(localStorage.getItem('AdvancePrice')){
                localStorage.setItem('AdvancePrice', 12)//planPrice[1].textContent);
            }
            if(localStorage.getItem('ProPrice')){
                localStorage.setItem('ProPrice', 15)//planPrice[2].textContent);
            }
        }
    });
    function addClass(elm, name){
        elm.classList.add(name);
    }
    function removeClass(elm, name){
        elm.classList.remove(name)
    }
}
selectPlans();

// This function here will add extra add ons to account
function addExtraFunction(){
    const selectionForm = document.querySelector('.form-select');
    const selectOption1 = document.querySelector("#option1");
    const selectOption2 = document.querySelector('#option2');
    const selectOption3 = document.querySelector('#option3');

    [selectOption1,selectOption2,selectOption3].forEach(mark => {
        mark.addEventListener('change', (e) => {
            if (e.target === selectionForm.childNodes[1].childNodes[1]){
                if(selectOption1.checked){
                    localStorage.setItem('addonService', addOns[0].textContent);
                    selectionForm.childNodes[1].style.outline = "1px solid blue";
                    if (localStorage.getItem('duration') === 'Monthly'){
                        localStorage.setItem('ServicePrice', 1);
                    }
                    else if (localStorage.getItem('duration') === 'Yearly'){
                        localStorage.setItem('ServicePrice', 10);
                    }
                }
                else{
                    localStorage.removeItem('addonService');
                    localStorage.removeItem('ServicePrice');
                    selectionForm.childNodes[1].style.outline = "1px solid hsl(206, 94%, 87%)";
                    //selection1.style.display = "none"
                }
            }
            if (e.target === selectionForm.childNodes[3].childNodes[1]){
                if(selectOption2.checked){
                    localStorage.setItem('addonStorage', addOns[1].textContent);
                    //localStorage.setItem('StoragePrice', 2);
                    selectionForm.childNodes[3].style.outline = "1px solid blue";

                    if (localStorage.getItem('duration') === 'Monthly'){
                        localStorage.setItem('StoragePrice', 2);
                    }
                    else if(localStorage.getItem('duration') === 'Yearly'){
                        localStorage.setItem('StoragePrice', 20);
                    }
                }
                else{
                    localStorage.removeItem('addonStorage');
                    localStorage.removeItem('StoragePrice');
                    selectionForm.childNodes[3].style.outline = "1px solid hsl(206, 94%, 87%)";
                    //selection2.style.display = "none"
                }
                
            }
            if (e.target === selectionForm.childNodes[5].childNodes[1]){
                if(selectOption3.checked){
                    localStorage.setItem('addonCustProfile', addOns[2].textContent);
                    //localStorage.setItem('CustProfile', 1);
                    selectionForm.childNodes[5].style.outline = "1px solid blue";

                    if (localStorage.getItem('duration') === 'Monthly'){
                        localStorage.setItem('CustProfile', 1);
                    }
                    else if (localStorage.getItem('duration') === 'Yearly'){
                        localStorage.setItem('CustProfile', 10);
                    }
                }
                else{
                    localStorage.removeItem('addonCustProfile');
                    localStorage.removeItem('CustProfile')
                    selectionForm.childNodes[5].style.outline = "1px solid hsl(206, 94%, 87%)";
                    //selection3.style.display = "none"
                }
                
            }
        })
    })
}

addExtraFunction()
// dynamically generated summary page 

function summaryPage (){
    // Text from the div
    const subscriptionPlan = document.querySelector('.subs-plan');
    const subscriptionPrice = document.querySelector('.subs-price');
    const subscriptionDuration = document.querySelector('.duration-of-plan');

    const addServiceText = document.querySelector('.addon-select');
    const addStorageText = document.querySelector('.add-on-selection');
    const addCusProText = document.querySelector('.add-on-customize');

    const addServicePrice = document.querySelector('.add-select-price');
    const addStoragePrice = document.querySelector('.add-on-selection2');
    const addCusProPrice = document.querySelector('.add-on-custPrice');

    const totalPrice = document.querySelector('.amount');


    // values of plan from local storage 
    const arcPlan = localStorage.getItem('plan');
    const advPlan = localStorage.getItem('plan2');
    const proPlan = localStorage.getItem('plan3')

    const durations = localStorage.getItem('duration');

    const arcPrice = localStorage.getItem('ArcadePrice');
    const adPrice = localStorage.getItem('AdvancePrice');
    const proPrice = localStorage.getItem('ProPrice');

    // values of addons from local storage
    const addService = localStorage.getItem('addonService');
    const servicePrice = localStorage.getItem('ServicePrice');

    const addStorage = localStorage.getItem('addonStorage');
    const storagePrice = localStorage.getItem('StoragePrice');

    const addCustomePro = localStorage.getItem('addonCustProfile');
    const customeProPrice = localStorage.getItem('CustProfile');

    if (arcPlan || arcPrice){

        subscriptionPlan.textContent = arcPlan;
        //subscriptionPrice.textContent = arcPrice;
        subscriptionDuration.innerHTML = `(${durations})`;
        if(durations === "Monthly"){
            subscriptionPrice.textContent = `$${arcPrice}/mo`;
            
        }
        else {
            subscriptionPrice.textContent = `$${arcPrice}/year`;
        }
        calculatePrice(arcPlan, customeProPrice, storagePrice, servicePrice);
    }

    if (advPlan || adPrice){
        subscriptionPlan.textContent = advPlan;
        //subscriptionPrice.textContent = adPrice;
        subscriptionDuration.innerHTML = `(${durations})`;
        if(durations === "Monthly"){
            subscriptionPrice.textContent = `$${adPrice}/mo`;
            
        }
        else {
            subscriptionPrice.textContent = `$${adPrice}/year`;
        }
        calculatePrice(advPlan, servicePrice, storagePrice, customeProPrice);
        
    }
    if (proPlan || proPrice){
        subscriptionPlan.textContent = proPlan;
        //subscriptionPrice.textContent = proPrice;
        subscriptionDuration.innerHTML = `(${durations})`;
        if(durations === "Monthly"){
            subscriptionPrice.textContent = `$${proPrice}/mo`;
            
        }
        else {
            subscriptionPrice.textContent = `$${proPrice}/year`;
        }
        calculatePrice(proPlan, customeProPrice, storagePrice, servicePrice)
    }

    if (addService || servicePrice){
        selection1.style.display = "flex";
        addServiceText.textContent = addService;
        //addServicePrice.textContent = servicePrice;
        if(durations === "Monthly"){
            addServicePrice.textContent = `$${servicePrice}/mo`;
        }
        else {
            addServicePrice.textContent = `$${servicePrice}/year`;
        }
    }
    if (addStorage || storagePrice){
        selection2.style.display = "flex";
        addStorageText.textContent = addStorage;
        //addStoragePrice.textContent = storagePrice;
        if(durations === "Monthly"){
            addStoragePrice.textContent = `$${storagePrice}/mo`;
        }
        else {
            addStoragePrice.textContent = `$${storagePrice}/year`;
        }
    }
    if (addCustomePro || customeProPrice){
        selection3.style.display = "flex";
        addCusProText.textContent = addCustomePro;
        //addCusProPrice.textContent = customeProPrice;
        if(durations === "Monthly"){
            addCusProPrice.textContent = `$${customeProPrice}/mo`;
        }
        else {
            addCusProPrice.textContent = `$${customeProPrice}/year`;
        }
    }
    

    function calculatePrice(plan, addSERVICE, addSTORAGE, addPROFILE){
        if(plan === arcPlan){
            if(addSERVICE === null){
                addSERVICE = 0;
                selection1.style.display = "none"
            }
            else if (addSTORAGE === null){
                addSTORAGE = 0;
                selection2.style.display = "none"
            }
            else if (addPROFILE === null){
                addPROFILE = 0;
                selection3.style.display = "none"
            }
            total = parseInt(arcPrice) + parseInt(addPROFILE) + parseInt(addSTORAGE) + parseInt(addSERVICE);
            totalPrice.textContent = `$${total}/${durations}`;
        }
        else if (plan === advPlan){
            if(addSERVICE === null){
                addSERVICE = 0;
                selection1.style.display = "none"
            }
            else if (addSTORAGE === null){
                addSTORAGE = 0;
                selection2.style.display = "none"
            }
            else if (addPROFILE === null){
                addPROFILE = 0;
                selection3.style.display = "none"
            }
            total = parseInt(adPrice) + parseInt(addPROFILE) + parseInt(addSTORAGE) + parseInt(addSERVICE);
            totalPrice.textContent = `$${total}/${durations}`
        }
        else if(plan === proPlan){
            if(addSERVICE === null){
                addSERVICE = 0;
                selection1.style.display = "none"
            }
            else if (addSTORAGE === null){
                addSTORAGE = 0;
                selection2.style.display = "none"
            }
            else if (addPROFILE === null){
                addPROFILE = 0;
                selection3.style.display = "none"
            }
            total = parseInt(proPrice) + parseInt(addPROFILE) + parseInt(addSTORAGE) + parseInt(addSERVICE);
            totalPrice.textContent = `$${total}/${durations}`
        }
    }
    
}


// Function that validates if inputs are valid or not 
function validateInput(){
    // Input form elements 
    const name = nameInput;
    const email = emailInput;
    const number = numberInput;
    
    const errorMessage = document.querySelectorAll('.message')
    // checks for valid email
    validEmail = testEmail(email);
    // checking if inputs are valid or not
    if (name){
        if(name.value === ""){
            errorMessage[0].style.display = "block";
            name.style.outline  = "2px solid red";
        }  
    }
    if(email.value === ""){
        email.style.outline = "2px solid red"
        errorMessage[1].style.display = "block"
    }
    if(number.value === ""){
        number.style.outline = "2px solid red"
        errorMessage[2].style.display = "block"
    }
    if (!validEmail){
        //errorMessage[1].style.display = "block"
        //errorMessage[1].textContent = 'invalid email address'
        alert('invalid email address')
    }
    else{
        return true; 
    }
    // Email validate function
    function testEmail(email){
        var re = /\S+@\S+\.\S+/;
        if (email.value.match(re)){
            return true;
        }
        else{
            return false;
        };
    };
}
multiStepForm();
