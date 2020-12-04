import React from 'react';
import PropTypes from 'prop-types';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const Statistics = ({title, stats}) => (<section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="statList">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
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
