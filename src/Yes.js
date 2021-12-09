

    function realPWM(t , n , r) {
        const o = Math.round(n * r / 100);
        t.push(o , n - o)
    }

    function applyPWM(t , n , r , o , i , e , a) {
        n <= e && 1 < n && (o -= e - n && a(t , e , r = (r * n + i * (e - n)) / e));
        const u = [];
        for (o > e && a(u , e , i); u.length && o > e;) t.push(...u); o -= e;
        return o
    }

    function vibrationToPattern(t , n = 40) {
        const r = [];
        let o = 0 , i = 0;
        for (let e = 0; e < t.length; e++) {
            const a = t[e];
            o = applyPWM(r , o , i , a.duration , a.intensity , n , realPWM); i = a.intensity;      
        }
        return r
    }

    function Vireo() {
        const t = {
            "Calin1": {
                "vibro": {
                    "pattern": [{"intensity": 0 , "duration": 45} , {
                        "intensity": 46 ,
                        "duration": 50
                    } , {"intensity": 79 , "duration": 50} , {"intensity": 100 , "duration": 50} , {
                        "intensity": 85 ,
                        "duration": 50
                    } , {"intensity": 59 , "duration": 50} , {"intensity": 56 , "duration": 50} , {
                        "intensity": 59 ,
                        "duration": 50
                    } , {"intensity": 94 , "duration": 50} , {"intensity": 95 , "duration": 50} , {
                        "intensity": 72 ,
                        "duration": 50
                    } , {"intensity": 49 , "duration": 50} , {"intensity": 81 , "duration": 50} , {
                        "intensity": 88 ,
                        "duration": 50
                    } , {"intensity": 43 , "duration": 50} , {"intensity": 51 , "duration": 50} , {
                        "intensity": 87 ,
                        "duration": 50
                    } , {"intensity": 75 , "duration": 50} , {"intensity": 52 , "duration": 50} , {
                        "intensity": 52 ,
                        "duration": 55
                    }] , "offset": 0
                }
            }
        };

        function n(t) {
            const n = r(t);
            if (n) return vibrationToPattern(n , 40)
        }

        function r(n) {
            return t[n] && t[n].vibro && t[n].vibro.pattern || void 0
        }

        return r.vibrate = function (t) {
            navigator.vibrate(n(t))
        }, r.navigatorParam = n, r
    }

    export default Vireo();
