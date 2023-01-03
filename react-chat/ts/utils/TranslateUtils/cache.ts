import sha256 from "fast-sha256";
import { ITranslateParams, ICache, TTranslateFunction, TTranslateDate } from "./types";

function translateParamsToStringSha256(params: ITranslateParams) {
    const params_string = JSON.stringify(params);
    const encoder = new TextEncoder();
    const params_Uint8Array = encoder.encode(params_string);
    const hash_Uint8Array = sha256(params_Uint8Array);
    const decoder = new TextDecoder();
    const hash_string = decoder.decode(hash_Uint8Array);
    return hash_string;
}

export default function cached(func: TTranslateFunction) {
    let cache: ICache = {};

    const wrapper = async (params: ITranslateParams) => {
        const hash_key = translateParamsToStringSha256(params);
        if (hash_key in cache) {
            //console.log("<From cache>");
            return cache[hash_key];
        }
        const data:TTranslateDate = await func(params);
        cache[hash_key] = data;
        //console.log("<From request>");
        return data;
    }

    return wrapper;
}