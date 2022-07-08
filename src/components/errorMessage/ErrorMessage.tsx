import {FC} from 'react'

import img from './error.gif'
import style from './errorMessage.module.scss'

export const ErrorMessage: FC = () => {
   return (
      <>
        <h2 className={style.title}>Произошла ошибка! не удалось получить данные</h2>

        <img className={style.error} src={img} alt='error' />
      </>

   )
}
