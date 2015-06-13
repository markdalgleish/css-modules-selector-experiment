import styles from './ComponentB.css';
import cssModulesReactLoader from '../../cssModulesReactLoader';

const React = cssModulesReactLoader(styles);

export default class ComponentB extends React.Component {

  render() {
    return (
      <div>
        <h2>ComponentB</h2>
      </div>
    );
  }

};
