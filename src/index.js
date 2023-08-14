module.exports = function toReadable(number) {
    let ones = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    let result = "";

    if (number >= 100) {
        result += ones[Math.floor(number / 100) - 1] + " hundred";
        number %= 100;
        if (number > 0) {
            result += " ";
        } else {
            return result;
        }
    }
    if (number >= 11 && number <= 19) {
        return result + teens[number - 11];
    } else if (number === 10 || number >= 20) {
        result += tens[Math.floor(number / 10) - 1];
        number %= 10;
        if (number > 0) {
            result += " ";
        } else {
            return result;
        }
    }

    if (number >= 1 && number <= 9) {
        result += ones[number - 1];
    }

    return result;
};
