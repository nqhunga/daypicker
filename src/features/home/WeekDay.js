import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as moment from 'moment';

export class WeekDay extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const weekDay = [0,1,2,3,4,5,6];
    const renderWeekDay = (weekDays) => {
      return weekDays.map(weekDay => {
        return <div className="weekDay" key={weekDay}>
          {moment().weekday(weekDay).format('dddd')}
        </div>
      })
    }
    return (
      <div className="day-show"> 
        {renderWeekDay(weekDay)}
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekDay);
