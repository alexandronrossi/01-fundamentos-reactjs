import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
	{
		id: 1,
		author: {
			id: 1,
			avatarUrl: 'https://github.com/alexandronrossi.png',
			name: 'Alexandro N. Rossi',
			role: 'Web Developer'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera!' },
			{ type: 'paragraph', content: 'Acabei de terminar esse cursinho delicinha.' },
			{ type: 'link', content: 'javascript:void(0)">jane.design/doctorcare', 'url': '' },
		],
		publishedAt: new Date('2022-05-03 20:00:00')
	},
	{
		id: 2,
		author: {
			id: 1,
			avatarUrl: 'https://github.com/alexandronrossi.png',
			name: 'Alexandro N. Rossi',
			role: 'Web Developer'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera!' },
			{ type: 'paragraph', content: 'Acabei de terminar esse cursinho delicinha.' },
			{ type: 'link', content: 'jane.design/doctorcare', 'url': 'javascript:void(0)' },
		],
		publishedAt: new Date('2024-08-04 09:00:00')
	}
];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map(post => {
						return (
							<Post
							  key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>

		</div>
	)
}