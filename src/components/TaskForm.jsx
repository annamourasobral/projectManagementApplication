import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import TranslationContext from '../TranslationContext';

const TaskForm = ({ task, tasks, setTasks, handleClose, idTaskSelected }) => {
    const [idTask, setIdTask] = useState();
    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');
    const [startTask, setStartTask] = useState('');
    const [endTask, setEndTask] = useState('');
    const [resourceTask, setResourceTask] = useState('');
    const [statusTask, setStatusTask] = useState('');

    const { translate } = useContext(TranslationContext);
    const handleResource = (event) => {
        setResourceTask(event.target.value);
    };

    const handleStatus = (event) => {
        setStatusTask(event.target.value);
    };

    const handleSave = () => {
        //To inspect our code, a good strategy is to use console.log.
        // With console.log, we can view its contents in the Console tab, in the element inspector, in the browser window
        console.log(
            `id: ${idTask} \n titulo: ${titleTask} \n descrição: ${descriptionTask} \n inicio: ${startTask} \n fim: ${endTask} \n recurso: ${resourceTask} \n status: ${statusTask}`
        );

        setTasks([
            ...tasks,
            {
                idTask,
                titleTask,
                descriptionTask,
                startTask,
                endTask,
                resourceTask,
                statusTask,
            },
        ]);
        //console.log(`Tarefas: ` + JSON.stringify(tasks));
        handleClose();
    };

    useEffect(() => {
        //console.log('Tarefa selecionada: ' + JSON.stringify(task));
        if (task) {
            setIdTask(idTaskSelected);
            setTitleTask(task.titleTask);
            setDescriptionTask(task.descriptionTask);
            setStartTask(task.startTask);
            setEndTask(task.endTask);
            setResourceTask(task.resourceTask);
            setStatusTask(task.statusTask);
        }
    }, [
        task,
        idTaskSelected,
        task.descriptionTask,
        task.endTask,
        task.resourceTask,
        task.startTask,
        task.statusTask,
        task.titleTask,
    ]);

    return (
        <Grid container spacing={2}>
            <Card sx={style}>
                <CardHeader title={translate('task')} />
                <CardContent
                    sx={{
                        width: '95%',
                        maxWidth: '100%',
                    }}
                >
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input
                                id='tarefa_titulo'
                                aria-describedby='tarefa_titulo_helper_text'
                                value={titleTask}
                                onChange={(e) => {
                                    setTitleTask(e.target.value);
                                }}
                            />
                            <FormHelperText id='tarefa_titulo_helper_text'>
                                {translate('task-title')}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Input
                                id='tarefa_descricao'
                                aria-describedby='tarefa_descricao_helper_text'
                                value={descriptionTask}
                                onChange={(e) => {
                                    setDescriptionTask(e.target.value);
                                }}
                            />
                            <FormHelperText id='tarefa_descricao_helper_text'>
                                {translate('task-description')}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={3}>
                            <FormControl>
                                <Input
                                    id='tarefa_inicio'
                                    type='date'
                                    aria-describedby='tarefa_inicio_helper_text'
                                    value={startTask}
                                    onChange={(e) => {
                                        setStartTask(e.target.value);
                                    }}
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        fontWeight: 400,
                                        paddingLeft: '13px',
                                    }}
                                />
                                <FormHelperText id='tarefa_inicio_helper_text'>
                                    {translate('task-start')}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl>
                                <Input
                                    id='tarefa_fim'
                                    type='date'
                                    aria-describedby='tarefa_fim_helper_text'
                                    value={endTask}
                                    onChange={(e) => {
                                        setEndTask(e.target.value);
                                    }}
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        fontWeight: 400,
                                        paddingLeft: '13px',
                                    }}
                                />
                                <FormHelperText id='tarefa_fim_helper_text'>
                                    {translate('task-end')}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='tarefa_recurso'>
                                    {translate('resource')}
                                </InputLabel>
                                <Select
                                    id='tarefa_recurso'
                                    value={resourceTask}
                                    label='Recurso'
                                    onChange={handleResource}
                                    size='small'
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        fontWeight: 400,
                                    }}
                                >
                                    <MenuItem value={'Resource 1'}>
                                        {`${translate('resource')} 1`}
                                    </MenuItem>
                                    <MenuItem value={'Resource 2'}>
                                        {`${translate('resource')} 2`}
                                    </MenuItem>
                                    <MenuItem value={'Resource 3'}>
                                        {`${translate('resource')} 3`}
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='tarefa_recurso'>
                                    {translate('status')}
                                </InputLabel>
                                <Select
                                    id='tarefa_status'
                                    value={statusTask}
                                    label='Status'
                                    onChange={handleStatus}
                                    size='small'
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        fontWeight: 400,
                                    }}
                                >
                                    <MenuItem value={'Waiting'}>
                                        {translate('waiting')}
                                    </MenuItem>
                                    <MenuItem value={'Ongoing'}>
                                        {translate('ongoing')}
                                    </MenuItem>
                                    <MenuItem value={'Finished'}>
                                        {translate('finished')}
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container spacing={2} pl={2} mt={2}>
                            <Grid item xs={1}>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={handleSave}
                                >
                                    {translate('save')}
                                </Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button
                                    size='small'
                                    variant='outlined'
                                    onClick={handleClose}
                                >
                                    {translate('cancel')}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    p: 4,
};

export default TaskForm;
