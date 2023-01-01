import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import TranslatorForm from "../../components/TranslatorForm/TranslatorForm";
import HistoryIcon from '@mui/icons-material/History';

function saveTranslationsToLocalStorage(translation) {
    if (!translation.srcText) { // не добавляем пустой перевод
        return;
    }
    let translations_count = Number(localStorage.getItem("translations_count")) || 0;

    const new_id = translations_count;
    translation.id = new_id;
    localStorage.setItem(("translation_" + new_id), JSON.stringify(translation));
    localStorage.setItem("translations_count", ++translations_count);
}

export default function PageTranslate() {
    const [srcText, setSrcText] = useState("");
    const [dstText, setDstText] = useState("");
    const [langs, setLangs] = useState({
        "ru": {name: "Русский"},
        "en": {name: "Английский"}
    });
    const [srcLang, setSrcLang] = useState("ru");
    const [dstLang, setDstLang] = useState("en");

    const [detectedLang, setDetectedLang] = useState("");

    function getLangs() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground'
            }
        };
        
        fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
            .then(response => response.json())
            .then(response => setLangs(response.translation))
            .catch(err => console.error(err));
    }

    function translate() {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${srcText}"}]`
        };
        
        fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${dstLang}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
            .then(response => response.json())
            .then(response => {
                setDstText(response[0].translations[0].text);
                setDetectedLang(langs[response[0].detectedLanguage.language].name);
            })
            .catch(err => console.error(err));
    }

    function langReverse() {
        const temp = srcLang;
        setSrcLang(dstLang);
        setDstLang(temp);
    }

    function langNameToKey(lang_name) {
        for (let lang_key in langs) {
            if (langs[lang_key].name === lang_name) {
                return lang_key;
            }
        }
    }

    function handleSrcLangChange(event) {
        const lang = langNameToKey(event.target.innerText);
        if (lang === dstLang) {
            langReverse();
            return;
        }
        setSrcLang(lang);
    }

    function handleDstLangChange(event) {
        const lang = langNameToKey(event.target.innerText);
        if (lang === srcLang) {
            langReverse();
            return;
        }
        setDstLang(lang);
    }

    useEffect(getLangs, []);

    useEffect(() => {
        let timer_id = setTimeout(translate, 500); // Переводим сообщение, если пользователь не вводил новые символы в течении половины секунды
        return () => {clearTimeout(timer_id)}
    });

    useEffect(() => {
        let timer_id = setTimeout(saveTranslationsToLocalStorage, 2000, {
            srcLang: langs[srcLang].name,
            dstLang: langs[dstLang].name,
            srcText: srcText,
            dstText: dstText
        }); // Сохраняем перевод в localStorage, если пользователь не вводил новые символы в течении двух секунд
        return () => {clearTimeout(timer_id)}
    });

    return (
        <React.Fragment>
            <Header
                ButtonIcon={HistoryIcon}
                to="/history"
                title="Translate"
            />
            <TranslatorForm
                src_text={srcText}
                dst_text={dstText}
                src_lang={langs[srcLang].name}
                dst_lang={langs[dstLang].name}
                langs_list={Object.keys(langs).map(key => langs[key].name)}
                detected_lang={detectedLang}
                onChange={event => setSrcText(event.target.value)}
                handleSrcLangChange={handleSrcLangChange}
                handleDstLangChange={handleDstLangChange}
                handleReverse={langReverse}
            />
        </React.Fragment>
    );
}
