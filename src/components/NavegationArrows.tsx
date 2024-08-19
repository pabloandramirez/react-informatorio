import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import styles from '../styles/navegationArrows.module.css';

export default function NavegationArrows(){
    return(
        <div className={styles.arrowFamily}>
            <a href="#">
                <img src={leftArrow} alt="left-arrow" className={styles.leftArrow} />
            </a>
            <a href="#">
                <img src={rightArrow} alt="right-arrow" className={styles.rightArrow} />
            </a>
        </div>
    )
}