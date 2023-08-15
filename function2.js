function getValue() {
    const value = parseInt(prompt(`Enter a value:`));
    return value;
}

const value1 = getValue();
const value2 = getValue();

function getMark() {
    const mark = prompt(`Enter a sign:`);
    return mark;
}

const sign = getMark();

function doMath(value1, mark, value2) {
    let math = 0;

    if (mark === `+`) {
        math = value1 + value2;
        console.log(`${value1} + ${value2} = ${math}`);
    } else if (mark === '-') {
        math = value1 - value2;
        console.log(`${value1} - ${value2} = ${math}`);
    } else if (mark === '*') {
        math = value1 * value2;
        console.log(`${value1} * ${value2} = ${math}`);
    } else if (mark === '/') {
        if (value2 != 0) {
            math = value1 / value2;
            console.log(`${value1} / ${value2} = ${math}`)
        } else {
            alert(`Cannot be divided by 0!!!`)
        }
    } else if (mark === '%') {
        math = value1 % value2;
        console.log(`${value1} % ${value2} = ${math}`);
    } else if (mark === '^') {
        math = Math.pow(value1, value2);
        console.log(`${value1} ^${value2} = ${math}`);
    }

    return math;
}

const math = doMath(value1, sign, value2);
