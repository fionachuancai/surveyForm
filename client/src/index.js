import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = { title : '', userName: '', birthDay: '' };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="1" sm="3" md="1" lg="2"></Col>
                    <Col xs="10" sm="6" md="10" lg="9">
                        <Form>
                            <FormGroup>
                              <Label for="exampleSelect">Title</Label>
                              <Input type="select" name="select" id="exampleSelect" value={this.state.title} onChange={this.updateTitle.bind(this)}>
                                <option>Miss</option>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                                <option>Mx</option>
                                <option>Other</option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="userName">Name</Label>
                                <Input id="userName" value={this.state.userName} onChange={this.updateUsername.bind(this)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" value={this.state.birthDay}  onChange={this.updateBirthday.bind(this)}/>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs="1" sm="3" md="1" lg="2"></Col>
                </Row>
                
            </div>
        );
    }

    updateTitle(e){
        this.setState({title : e.target.value});
      }
    updateUsername(e){
        this.setState({userName : e.target.value});
    }

    updateBirthday(e){
        this.setState({birthDay : e.target.value});
    }

    handleSubmit(e){
        console.log(this.state);
        this.submitForm(this.state.title, this.state.userName, this.state.birthDay);
    }

    submitForm(title, userName, password) {
        axios.post('http://localhost:8086/api/submitSurvey',
        {
            title: title, userName : userName, password : password
        }).then(function (response) {
            // console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
   }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);