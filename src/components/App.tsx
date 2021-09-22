import React, {Component} from 'react';
import { connect} from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../redusers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends Component<AppProps>{

  componentDidMount() {
    this.props.fetchTodos();
  }

  onButtonClick = () : void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void =>{
    this.props.deleteTodo(id);
  }

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={()=>this.onTodoClick(todo.id)} key = {todo.id}>{todo.title}</div>)
    })
  }

  render(){
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = ({todos} : StoreState) : { todos: Todo[]} => {
  return {todos};
};

export const App = connect(
    mapStateToProps,
    {fetchTodos, deleteTodo}
)(_App);

