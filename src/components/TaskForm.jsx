import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import CardActions from '@mui/material/CardActions';
import i18next from 'i18next';

const TaskForm = ({ task, tasks, setTasks, handleClose, idTaskSelected }) => {
    const [idTask, setIdTask] = useState();
    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');
    const [startTask, setStartTask] = useState('');
    const [endTask, setEndTask] = useState('');
    const [resourceTask, setResourceTask] = useState('');
    const [statusTask, setStatusTask] = useState('');
    //Below a variable is declared to store the id of the task, adding 1 to the highest id currently existing in the Tasks state
    useEffect(() => {
        let nextId = Math.max(...tasks.map((task) => task.idTask)) + 1;
        setIdTask(nextId);
    }, [tasks]);

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
        setIdTask(idTaskSelected);
        setTitleTask(task.titleTask);
        setDescriptionTask(task.descriptionTask);
        setStartTask(task.startTask);
        setEndTask(task.endTask);
        setResourceTask(task.resourceTask);
        setStatusTask(task.statusTask);
    }, [
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
                <CardHeader title={i18next.t('task')} />
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
                                {i18next.t('task-title')}
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
                                {i18next.t('task-description')}
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
                                    {i18next.t('task-start')}
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
                                    {i18next.t('task-end')}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='tarefa_recurso'>
                                    {i18next.t('resource')}
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
                                    <MenuItem value={'Recurso 1'}>
                                        Recurso 1
                                    </MenuItem>
                                    <MenuItem value={'Recurso 2'}>
                                        Recurso 2
                                    </MenuItem>
                                    <MenuItem value={'Recurso 3'}>
                                        Recurso 3
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor='tarefa_recurso'>
                                    {i18next.t('status')}
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
                                    <MenuItem value={'Aguardando'}>
                                        {i18next.t('waiting')}
                                    </MenuItem>
                                    <MenuItem value={'Em Andamento'}>
                                        {i18next.t('ongoing')}
                                    </MenuItem>
                                    <MenuItem value={'Concluída'}>
                                        {i18next.t('finished')}
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
                                    {i18next.t('save')}
                                </Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button
                                    size='small'
                                    variant='outlined'
                                    onClick={handleClose}
                                >
                                    {i18next.t('cancel')}
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
