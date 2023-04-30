import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import i18next from 'i18next';

const LanguageSelect = () => {
    const [lang, setLang] = React.useState(
        localStorage.getItem('lang' || 'en')
    );

    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem('lang', event.target.value);
        window.location.reload();
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={lang}
                    onChange={handleChange}
                >
                    <MenuItem value='pt'>
                        {i18next.t('portuguese') || 'Portuguese'}
                    </MenuItem>
                    <MenuItem value='en'>
                        {i18next.t('english') || 'English'}
                    </MenuItem>
                    <MenuItem value='es'>
                        {i18next.t('spanish') || 'Spanish'}
                    </MenuItem>
                </Select>
                {/* <InputLabel id='demo-simple-select-label'>
                    {i18next.t('language')}
                </InputLabel> */}
            </FormControl>
        </Box>
    );
};

export default LanguageSelect;
