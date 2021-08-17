import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem';

export default function ListItems(props) {
  const  { items, setState } = props;

  const onDeleteItem = (index) => {
    const arr = [ ...items ];
    arr.splice(index, 1);
    setState(() => arr);
  }

  return (
    <div>
      <div className="table__items">
        {items.map((item, index) => <ListItem key={item.key} item={item} onDeleteItem={() => onDeleteItem(index)} />)}
      </div>
    </div>
  )
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.string,
    distance: PropTypes.string
  })),
  setState: PropTypes.func
}
