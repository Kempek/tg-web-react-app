import React, { useCallback, useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'
function Form() {
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')
	const [subject, setSubject] = useState('physical')
	const [street, setStreet] = useState('')
	const { tg } = useTelegram()
	const onSendData = useCallback(() => {
		const data = {
			country,
			street,
			subject,
		}
		tg.sendData(JSON.stringify(data))
	}, [country, street, subject])
	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData)
		return () => {
			tg.offEvent('mainButtonClicked', onSendData)
		}
	}, [onSendData])
	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные',
		})
	}, [tg])
	useEffect(() => {
		if (!street || !country) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [country, street])
	const onChangeCountry = e => {
		setCountry(e.target.value)
	}
	const onChangeCity = e => {
		setCity(e.target.value)
	}
	const onChangeStreet = e => {
		setStreet(e.target.value)
	}
	const onChangeSubject = e => {
		setSubject(e.target.value)
	}
	return (
		<div className='form'>
			<h3>Введите ваши данные</h3>
			<input
				className={'input'}
				type='text'
				placeholder={'Страна'}
				value={country}
				onChange={onChangeCountry}
			/>
			<input
				className={'input'}
				type='text'
				placeholder={'Город'}
				value={city}
				onChange={onChangeCity}
			/>
			<input
				className={'input'}
				type='text'
				placeholder={'Улица'}
				value={street}
				onChange={onChangeStreet}
			/>
			<select className={'select'} value={subject} onChange={onChangeSubject}>
				<option value={'physical'}>Физ.лицо</option>
				<option value={'legal'}>Юр.лицо</option>
			</select>
		</div>
	)
}

export default Form
