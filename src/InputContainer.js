import { connect } from 'react-redux';
import Input from './Input';
import { handleInput } from './actions';

const mapDispatchToProps = dispatch => ({
  handleInput: (text) => dispach(handleInput(text))
})

export default connect(null, mapDispatchToProps)(Input);
