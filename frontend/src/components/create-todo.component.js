import axios from 'axios';
import React, { Component } from 'react';
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";


const Todo = props => (
    <span> {props.todo.todo_description} </span>
 )


  //var targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
  //var entries = todo_description;
  //var wordz = <span/>;

export default class CreateTodo extends Component {  
        constructor(props) {
            super(props);
            this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
                todo_description: ''
            }
                this.state = {todos: []};
        
        }
        onChangeTodoDescription(e) {
            this.setState({
                todo_description: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();
            
            console.log(`Form submitted:`);
            console.log(`Todo Description: ${this.state.todo_description}`);
         
            const newTodo = {
                todo_description: this.state.todo_description,
                todo_completed: this.state.todo_completed
            };
        
            axios.post('http://localhost:3000/todos/add', newTodo)
                .then(res => console.log(res.data));
        
            this.setState({
                todo_description: '',
            })
            window.location.reload();
           
        }
        //////////

      
        componentDidMount() {
            axios.get('http://localhost:3000/todos/')
                .then(response => {
                    this.setState({ todos: response.data });
                })
                .catch(function (error){
                    console.log(error);
                })
        }
    
        todoList() {
            return this.state.todos.map(function(currentTodo, i){
                return <Todo todo={currentTodo} key={i} />;
            })
        }

        /*

        textColor(e) {
            e.preventDefault();
          response.forEach(e => {
           
              //referencia a bases de datos
            wordz.text(e.entry + " ");
            wordz.addClass(".wordz");
            wordz.css('color', targetColorOfText);
            entries.append(wordz);
        }
    }

    */

        render() {
        return (
          
            <div>
                <Container>
                    <Row>
                    <Col size="xl-2"> </Col>
                   
                    <Col size="xl-8"> 
                    <h1>Please write something here ;)</h1>
                    </Col>
                    </Row>
                <Row>
                <Col size="xl-2"> </Col>
                <Col size="xl-8"> 
                <form onSubmit={this.onSubmit}>              
                    <div className="form-group">               
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />                       
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
            
                </form>
                </Col>
                </Row>
            <div>
            <Col size="md-12"> 
            <div  style={{ marginTop: 20 }}  class="novel" >
                        <h3>The Novel:</h3>
                    { this.todoList() } 
                        
            </div>
            </Col> 

        </div>
        </Container>
        </div>
          
        )
         
    }


 
}