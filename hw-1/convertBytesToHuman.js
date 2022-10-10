/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (typeof bytes !== "number" || bytes < 0 || bytes % 1 != false) {
        return false;
    }

    const METRIC_PRIFIX = {
        0 :  "B",
        1 : "KB",
        2 : "MB",
        3 : "GB",
        4 : "TB",
        5 : "PB",
        6 : "EB",
        7 : "ZB",
        8 : "YB"
    };
    let prefix = 0;

    while (bytes / 1024 >= 1) {
        bytes /= 1024;
        ++prefix;
    }

    if (bytes % 1) {
        bytes = bytes.toFixed(2);
    }

    return `${bytes} ${METRIC_PRIFIX[prefix]}`;
}
