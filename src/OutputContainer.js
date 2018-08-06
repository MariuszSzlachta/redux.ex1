import { connect } from  'react-redux';
import Output from './Output';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(Output);