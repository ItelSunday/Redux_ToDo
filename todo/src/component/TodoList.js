import React from 'react'
import { connect } from 'react-redux' 
//HOC - make you connect to a store, it takes in a fn & object

const TodoList = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.todo}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  todo: state.todo //state refers to state in reducer

})
export default connect
(mapStateToProps, {}) (TodoList);
