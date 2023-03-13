import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <span good={good}>Good:{good}</span>
      </li>
      <li>
        <span neutral={neutral}>Neutral:{neutral}</span>
      </li>
      <li>
        <span bad={bad}>Bad:{bad}</span>
      </li>
      <li>
        <span>Total:{total}</span>
      </li>
      <li>
        <span>PositiveFeedBack:</span>
        {positivePercentage > 0.1 && (
          <span>{positivePercentage.toFixed(0)}%</span>
        )}
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
