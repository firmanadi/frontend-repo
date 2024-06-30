import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { RootState } from '../store/store';

const UpdateButton: React.FC = () => {
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state: RootState) => state.update);

    const handleClick = async () => {
        dispatch({ type: 'UPDATE_REQUEST' });

        try {
            // Assume updateAPI is an API function you have defined
            await updateAPI();
            dispatch({ type: 'UPDATE_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'UPDATE_FAILURE', payload: err.message });
        }
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Update
            </Button>
            {loading && <Typography>Loading...</Typography>}
            {success && <Typography>Update successful!</Typography>}
            {error && <Typography color="error">{error}</Typography>}
        </>
    );
};

export default UpdateButton;
