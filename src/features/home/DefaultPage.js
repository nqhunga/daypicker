import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as moment from 'moment';
import {
  Card,
  Button,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import WeekDay from './WeekDay';
import DayMonth from './DayMonth';

const Moment = moment();

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {
      selectMonth,
      getCurrentDate,
      processDate,

      } = this.props.actions;
    selectMonth(Moment.format('MMMM'));
    getCurrentDate(Moment.format('YYYY-MM-DD'));
    processDate(Moment.format('YYYY-MM-DD'));
  }

  previousMonth = () => {
    const { selectMonth, processDate } = this.props.actions;
    let month = this.props.home.currentMonth;
    let date = this.props.home.nextDate;
    month = moment(month, 'MMMM').add(-1, 'M').format('MMMM');
    selectMonth(month);
    date = moment(date).add(-1, 'M');
    processDate(date.format('YYYY-MM-DD'));
  }

  nextMonth = () => {
    const { selectMonth, processDate } = this.props.actions;
    let month = this.props.home.currentMonth;
    let date = this.props.home.nextDate;
    month = moment(month, 'MMMM').add(1, 'M').format('MMMM');
    selectMonth(month);
    date = moment(date).add(1, 'M');
    processDate(date.format('YYYY-MM-DD'));
  }

  toggleStart = () => {
    this.props.actions.toggleStartInput();
  }

  toggleEnd = () => {
    this.props.actions.toggleEndInput();
  }

  submitStart = () => {
    const selectedEnd = this.props.home.selectedEnd;
    const selectedDate = this.props.home.selectedDate;
    const currentDate = this.props.home.currentDate;
    if (!selectedEnd) {
      this.props.actions.submitDayStart(selectedDate);
    } else {
      if (
        moment(selectedDate).isBefore(selectedEnd) &&
        moment(selectedDate).isAfter(currentDate)
      ) {
        this.props.actions.submitDayStart(selectedDate);
      }
      this.props.actions.showAlert('Please pick date')
    }
    this.toggleStart();
  }

  submitEnd = () => {
    this.props.actions.submitDayEnd(this.props.home.selectedDate);
    this.toggleEnd();
  }

  changeEventName = (e) => {
    this.props.actions.changeEventName(e.target.value);
  }

  render() {
    const {
      currentMonth,
      inputStart,
      inputEnd,
      selectedStart,
      selectedEnd
      } = this.props.home;

    const renderCalendar = () => {
      return <Card className="calendar-card">
        <CardHeader className="calendar-header">
          <Button onClick={this.previousMonth}>Previous</Button>
          <CardTitle className="month-name">{currentMonth}</CardTitle>
          <Button onClick={this.nextMonth}>Next</Button>
        </CardHeader>
        <CardBody className="calendar-body">
          <WeekDay />
          <DayMonth />
        </CardBody>
      </Card>
    }
    return (
      <div className="home-default-page">
        <Form>
          <FormGroup row>
            <Label sm={2}>Event Name</Label>
            <Col>
              <Input
                type="Text"
                name="event name"
                onChange={e => this.changeEventName(e)}
                placeholder="Event.."
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Button onClick={this.toggleStart}>
              {selectedStart ? selectedStart : 'Select Day Start'}
            </Button>
            <Modal
              isOpen={inputStart}
              toggle={this.toggleStart}
              className="modal-calendar"
            >
              <ModalHeader>Pick start day</ModalHeader>
              <ModalBody className="calendar-container">
                {renderCalendar()}
              </ModalBody>
              <ModalFooter>
                <Button onClick={this.submitStart}>Submit</Button>
                <Button onClick={this.toggleStart}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
          <FormGroup row>
            <Button onClick={this.toggleEnd}>
              {selectedEnd ? selectedEnd : 'Select Day End'}
            </Button>
            <Modal
              isOpen={inputEnd}
              toggle={this.toggleEnd}
              className="modal-calendar"
            >
              <ModalHeader>Pick end day</ModalHeader>
              <ModalBody className="calendar-container">
                {renderCalendar()}
              </ModalBody>
              <ModalFooter>
                <Button onClick={this.submitEnd}>Submit</Button>
                <Button onClick={this.toggleEnd}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
