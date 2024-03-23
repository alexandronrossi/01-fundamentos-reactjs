import styles from './Post.module.css';

export function Post (props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/alexandronrossi.png" />
                    <div className={styles.authorInfo}>
                        <strong>Alexandro N. Rossi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:30h" dateTime="2022-05-11 08:30:20">Publicado há 1 h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>Acabei de terminar esse cursinho delicinha.</p>
                <p><a href="javascript:void(0)">jane.design/doctorcare</a></p>
                <p>
                    <a href="javascript:void(0)">#novoprojeto</a>{' '}
                    <a href="javascript:void(0)">#nlw</a>{' '}
                    <a href="javascript:void(0)">#rocketseat</a>
                </p>
            </div>
        </article>
    );
}