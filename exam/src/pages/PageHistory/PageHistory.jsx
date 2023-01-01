import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import HistoryList from "../../components/HistoryList/HistoryList";
import TranslateIcon from '@mui/icons-material/Translate';


function getTranslationsCount() {
    return Number(localStorage.getItem("translations_count")) || 0;
}

function getTranslationsFromLocalStorage() {
    let translations = [];
    const translations_count = getTranslationsCount();

    for (let translation_id = 0; translation_id < translations_count; ++translation_id) {
        const translation = localStorage.getItem("translation_" + translation_id);
        translations.push(JSON.parse(translation))
    }
    console.log(translations)
    return translations;
}


export default function PageHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(getTranslationsFromLocalStorage());
    }, [])
    return (
        <React.Fragment>
            <Header
                ButtonIcon={TranslateIcon}
                to="/translate"
                title="History"
            />
            <HistoryList
                history={history}
                onClick={() => {
                    localStorage.clear();
                    setHistory([]);
                }} // очищаю весь localStorage для простоты
            />
        </React.Fragment>
    );
}