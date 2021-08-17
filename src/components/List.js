import PropTypes from 'prop-types'
import ListTitle from './ListTitle';
import ListItems from './ListItems';

export default function List(props) {
  const { items, setState } = props;
  return (
    <div className="table">
      <ListTitle />
      <ListItems items={items} setState={setState} />
    </div>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.string,
    distance: PropTypes.string
  })),
  setState: PropTypes.func
}
