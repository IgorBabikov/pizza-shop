import {FC} from 'react'

import './spinner.scss';

export const Spinner: FC = () => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
