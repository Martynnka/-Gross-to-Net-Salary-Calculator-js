const inputValue = document.getElementById("input-el");
const Button = document.getElementById("button-el");
const result = document.getElementById("converted-el");
const adapted = document.getElementById("ad-el")

Button.addEventListener("click", function(){
    let value = Number(inputValue.value);

    let sum = 0;

    if(inputValue.value <=0)
    {
        return result.textContent = "Netinkama suma!";
    }

    if(value <= 6900)
    {
        adapted.textContent = "Taikomas 20% GPM tarifas, nes jūsų mėnesinės pajamos neviršija pirmosios progresinės ribos.";
    }
    else if (value <= 11500)
    {
        adapted.textContent = "Taikomas 25% GPM tarifas, nes jūsų pajamos viršija pirmąją progresinę ribą.";
    }
    else if (value >= 11501)
    {
        adapted.textContent = "Taikomas 32% GPM tarifas, nes jūsų pajamos viršija antrąją progresinę ribą.";
    }
        
    sum = value - getGPM (value) - percentsVSD(value) - percentsPSD(value);

    result.textContent = sum.toFixed(2);

});

function getNPD(value) {
    const MMA = 1153;     
    const NPD_MAX = 747;  
    const K = 0.49;      

    if (!Number.isFinite(value) || value <= 0) return 0;


    if (value <= MMA) return NPD_MAX;


    const npd = NPD_MAX - K * (value - MMA);


    return Math.max(0, Math.min(value, npd));
}

function getGPM (value)
{
    let percentsGPM = 0;
    
    const npd = getNPD(value);

    const gpmBase = Math.max(0, value - npd);

    if(value <= 6900)
    {
        return percentsGPM = gpmBase * 0.20;
    }
    else if (value <= 11500)
    {
        return percentsGPM = gpmBase * 0.25;
    }
    else if (value >= 11501)
    {
        return percentsGPM = gpmBase * 0.32;
    }
}

function percentsVSD(value){
    return value * 0.1252;
}

function percentsPSD(value){
    return value * 0.0698;
}


