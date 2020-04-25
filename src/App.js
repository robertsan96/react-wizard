import React from "react";

import * as styles from "./scss/App.module.scss";
import Wizard from "./components/wizard/Wizard";

const App = () => {
  return (
    <div className={styles.AppWrapper}>
      <div className={styles.AppWrapperBackgroundImage}></div>
      <div className={styles.Content}>
        <Wizard />
      </div>
    </div>
  );
};

export default App;
