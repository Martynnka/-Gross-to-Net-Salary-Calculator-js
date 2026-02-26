const inputValue = document.getElementById("input-el");
const Button = document.getElementById("button-el");
const result = document.getElementById("converted-el");
const adapted = document.getElementById("ad-el");
const Precents = document.getElementById("prec-el");
const gpm = document.getElementById("gpm-el");
const VSD = document.getElementById("vsd-el");
const PSD = document.getElementById("psd-el");

inputValue.addEventListener("input", function(){
    
    let value = Number(inputValue.value);


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

    result.textContent = returnsum(value).toFixed(2);

    gpm.textContent = "€ " + getGPM(value).toFixed(2);

    VSD.textContent = "€ " + percentsVSD(value);
    
    PSD.textContent = "€ " + percentsPSD(value);

    Precents.textContent = getallpercents(value).toFixed(2) + "%";

    console.log((getGPM (value)).toFixed(2));
    console.log(percentsVSD(value));
    console.log(percentsPSD(value));
    console.log(getallpercents(value));
    console.log(returnsum(value));

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
    return (value * 0.1252).toFixed(2);
}

function percentsPSD(value){
    return (value * 0.0698).toFixed(2);
}

function getallpercents(value){
    if(value <= 6900)
    {
        return 100-20-12.52-6.98;
    }
    else if (value <= 11500)
    {
        return 100-25-12.52-6.98;
    }
    else if (value >= 11501)
    {
        return 100-32-12.52-6.98;
    }
}


function getallpercents(value){
    return (returnsum(value)*100) /  value;
}


function returnsum(value){
    return value - getGPM (value) - percentsVSD(value) - percentsPSD(value);
}
