import img from './error.gif'
import style from './errorMessage.module.scss'

const ErrorMessage = () => {
   return (
      <>
        <h2 className={style.title}>Произошла ошибка! не удалось получить данные</h2>

        <img className={style.error} src={img} alt='error' />
      </>

   )
}

export default ErrorMessage