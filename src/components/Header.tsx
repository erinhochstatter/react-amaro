import styles from './Header.module.scss';
import snek from '../assets/snek.svg'
import swagUpper from '../assets/swag_upper.svg'
import swagLower from '../assets/swag_lower.svg'
import sideDot from '../assets/dot_side.svg'

export function Header() {
  return (
    <div data-testid="header" className={styles.container}>
      <div className={styles.logotown}>
        <div className={styles.logotownLeft}>
          <img src={swagUpper} className={styles.swag} alt="a leafy boundary" />
          <img src={sideDot} className={styles.sideDot} alt="a leafy boundary" />
          <img src={swagLower} className={styles.swag} alt="a leafy boundary" />
        </div>
        <div className={styles.logotownMain}>
          <img src={snek} className={styles.snek} alt="a chalice with a snake for the stem" />
          <div className={styles.heroText}> Don't stop thinking about amaro </div>
        </div>
        <div className={styles.logotownRight}>
          <img src={swagUpper} className={styles.reverseSwag} alt="a leafy boundary" />
          <img src={sideDot} className={styles.sideDot} alt="a leafy boundary" />
          <img src={swagLower} className={styles.reverseSwag} alt="a leafy boundary" />
        </div>
      </div>
    </div>
  );
}