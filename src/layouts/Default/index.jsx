import * as React from 'react';

import { Navbar } from './../../components/Navbar';
import * as Styles from './default.module.css';


const DefaultLayout = ({ children }) => {
  return (
    <main className={Styles.wrapper}>
      <Navbar />
      <div className={Styles.inner}>
        { children }
      </div>
    </main>
  )
}

export default DefaultLayout