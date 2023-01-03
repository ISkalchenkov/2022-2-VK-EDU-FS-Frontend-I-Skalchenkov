import {TTranslateDate, TTranslateFunction} from "./types";
import {FOLDER_ID, IAM_TOKEN} from "./config";
import cached from "./cache";


export const translate:TTranslateFunction = async (params) => {
    const body = {
        texts: params.text,
        folderId: FOLDER_ID,
        targetLanguageCode: params.dstLang,
        sourceLanguageCode: params.srcLang,
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${IAM_TOKEN}`,
        },
        body: JSON.stringify(body),
    };

    const response = await fetch("https://translate.api.cloud.yandex.net/translate/v2/translate", options);

    const response_data: TTranslateDate = await response.json();
    return response_data;
}

export const cachedTranslate = cached(translate);