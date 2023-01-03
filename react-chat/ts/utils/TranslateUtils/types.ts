export interface ITranslateParams {
    text: string;
    srcLang?: string;
    dstLang: string;
}

export interface ITranslateFailureData {
    code: number,
    message: string,
    details: [
        {
            "@type": string,
            requestId: string,
        }
    ]
}

export interface ITranslateSuccessData {
    text: string;
    detectedLanguageCode?: string;
}

export type TTranslateDate = ITranslateSuccessData | ITranslateFailureData;

export type TTranslateFunction = (params: ITranslateParams) => Promise<TTranslateDate>

export interface ICache {
    [key: string]: TTranslateDate
}
