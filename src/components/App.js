import styles from './App.css';
import cssModulesReactLoader from '../cssModulesReactLoader';

const React = cssModulesReactLoader(styles);

import Logo from './Logo/Logo';
import ComponentA from './ComponentA/ComponentA';
import ComponentB from './ComponentB/ComponentB';

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <Logo />
        <h1>CSS Modules Selector Experiment</h1>
        <ComponentA />
        <ComponentB />
      </div>
    );
  }

};
