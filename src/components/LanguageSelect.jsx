import { useContext, useEffect } from 'react';
import TranslationContext from '../TranslationContext';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

const LanguageSelect = () => {
    const { language, translate, handleChangeLanguage, loadTranslations } =
        useContext(TranslationContext);

    useEffect(() => {
        loadTranslations(language);
    }, [loadTranslations, language]);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={language}
                    onChange={handleChangeLanguage}
                >
                    <MenuItem value='pt'>{translate('portuguese')}</MenuItem>
                    <MenuItem value='en'>{translate('english')}</MenuItem>
                    <MenuItem value='es'>{translate('spanish')}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default LanguageSelect;
