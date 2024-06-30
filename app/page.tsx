import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../apis/userApi';
import LoginForm from '../components/LoginForm';
import UpdateButton from '../components/UpdateButton';

const Page: React.FC = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? <UpdateButton /> : <LoginForm />}
        </div>
    );
};

export default Page;
