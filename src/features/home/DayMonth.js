import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as moment from 'moment';

export class DayMonth extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const {
      nextDate,
      currentMonth,
      selectedDate,
      selectedStart,
      selectedEnd
      } = this.props.home;

    const arrayOfMonth = thisDay => {
      const startWeek = moment(thisDay).startOf('month').week();
      const endWeek = moment(thisDay).endOf('month').week();
      let calendar = [];
      const fillArray = (n, i, week) =>
        moment().week(week).startOf('week').clone().add(n + i, 'day');

      if (startWeek < endWeek) {
        for (let week = startWeek; week <= endWeek; week++) {
          calendar.push({
            week: week,
            days: Array(7).fill(0).map(
              (n, i) => fillArray(n, i, week))
          })
        }
      } else {
        if (endWeek === 1) {
          for (let week = startWeek; week <= 53; week++) {
            calendar.push({
              week: week,
              days: Array(7).fill(0).map(
                (n, i) => fillArray(n, i, week))
            })
          }
        } else {
          const splitWeek = [];
          for (let week = 1; week <= endWeek; week++) {
            splitWeek.push({
              week: week,
              days: Array(7).fill(0).map(
                (n, i) => fillArray(n, i, week))
            })
          };
          for (let week = startWeek; week <= 53; week++) {
            calendar.push({
              week: week,
              days: Array(7).fill(0).map(
                (n, i) => fillArray(n, i, week))
            })
          };
          calendar = calendar.concat(splitWeek);
        }
      }
      return calendar
    }

    const renderRow = (Rows) => {
      return Rows.map(Row => {
        return <div className="week-row" key={Row.week}>
          {renderCell(Row.days)}
        </div>
      })
    }

    const checkMonth = (Cell) => {
      return Cell.format('MMMM') === currentMonth ? '' : 'outMonth'
    }

    const jumpToCorrectMonth = (e, Cell) => {
      if (Cell.format('MMMM') !== currentMonth) {
        this.props.actions.selectMonth(Cell.format('MMMM'));
      }
      this.props.actions.processDate(Cell.format('YYYY-MM-DD'));
      this.props.actions.selectDate(Cell.format('YYYY-MM-DD'));
    }

    const isSelected = Cell => {
      return Cell.format('YYYY-MM-DD') === moment(selectedDate).format('YYYY-MM-DD') ?
        'isSelected' : ''
    }

    const isStart = Cell => {
      return selectedStart && selectedStart === Cell.format('YYYY-MM-DD') ?
        'isStart' : ''
    }

    const isEnd = Cell => {
      return selectedEnd && selectedEnd === Cell.format('YYYY-MM-DD') ?
        'isEnd' : ''
    }

    const isBetween = Cell => {
      if (selectedStart && selectedEnd) {
        return moment(Cell).isBetween(selectedStart, selectedEnd) ?
          'isBetween' : ''
      } 
      return ''
    }

    const renderCell = (Cells) => {
      return Cells.map(Cell => {
        return <div key={Cell}
          className={`cell ${checkMonth(Cell)} ${isSelected(Cell)} ${isStart(Cell)} ${isEnd(Cell)} ${isBetween(Cell)}`}
          onClick={e => jumpToCorrectMonth(e, Cell)}
        >
          {reduceNumber(Cell.format('DD'))}
        </div>
      })
    }

    const reduceNumber = (number) => {
      if (number[0] === '0') {
        return number.slice(1)
      }
      return number
    }

    return (
      <div className="cell-show">
        {nextDate ? renderRow(arrayOfMonth(nextDate)) : ''}
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
)(DayMonth);
