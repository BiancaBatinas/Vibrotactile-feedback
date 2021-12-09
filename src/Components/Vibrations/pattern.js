function realPWM (t , n , r) {
    const o = Math.round (n * r / 100);
    t.push (o , n - o)
}

function applyPWM (t , n , r , o , i , e , a) {
    n <= e && 1 < n && (o -= e - n && a (t , e , r = (r * n + i * (e - n)) / e));
    const u = [];
    for (o > e && a (u , e , i); u.length && o > e;) t.push (...u); o -= e;
    return o
}

function vibrationToPattern (t , n = 40) {
    const r = [];
    let o = 0 , i = 0;
    for (let e = 0; e < t.length; e++) {
        const a = t[e];
        o = applyPWM (r , o , i , a.duration , a.intensity , n , realPWM); i = a.intensity
    }
    return r
}

function Vireo () {
    const t =   {
        "punct": {"vibro": {"pattern": [{"intensity": 100 , "duration": 160}] , "offset": 0}} ,
        "linie": {"vibro": {"pattern": [{"intensity": 100 , "duration": 500}] , "offset": 0}}
                };

    function n (t) {
        const n = r (t);
        if (n) return vibrationToPattern (n , 40)
                    }

    function r (n) {
        return t[n] && t[n].vibro && t[n].vibro.pattern || void 0
                    }

    return r.vibrate = function (t) {
        navigator.vibrate (n (t))
    }
    , r.navigatorParam = n, r
}

export default Vireo ();