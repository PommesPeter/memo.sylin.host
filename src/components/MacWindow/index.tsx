import React, {type ReactNode} from "react";

import styles from './styles.module.css';

interface Props {
    children: ReactNode;
    minHeight: number;
}

function MacWindows({
    children,
    minHeight,
}: Props) : JSX.Element {
    return (
        <div className={styles.macWindow} style={{minHeight}}>
      <div className={styles.macWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        {/* <div className={styles.macWindowAddressBar}>2323</div> */}
        {/* <div className={styles.macWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div> */}
      </div>

      <div className={styles.macWindowBody}>{children}</div>
    </div>
    )
}

export default MacWindows;