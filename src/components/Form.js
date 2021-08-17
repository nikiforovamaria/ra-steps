import { useRef } from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
  const { onAddItem, handleTimestamp, handleDistance } = props;

  const formRef = useRef();

  const onClick = () => {
    formRef.current.reset();
  }

  return (
    <form ref={formRef} className="form" onSubmit={(e) => onAddItem(e)}>
      <div className="form__date">
        <div>Дата (ДД.ММ.ГГ)</div>
        <input placeholder='Введите дату' id="date" name="date" type="text" onChange={(e) => handleTimestamp(e)}/>
      </div>
      <div className="form__distance">
        <div>Пройдено км</div>
        <input placeholder='Введите дистанцию' id="distance" name="distance" type="text" onChange={(e) => handleDistance(e)}/>
      </div>
      <input onClick={(e) => onClick(e)} id="submit" type="submit" value="OK"/>
    </form>
  )
}

Form.propTypes = {
  onAddItem: PropTypes.func,
  handleTimestamp: PropTypes.func,
  handleDistance: PropTypes.func,
}
