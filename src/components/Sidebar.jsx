import styles from './Sidebar.module.css';

import coverImg from '../assets/cover.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGRldiUyMGNvdmVyfGVufDB8fDB8fHww"
            />

            <div className={styles.profile}>
                <strong>Alexandro do Nascimento Rossi</strong>
                <span>Fullstack Developer</span>
            </div>

            <footer>
                <a href="javascript:void(0)">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}