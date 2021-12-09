import JSON from "./pattern.json";

var Table= JSON;
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
function vibrationToPattern(signal, stepTime = 40)
{
    const arr = [];
    let restTime = 0;
    let prevIntensity = 0;
    for (var i = 0; i < signal.length; i++) {
        const item = signal[i];
        restTime = applyPWM(arr, restTime, prevIntensity, item.duration, item.intensity, stepTime, realPWM);
        prevIntensity = item.intensity;
    }
    console.log(arr);
    return arr;
}

export function SendVibrateSignal(clue)
{
   
    var values = Table[clue] ? Table[clue] : Table['0'];
    
    var pattern =vibrationToPattern(values,40);
    return () => {
        navigator.vibrate (pattern);
        console.log (values);
        console.log (pattern);
    }
}