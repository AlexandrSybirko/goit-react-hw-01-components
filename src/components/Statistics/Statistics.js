import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const Statistics = ({title, stats}) => (<section className={s.statistics}>
      {title && <h2>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
    </ul>
    </section>
    )

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
