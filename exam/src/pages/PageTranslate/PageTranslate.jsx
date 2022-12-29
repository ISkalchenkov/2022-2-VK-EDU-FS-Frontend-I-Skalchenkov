import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import TranslatorForm from "../../components/TranslatorForm/TranslatorForm";
import HistoryIcon from '@mui/icons-material/History';

export default function PageTranslate() {
    const [srcText, setSrcText] = useState("");
    const [dstText, setDstText] = useState("");

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${srcText}"}]`
        };
        fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=en&api-version=3.0&profanityAction=NoAction&textType=plain', options)
            .then(response => response.json())
            .then(response => setDstText(response[0].translations[0].text))
            .catch(err => console.error(err));
    })

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
                onChange={event => setSrcText(event.target.value)}
            />
        </React.Fragment>
    );
}
