import React from "react";
import Header from "../../components/Header/Header";
import TranslatorForm from "../../components/TranslatorForm/TranslatorForm";
import HistoryIcon from '@mui/icons-material/History';

export default function PageTranslate() {

    return (
        <React.Fragment>
            <Header
                ButtonIcon={HistoryIcon}
                to="/history"
                title="Translate"
            />
            <TranslatorForm />
        </React.Fragment>
    );
}
