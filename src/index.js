'use strict'

// start checking from value of 2, as '1' is not a simple digit.
initCycle: for (let i = 2; i <= 100; i++) {  
    for (let j = 2; j < i; j++) {   
        /* check all numbers from 2 to value equal to value of inner loop minus 1. (i-1).
           if there's a number, that could divide the value from inner loop without remainder - 
           value is not simple.*/
        if (i % j === 0) {continue initCycle};
    };

    console.log(`${i} is a simple number.`);
}