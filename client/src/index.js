import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col, Alert } from 'reactstrap';
import Footer from './footer';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            title : '',
            userName: '',
            birthDay: '',
            location: '',
            time: '',
            feedback: '',
            answered: false,
            submitted: false,
        };
    }

    componentDidMount(){
        this.setState({answered : false, submitted : false});
    }

    render() {

        const step1 = (
            <Form>
                <FormGroup>
                    <Label for="select">Title</Label>
                    <Input type="select" name="select" id="select" value={this.state.title} onChange={this.updateTitle.bind(this)}>
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
                    <Label for="date">Date of Birth</Label>
                    <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="choose date"
                        value={this.state.birthDay} 
                        onChange={this.updateBirthday.bind(this)} />
                </FormGroup>
                <Button onClick={this.updateAnswerStatus.bind(this)}>Next</Button>
            </Form>
        );

        const step2 = (
            <Form>
                <FormGroup>
                    <Label for="location">Current Location</Label>
                    <Input id="location" value={this.state.location} onChange={this.updateLocation.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="time">Current Time</Label>
                    <Input
                        type="time"
                        name="time"
                        id="time"
                        placeholder="current time"
                        value={this.state.time}
                        onChange={this.updateTime.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Label for="feedback">User Feedback</Label>
                    <Input type="textarea" id="feedback" value={this.state.feedback} onChange={this.updateFeedback.bind(this)}/>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );

        const thankYou = (<h1>Thank you!!</h1>);

        return (
            <div>
                <Row>
                    <Col xs="1" sm="3" md="1" lg="2"></Col>
                    <Col xs="10" sm="6" md="10" lg="9">
                        <div>
                            {this.state.submitted ? thankYou : (this.state.answered ? step2 : step1)}
                            <Footer />
                        </div>
                    </Col>
                    <Col xs="1" sm="3" md="1" lg="2"></Col>
                </Row>
            </div>
        );
    }

    updateAnswerStatus(e){
        let current = this.state.answered;
        this.setState({answered : !current});
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

    updateLocation(e){
        this.setState({location : e.target.value});
    }

    updateTime(e){
        this.setState({time : e.target.value});
    }

    updateFeedback(e){
        this.setState({feedback : e.target.value});
    }

    handleSubmit(e){
        console.log(this.state);
        this.submitForm(
            this.state.title,
            this.state.userName,
            this.state.birthDay,
            this.state.location,
            this.state.time,
            this.state.feedback
        );
        this.setState({submitted : true});
    }

    submitForm(title, userName, birthDay, location, time, feedback) {
        axios.post('http://localhost:8086/api/submitSurvey',
        {
            title: title,
            userName : userName,
            birthDay : birthDay,
            currentLocation: location,
            currentTime: time,
            feedback: feedback
        }).then(function (response) {
            
        }).catch(function (error) {
            console.log(error);
        });
   }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);