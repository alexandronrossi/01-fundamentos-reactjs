import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState(['Muito bom Devon, parabéns!! 👏👏']);
    const [newComentText, setNewComentText] = useState('');
    
    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

    function handleCreateNewComment() {
        event.preventDefault();
        
        setComments([...comments, newComentText]);
        setNewComentText('');
    }

    function handleNewCommentChange()
    {
        setNewComentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    switch (line.type) {
                        case 'paragraph': return <p key={line.content + index}>{line.content}</p>
                        case 'link': return (<p key={line.content + index}><a href={line.url}>{line.content}</a></p>)
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newComentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>

                {comments.map((comment) => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>

        </article>
    );
}