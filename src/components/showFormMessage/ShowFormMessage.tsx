import {FC} from 'react'

import styles from './showFormMessage.module.scss';

type MessageForm = {
   text: string
}
export const ShowFormMessage: FC<MessageForm> = ({text}) => {
  return (
    <div className={styles.message}>
      <div>
        <div className={styles.title}>{text}</div>
      </div>
    </div>
  );
}
