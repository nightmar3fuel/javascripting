const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
    const b = 5;
    const c = 6; // We want to use this 'c' from firstFunction

    (function secondFunction() {
        const b = 8; // We want to use this 'b' from secondFunction

        (function thirdFunction() {
            const a = 7;
            const c = 9;

            (function fourthFunction() {
                const a = 1;
                const c = 8;

                // The correct scope to log the values of a, b, c
                console.log(`a: ${a}, b: ${b}, c: ${c}`);
            })()
        })()
    })()
})()