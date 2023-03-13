import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, good, neutral, bad }) => {
  return (
    <>
      <button type="button" name={options[0]} onClick={good}>
        Good
      </button>
      <button type="button" name={options[1]} onClick={neutral}>
        Neutral
      </button>
      <button type="button" name={options[2]} onClick={bad}>
        Bad
      </button>
    </>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
