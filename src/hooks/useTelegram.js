const tg = window.Telegram?.WebApp // Добавляем опциональную проверку

export function useTelegram() {
	const onClose = () => {
		if (!tg) {
			console.warn('Telegram WebApp not initialized')
			return
		}
		tg.close()
	}

	const onToggleButton = () => {
		if (!tg?.MainButton) {
			console.warn('MainButton not available')
			return
		}

		if (tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}

	return {
		tg,
		onClose, // Добавляем onClose в возвращаемый объект
		onToggleButton,
		user: tg?.initDataUnsafe?.user, // Добавляем проверку для tg
		queryId: tg.initDataUnsafe?.query_id,
	}
}
