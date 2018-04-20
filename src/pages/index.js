import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = ({ data }) => (
  <div className={styles.pageContainer}>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>It's not as harmless as you think.</p>
    <p className={styles.siteDescription}>{data.site.siteMetadata.description}</p>

    <div className={styles.iconsArea}>

      <div className={styles.iconCard}>
        <a href="/harm">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <h2 className={styles.cardTitle}>Harm</h2>
        <p className={styles.cardDescription}>Beatings, rapes and murder are a reality of prostitution.</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/consequences">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <h2 className={styles.cardTitle}>Consequences</h2>
                <p className={styles.cardDescription}>Police are arresting men who buy sex.</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/alternatives">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <h2 className={styles.cardTitle}>Alternatives</h2>     
        <p className={styles.cardDescription}>Make the choice without regret.</p>
      </div>

      <div className={styles.iconCard}>
        <a href="/">
          <img src="http://www.free-icons-download.net/images/halloween-scary-black-cat-icon-72554.png" alt="Placeholder cat icon"/>
        </a>
        <h2 className={styles.cardTitle}>Contact</h2>      
        <p className={styles.cardDescription}>Get help from men who understand this experience.</p>
      </div>

    </div>
  </div>
)

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
