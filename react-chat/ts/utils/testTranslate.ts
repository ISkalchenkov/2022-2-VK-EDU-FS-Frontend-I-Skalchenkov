import { translate, cachedTranslate, types } from "./TranslateUtils";

const params1: types.ITranslateParams = {
    text: "Shimba limba",
    dstLang: "ru"
}

const params2: types.ITranslateParams = {
    text: "Здраствуй мир!",
    dstLang: "en",
    srcLang: "ru"
}

const params3: types.ITranslateParams = {
    text: "Добрый вечер",
    dstLang: ""
}


async function test1() {
    console.log("'''Test 1: Language detection'''");
    const data = await cachedTranslate(params1);
    return data;
}

async function test2() {
    console.log("'''Test 2: Request caching'''");

    let data = await cachedTranslate(params2);
    console.log(data);

    data = await cachedTranslate(params2);
    return data;
}

async function test3() {
    console.log("'''Test 3: Target language must be set'''");
    const data = await cachedTranslate(params3);
    return data;
}


async function test() {
    let data = await test1();
    console.log(data)
    console.log();
    data = await test2();
    console.log(data)
    console.log();
    data = await test3();
    console.log(data)
}

test();