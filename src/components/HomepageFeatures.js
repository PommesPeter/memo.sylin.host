import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Enjoy Study day',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Enjoy every day in your life. Life is not only about learning, but
        more beautiful things are waiting for you. Make life better through
        the little details in life.
      </>
    ),
  },
  {
    title: 'Develop A Skill',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Turn learning into a skill and make the most of your knowledge
        to make life better. Focus on creating better things.
      </>
    ),
  },
  {
    title: 'Coding',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create something interesting through code, improve the efficiency
        and way of daily work, and innovate to make life better.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
