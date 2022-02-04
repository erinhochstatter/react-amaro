import styles from './Header.module.scss';
export function Header() {
  return (
    <div data-testid="header" className={styles.container}>
      <div className={styles.heroText}>
        <p>Don't stop thinking about amaro</p>
      </div>
    </div>
  );
}