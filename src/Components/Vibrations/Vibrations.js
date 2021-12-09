import JSON from "./pattern.json";


function realPWM(arr, time, intensity) {
    const vibrate = Math.round(time * intensity / 100);
    arr.push(vibrate, time - vibrate);
}
function applyPWM(arr, restTime, restIntensity, time, intensity, stepTime, stepPulseFn) {
    if (restTime <= stepTime && 1 < restTime) {
        restIntensity = (restIntensity * restTime + intensity * (stepTime - restTime)) / stepTime;
        time -= (stepTime - restTime);
        stepPulseFn(arr, stepTime, restIntensity);
    }
    const stepPulse = [];
    if (time > stepTime) {
        stepPulseFn(stepPulse, stepTime, intensity);
    }
    while (time > stepTime) {
        arr.push(...stepPulse);
        time -= stepTime;
    }
    return time;
}
function vibrationToPattern(signal, stepTime = 629.0074)
{
    const arr = [];
    let restTime = 0;
    let prevIntensity = 0;
    for (let i = 0; i < signal.length; i++) {
        const item = signal[i];
        restTime = applyPWM(arr, restTime, prevIntensity, item.duration, item.intensity, stepTime, realPWM);
        prevIntensity = item.intensity;
    }
    console.log(arr);
    return arr;
}

function genVibratorPattern( intensity, duration)
{
    var dutyCycle = Math.abs( ( intensity * 2 ) - 1 );
    var hWidth =  ( dutyCycle * ( duration - 1 ) ) + 1;
    var lWidth = dutyCycle == 1 ? 0 : 1;

    var pulseCount =  Math.floor( 2 * ( parseFloat(duration) / parseFloat( hWidth + lWidth ) ) );
    var pattern = [ pulseCount ];

    for( var i = 0; i < pulseCount; i++)
    {
        pattern[i] = intensity < 0.5 ? ( i % 2 == 0 ? hWidth : lWidth ) : ( i % 2 == 0 ? lWidth : hWidth );
    }

    return pattern;
}
export function SendVibrateSignal()
{
    var values= JSON["Calin"];
    /*
    var pattern= [];
    for (let i = 0; i<values.length; i++)
    {
        const pulse = values[i];
        var pat=genVibratorPattern(pulse.intensity,pulse.duration);
        console.log(pat);
        for(let j=0;j<pat.length;j++)
            pattern.push(pat[j]);
    }*/
    var pattern =vibrationToPattern(values,40);
    return () => {
        navigator.vibrate (pattern);
           
        
        console.log ("Da iubesc papusa");
        console.log (values);
        console.log (pattern);
    }
} 
/*[6, 34, 15, 25, 15, 25, 15, 25, 15, 25, 16, 24, 16, 24, 16, 24, 16, 2
            4, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 16, 24, 15, 25, 15, 25, 15, 25, 15, 25, 17, 23, 19, 21, 23, 17, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10, 30, 10]*/