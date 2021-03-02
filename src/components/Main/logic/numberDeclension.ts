// https://gist.github.com/ivan1911/5327202#gistcomment-1669858

const numberDeclension = (number: number, titles: [string, string, string], isNumberHidden = false): string => {
    const NumberAbs = Math.abs(number);
    const Cases = [2, 0, 1, 1, 1, 2];

    return (
        `${isNumberHidden ? '' : NumberAbs + ' '}` +
        `${titles[NumberAbs % 100 > 4 && NumberAbs % 100 < 20 ? 2 : Cases[NumberAbs % 10 < 5 ? NumberAbs % 10 : 5]]}`
    );
};

export default numberDeclension;
