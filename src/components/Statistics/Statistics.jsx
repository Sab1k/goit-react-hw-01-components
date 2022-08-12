import PropTypes from 'prop-types';

import styles from './Statistics.module.css';
import StatisticItem from './StatisticsItem';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.section}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.list}>
        {stats.map(item => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
