import styles from './Comment.module.css';

import { Trash, ThumbsUp } from 'phosphor-react';

import { Avatar } from './Avatar';

export function Comment({content, deleteComment}) {
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
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}