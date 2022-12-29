import React from "react";
import Header from "../../components/Header/Header";
import TranslateIcon from '@mui/icons-material/Translate';

export default function PageHistory() {

    return (
        <React.Fragment>
            <Header
                ButtonIcon={TranslateIcon}
                to="/translate"
                title="History"
            />
        </React.Fragment>
    );
}