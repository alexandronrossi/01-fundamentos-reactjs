import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
	return (
		<div>
			<Header />

			<Post
				author="Alexandro do Nascimento Rossi"
				content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque doloremque, officiis, numquam architecto ducimus iste laborum atque quae animi ad fuga? Id quos veniam perspiciatis ea harum nihil tenetur fugiat."
			/>
		</div>
	)
}