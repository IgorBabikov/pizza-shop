import { useDispatch } from 'react-redux';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FC } from 'react';

import { setDataForm, setMessageForm } from '../../redux/slices/formSlice';

import styles from './form.module.scss';

type Data = {
  name: string;
  email: string;
  phone: string;
};

type Input = {
  id: string;
  type: string;
  name: string;
  placeholder: string;
}

const MyTextInput: FC<Input> = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...props} {...field} />
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </>
  );
};

const FormCart: FC = () => {
  const dispatch = useDispatch();

  const addDataForm = async (obj: Data) => {
    try {
      await axios.post(`https://62a54ce7430ba53411c504a9.mockapi.io/pizza-from`, obj);
      hideForm();
      showFormMessage();
    } catch (e) {
      alert('Не удалось отправить данные!');
    }
  };

  const hideForm = () => {
    dispatch(setDataForm(false));
  };

  const showFormMessage = () => {
    dispatch(setMessageForm(true));

    setTimeout(() => {
      dispatch(setMessageForm(false));
    }, 2000);
  };

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'Минимум 2 символа!').required('Обязательное поле!'),
          email: Yup.string()
            .email('Неправильно введен email адрес')
            .required('Обязательное поле!'),
          phone: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              'Номер телефона недействителен',
            )
            .required('Обязательное поле!'),
        })}

        onSubmit={(values) => addDataForm(values)}>

        <Form className={styles.popup}>
          <img onClick={hideForm} className={styles.close} src="img/close.svg" alt="close" />
          <MyTextInput id="name" type="text" name="name" placeholder="Имя" />
          <MyTextInput id="email" type="text" name="email" placeholder="Почта" />
          <MyTextInput id="phone" type="number" name="phone" placeholder="Телефон" />
          <button className={styles.btn}>Отправить</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCart;
