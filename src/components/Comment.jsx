import styles from './Comment.module.css';

import { Trash, ThumbsUp } from 'phosphor-react';

import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, deleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment()
    {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment()
    {
        deleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/alexandronrossi.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane (você)</strong>
                            <time title="11 de Maio às 08:30h" dateTime="2022-05-11 08:30:20">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}