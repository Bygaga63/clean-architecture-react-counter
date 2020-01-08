import React from "react";
import "../stylesheets/App.css";
import { Header } from "./Header";
import { CounterComponent } from "./Counter";
import { AppWrapper } from "./AppWrapper";
import {Counter} from "../../core/entities";
import {StateType} from "../../core/frameworks";
import {counterSelector, decrementCounterAction, incrementCounterAction} from "../../core/adapters/redux";
import {connect} from "react-redux";

interface Props {
  counter: Counter;
  decrement: (qty: number) => void;
  increment: (qty: number) => void;
}

export const AppModel = (props: Props) => {
  const increment = () => props.increment(1);
  const decrement = () => props.decrement(1);

  return (
    <AppWrapper>
      <Header />
      <CounterComponent
        decrement={decrement}
        increment={increment}
        counter={props.counter.count}
      />
    </AppWrapper>
  );
};

const mapStateToProps = (state: StateType) => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = {
  decrement: decrementCounterAction,
  increment: incrementCounterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppModel);
