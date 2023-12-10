import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickFeedback = option => {
    switch (option.toLowerCase()) {
      case "good":
        setGood(good + 1);
        break;
      
      case "neutral":
        setNeutral(neutral + 1);
        break;
      
      case "bad":
        setBad(bad + 1);
        break;
      
      default:
        alert("Invalid option");
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={handleClickFeedback}
          />
        }
      />

      <Section
        title="Statistics"
        children={
          countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )
        }
      />
    </>
  );
};
