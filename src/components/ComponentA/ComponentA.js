import styles from './ComponentA.css';
import cssModulesReactLoader from '../../cssModulesReactLoader';

const React = cssModulesReactLoader(styles);

export default class ComponentA extends React.Component {

  render() {
    return (
      <div>
        <h2>ComponentA</h2>
      </div>
    );
  }

};
