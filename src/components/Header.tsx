import rocket from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
    return(
        <div className={styles.header} >
            <img src={rocket} />
            <div>
                <h1>to<span className={styles.span}>do</span></h1>
            </div>
        </div>
    )
}