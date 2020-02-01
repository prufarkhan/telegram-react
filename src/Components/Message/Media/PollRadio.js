/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Radio from '@material-ui/core/Radio';
import CircularProgress from '@material-ui/core/CircularProgress';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import './PollRadio.css';

class PollRadio extends React.Component {
    render() {
        const { chosen, beingChosen, hidden, onChange } = this.props;

        return (
            <div className={classNames('poll-radio', { 'poll-radio-hidden': hidden })}>
                <Radio
                    classes={{ root: 'poll-radio-root' }}
                    color='primary'
                    checked={chosen || beingChosen}
                    onChange={onChange}
                    checkedIcon={<RadioButtonCheckedIcon classes={{ root: beingChosen ? 'poll-radio-icon' : null }} />}
                />
                {beingChosen && (
                    <CircularProgress size={20} thickness={4.4} classes={{ root: 'poll-radio-progress-root' }} />
                )}
            </div>
        );
    }
}

PollRadio.propTypes = {
    chosen: PropTypes.bool.isRequired,
    beingChosen: PropTypes.bool.isRequired,
    hidden: PropTypes.bool
};

export default PollRadio;