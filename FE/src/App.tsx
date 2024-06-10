import React, { useState } from "react";
import axios from "axios";

const App: React.FC = () => {
	const [data, setData] = useState<{ title: string; body: string } | null>(
		null
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = () => {
		setLoading(true);
		setError(null);
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-center text-white'>
			<h1 className='text-5xl font-extrabold mb-8'>
				이젠 미룰 수 없다! CI/CD 마스터가 되어보자!
			</h1>
			<p className='mb-4 text-xl'>버튼을 눌러서 API를 호출해보세요</p>
			<button
				onClick={fetchData}
				className='bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-100 transition duration-300'
			>
				API 호출
			</button>
			{loading && <p className='mt-4 text-lg animate-pulse'>Loading...</p>}
			{error && (
				<p className='mt-4 text-lg text-red-500'>Error: {error.message}</p>
			)}
			{data && (
				<div className='mt-8 p-6 bg-white text-blue-500 rounded-lg shadow-lg max-w-md'>
					<h2 className='text-3xl font-bold mb-4'>{data.title}</h2>
					<p>{data.body}</p>
				</div>
			)}
		</div>
	);
};

export default App;
