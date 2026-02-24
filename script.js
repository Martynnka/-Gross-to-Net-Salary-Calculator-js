const inputValue = document.getElementById("input-el");
const Button = document.getElementById("button-el");
const result = document.getElementById("converted-el");
const adapted = document.getElementById("ad-el")


Button.addEventListener("click", function(){
    let value = Number(inputValue.value);
    let percentsGPM = 0;
    let sum = 0;
    const npd = getNPD(value);
    const gpmBase = Math.max(0, value - npd);

    if(inputValue.value <=0)
    {
        return result.textContent = "Netinkama suma!";
    }

    if(value <= 6900)
    {
        percentsGPM = gpmBase * 0.20;
        adapted.textContent = "Taikomas 20% GPM tarifas, nes jūsų mėnesinės pajamos neviršija pirmosios progresinės ribos.";
    }
    else if (value <= 11500)
    {
        percentsGPM = gpmBase * 0.25;
        adapted.textContent = "Taikomas 25% GPM tarifas, nes jūsų pajamos viršija pirmąją progresinę ribą.";
    }
    else if (value >= 11501)
    {
        percentsGPM = gpmBase * 0.32;
        adapted.textContent = "Taikomas 32% GPM tarifas, nes jūsų pajamos viršija antrąją progresinę ribą.";
    }

    const percentsVSD = value * 0.1252;

    const percentsPSD = value * 0.0698;
        
    sum = value - percentsGPM - percentsVSD - percentsPSD;

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


