import PropTypes from 'prop-types'

export default function ListItem(props) {
  const { item, onDeleteItem } = props;

  return (
    <div key={item.key} className="table__item">
      <div className="table__timestamp">{item.timestamp}</div>
      <div className="table__distance">{item.distance}</div>
      <div  className="table__delete" onClick={onDeleteItem}>✘</div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    timestamp: PropTypes.string,
    distance: PropTypes.string,
  }),
  onDeleteItem: PropTypes.func
}
