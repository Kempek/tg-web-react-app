import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
function App() {
	const { onToggleButton } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])
	const onClose = () => {
		tg.close()
	}
	return (
		<div className='App'>
			work
			<button onClick={onClose}>Закрыть</button>
		</div>
	)
}

export default App
