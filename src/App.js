import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import { useTelegram } from './hooks/useTelegram'
function App() {
	const { onToggleButton, tg } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route index element={<ProductList />} />
				<Route path={'form'} element={<Form />} />
			</Routes>
		</div>
	)
}

export default App
