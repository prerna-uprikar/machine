import styles from "./Header.module.scss";

function Header() {
  return (
    <>
    <div className={styles.Header}>
      <div className={styles.HeaderWrapper}>
        <div className={styles.logo}>
          <a href="" className={styles.Logo}>
            Stimulus
          </a>
        </div>
        <div className={styles.NavItems}>
          <li className={styles.navList}>HOME</li>
          <li className={styles.navList}>ABOUT ME</li>
          <li className={styles.navList}>EXPERIENCES</li>
          <li className={styles.navList}>TESTIMONIAL</li>
          <li className={styles.navList}>CONTACT</li>
        </div>
      </div>

      <div className={styles.bgWrapper}>
        <div className={styles.bgiMAGE}></div>
        <div className={styles.bgTextWrap}>
          <h1 className={styles.welcome}>WELCOME TO MY WEBSITE</h1>
          <p className={styles.Hello}>Hello, I am Stimulus currently based in New York city.</p>
          <p className={styles.Donec}>
            Donec auctor arcu at efficitur lacinia. Praesent bibendum efficitur
            ipsum, et mattis tellus interdum in. Ut a dictum purus. Vestibulum
            non pellentesque felis, sed dignissim urna. Vestibulum id accumsan
            quam.
          </p>
          <div className={styles.GetStarted}>
            <button className={styles.getStartedBtn}>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>

</>
  );
}

export default Header;
