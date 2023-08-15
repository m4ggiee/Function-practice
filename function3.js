function fillArray() {
    let mainArray = [];
    let mainLength = parseInt(prompt("Введіть довжину основного масиву:"));
    for (let i = 0; i < mainLength; i++) {
        let subArray = [];
        let subLength = parseInt(prompt(`Введіть довжину внутрішнього масиву ${i + 1}:`));
        for (let j = 0; j < subLength; j++) {
            let value = prompt(`Введіть значення для елемента ${j + 1} внутрішнього масиву ${i + 1}:`);
            subArray.push(value);
        }
        mainArray.push(subArray);
    }
    return mainArray;
}

let result = fillArray();
console.log(result);
