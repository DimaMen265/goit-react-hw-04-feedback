import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good > 0 ? Math.round((this.state.good * 100) / this.countTotalFeedback()) : 0;
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={["Good", "Neutral", "Bad"]}
              onLeaveFeedback={this.handleClickFeedback}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )
          }
        />
      </>
    );
  };
};
