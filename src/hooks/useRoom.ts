import { useState, useEffect } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';


type FireBaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighLighted: boolean;
    isAnswered: boolean;
    likes: Record<string, {
        authorId: string;
    }>
}>


type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighLighted: boolean;
    isAnswered: boolean;
    likeCount: number;
    likeId: string | undefined;
}

export function useRoom(roomId: string) {
    const {user} = useAuth();
    const [questions, setQuestions] = useState<Question[]>([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        /* console.log(roomId); */
        const roomRef = database.ref(`rooms/${roomId}`);

        /* roomRef.once('value', room => { */
        roomRef.on('value', room => {
            /* console.log(room.val()); */
            const dataBaseRoom = room.val();
            const firebaseQuestions: FireBaseQuestions = dataBaseRoom.questions ?? {};
            const parserdQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswered: value.isAnswered,
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
                }
            })
            /* console.log(parserdQuestions); */
            setTitle(dataBaseRoom.title);
            setQuestions(parserdQuestions);
        })
        return () => {
            roomRef.off('value');
        }

    }, [roomId, user?.id]);

    return { questions, title }
}