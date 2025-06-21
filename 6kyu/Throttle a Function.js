function throttle(func, delayMS) {
  let lastCallTime = 0;
  let lastResult;

  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= delayMS) {
      lastCallTime = now;
      lastResult = func.apply(this, args);
    }
    return lastResult;
  };
}


setTimeout(printResult, 0);      // 0
setTimeout(printResult, 500);    // 0 (throttled)
setTimeout(printResult, 1500);   // 1
setTimeout(printResult, 1800);   // 1 (throttled)
setTimeout(printResult, 2500);   // 2
setTimeout(printResult, 2800);   // 2 (throttled)