import { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {

  state = {
   good: 0,
   neutral: 0,
   bad: 0
 }

 onLeaveFeedback = option => {
  this.setState(prevState => {
    return { [option]: prevState[option] + 1 };
  });
};

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad
};

countPositiveFeedbackPercentage = total => {
  return `${Math.round((this.state.good / total) * 100)}%`;
};

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const res = this.countPositiveFeedbackPercentage(total);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
        <GlobalStyle/> 
          <Section title="Please leave feedback">
            <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback}
              ></FeedbackOptions> 
          </Section>
      
          <Section title="Statistics">

          {this.countTotalFeedback() === 0 ? (
                <Notification message="There is no feedback" />
              ) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  count={res}
                />
              )}

          </Section>
        </div>
      </div>
    );
 }
 

}


