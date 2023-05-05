import React, { useState, useEffect, useContext, useMemo } from 'react';
import TranslationContext from '../../TranslationContext';

import TaskForm from '../../components/TaskForm';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

const ListTask = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState();
    const [idSelectedTask, setIdSelectedTask] = useState([]);
    const { translate } = useContext(TranslationContext);

    //The function below is used to create the array containing the initial data of the task listing.
    function createData(
        idTask,
        titleTask,
        descriptionTask,
        startTask,
        endTask,
        statusTask,
        resourceTask
    ) {
        return {
            idTask,
            titleTask,
            descriptionTask,
            startTask,
            endTask,
            statusTask,
            resourceTask,
        };
    }

    //Definition of the array containing the initial data of the task listing
    const data = useMemo(
        () => [
            createData(
                1,
                `${translate('task')} 1`,
                `${translate('task-description')} 1`,
                '2022-01-01',
                '2022-01-02',
                `${translate('finished')}`,
                `${translate('resource')} 1`
            ),
            createData(
                2,
                `${translate('task')} 2`,
                `${translate('task-description')} 2`,
                '2022-01-03',
                '2022-01-04',
                `${translate('ongoing')}`,
                `${translate('resource')} 2`
            ),
            createData(
                3,
                `${translate('task')} 3`,
                `${translate('task-description')} 3`,
                '2022-01-04',
                '2022-01-05',
                `${translate('ongoing')}`,
                `${translate('resource')} 3`
            ),
            createData(
                4,
                `${translate('task')} 4`,
                `${translate('task-description')} 4`,
                '2022-01-05',
                '2022-01-06',
                `${translate('finished')}`,
                `${translate('resource')} 4`
            ),
            createData(
                5,
                `${translate('task')} 5`,
                `${translate('task-description')} 5`,
                '2022-01-06',
                '2022-01-07',
                `${translate('ongoing')}`,
                `${translate('resource')} 5`
            ),
            createData(
                6,
                `${translate('task')} 6`,
                `${translate('task-description')} 6`,
                '2022-01-07',
                '2022-01-08',
                `${translate('waiting')}`,
                `${translate('resource')} 6`
            ),
        ],
        [translate]
    );

    //The array defined above is set as the contents of the Tasks state in the component's initial rendering.
    useEffect(() => {
        setTasks(data);
    }, [data]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const handleEdit = (id) => {
        setIdSelectedTask(id);

        //Local object for storing the filtered task according to user selection
        let taskToEdit = tasks.filter((obj) => {
            return obj.idTask === id;
        })[0];

        // Assignment of the local Object, set above, to the Task state
        setTask(taskToEdit);

        //Set the state responsible for displaying the Edit Task Model to true
        setOpenEdit(true);
    };

    const handleDelete = (id) => {
        setTasks((current) =>
            current.filter((task) => {
                return task.idTask !== id;
            })
        );
    };

    return (
        <>
            <Card>
                <CardHeader
                    title={translate('tasks')}
                    subheader={translate('list-of-tasks')}
                />
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 650 }}
                            size='small'
                            aria-label='a dense table'
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>{translate('title')}</TableCell>
                                    <TableCell align='right'>
                                        {translate('description')}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {translate('start')}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {translate('end')}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {translate('status')}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {translate('resource')}
                                    </TableCell>
                                    <TableCell align='left'></TableCell>
                                    <TableCell align='left'></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {tasks.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell component='th' scope='row'>
                                            {row.idTask}
                                        </TableCell>
                                        <TableCell component='th' scope='row'>
                                            {row.titleTask}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.descriptionTask}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.startTask}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.endTask}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.statusTask}
                                        </TableCell>
                                        <TableCell align='right'>
                                            {row.resourceTask}
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Button
                                                variant='contained'
                                                color='success'
                                                onClick={() =>
                                                    handleEdit(row.idTask)
                                                }
                                            >
                                                <EditIcon fontSize='small' />
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Button
                                                variant='contained'
                                                color='error'
                                                onClick={() =>
                                                    handleDelete(row.idTask)
                                                }
                                            >
                                                <DeleteIcon fontSize='small' />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        variant='contained'
                        onClick={handleOpen}
                    >
                        {translate('create')}
                    </Button>
                    <Button size='small' variant='outlined'>
                        {translate('cancel')}
                    </Button>
                </CardActions>
            </Card>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <div>
                        <TaskForm
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                            idSelectedTask={idSelectedTask}
                            handleClose={handleClose}
                        />
                    </div>
                </Modal>
            </div>
            <div>
                <Modal
                    open={openEdit}
                    onClose={handleCloseEdit}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <div>
                        <TaskForm
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                            idSelectedTask={idSelectedTask}
                            handleClose={handleCloseEdit}
                        />
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default ListTask;
