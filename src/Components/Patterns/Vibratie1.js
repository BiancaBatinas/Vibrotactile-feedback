const Vib =() =>{
   function Vireo() {
    function realPWM(t, n, r) {
        const o = Math.round((n * r) / 100);
        t.push(o, n - o);
      }
      function applyPWM(t, n, r, o, i, e, a) {
        n <= e && 1 < n && ((o -= e - n), a(t, e, (r = (r * n + i * (e - n)) / e)));
        const u = [];
        for (o > e && a(u, e, i); u.length && o > e; ) t.push(...u), (o -= e);
        return o;
      }
      function vibrationToPattern(t, n = 40) {
        const r = [];
        let o = 0,
          i = 0;
        for (let e = 0; e < t.length; e++) {
          const a = t[e];
          (o = applyPWM(r, o, i, a.duration, a.intensity, n, realPWM)),
            (i = a.intensity);
        }
        return r;
      }
  const t = {
    vibratie1: {
      vibro: {
        pattern: [
          { intensity: 32, duration: 50 },
          { intensity: 35, duration: 50 },
          { intensity: 38, duration: 50 },
          { intensity: 41, duration: 50 },
          { intensity: 44, duration: 50 },
          { intensity: 47, duration: 50 },
          { intensity: 50, duration: 50 },
          { intensity: 53, duration: 50 },
          { intensity: 56, duration: 50 },
          { intensity: 59, duration: 50 },
          { intensity: 62, duration: 50 },
          { intensity: 65, duration: 50 },
          { intensity: 68, duration: 50 },
          { intensity: 71, duration: 50 },
          { intensity: 74, duration: 80 },
          { intensity: 15, duration: 50 },
          { intensity: 24, duration: 50 },
          { intensity: 31, duration: 50 },
          { intensity: 37, duration: 50 },
          { intensity: 42, duration: 50 },
          { intensity: 47, duration: 50 },
          { intensity: 53, duration: 50 },
          { intensity: 58, duration: 50 },
          { intensity: 62, duration: 50 },
          { intensity: 67, duration: 50 },
          { intensity: 71, duration: 50 },
          { intensity: 74, duration: 50 },
          { intensity: 77, duration: 50 },
          { intensity: 80, duration: 50 },
          { intensity: 81, duration: 50 },
          { intensity: 80, duration: 50 },
          { intensity: 78, duration: 50 },
          { intensity: 74, duration: 50 },
          { intensity: 65, duration: 50 },
          { intensity: 58, duration: 50 },
          { intensity: 57, duration: 50 },
          { intensity: 71, duration: 50 },
          { intensity: 75, duration: 50 },
          { intensity: 73, duration: 100 },
        ],
        offset: 0,
      },
    },
  };
  function n(t) {
    const n = r(t);
    if (n) return vibrationToPattern(n, 40);
  }
  function r(n) {
    return (t[n] && t[n].vibro && t[n].vibro.pattern) || void 0;
  }
  return (
    (r.vibrate = function (t) {
      navigator.vibrate(n(t));
    }),
    (r.navigatorParam = n),
    r
  );
}
    return Vireo();
};

export default Vib;




