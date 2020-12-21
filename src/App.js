import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import NotificationMessage from './components/NotificationMessage';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const button = { good, neutral, bad };

  const handleIncrementFeedback = option => {
    const obj = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    obj[option](state => state + 1);
  };

  const countPositiveFeedbackPercentage = total => {
    if (good || neutral || bad > 0) {
      return Math.round((good * 100) / total);
    }

    return 0;
  };

  return (
    <>
      <div></div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(button)}
          onLeaveFeedback={handleIncrementFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <NotificationMessage message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        )}
      </Section>
    </>
  );
}

export default App;
