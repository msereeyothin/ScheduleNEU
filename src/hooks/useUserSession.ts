import { useEffect, useState } from 'react';
import { UserData } from '../common/types';

const getOrCreateUUID = (): string => {
    let uuid = localStorage.getItem('uuid');
    if (!uuid) {
        uuid = crypto.randomUUID();
        localStorage.setItem('uuid', uuid);
    }
    return uuid;
};

const fetchUserData = async (uuid: string): Promise<any> => {
    const response = await fetch('https://www.scheduleneu.com/api/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uuid })
    });
    const data = await response.json();
    return data;
};

export const useUserSession = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const uuid = getOrCreateUUID();
        fetchUserData(uuid).then(data => {
            setUserData(data as UserData);
        }).catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);

    return userData;
};
