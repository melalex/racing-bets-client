/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, Button, Row, Container} from "reactstrap";
import {I18n} from 'react-redux-i18n'
import DateTimePicker from 'react-datetime'


export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        let filter = {};
        let date = this.date.state.inputValue;
        let name = this.raceName.value;

        if (date) {
            filter.date = new Date(date).getTime();
        }

        if (name) {
            filter.name = name;
        }

        this.props.onFilter(filter);
    }

    render() {
        let {date, name} = this.props.params;
        return (
            <Container>
                <Row>
                    <Col sm={{size: 12, push: 2, pull: 2}}>
                        <Form inline>
                            <Row>
                                <Col md={{size: 2, offset: 1}}>
                                    <input name="raceName"
                                           ref={input => this.raceName = input}
                                           defaultValue={name}
                                           placeholder={I18n.t('raceName')}/>
                                </Col>

                                <Col md={{size: 2, offset: 2}}>
                                    <DateTimePicker name="date"
                                                    ref={date => this.date = date}
                                                    defaultValue={date ? new Date(date) : new Date()}
                                                    dateFormat="M/D/YYYY"
                                                    timeFormat={false}/>
                                </Col>

                                <Col md={{size: 2, offset: 2}}>
                                    <Button color="primary" onClick={this.onSubmit}>{I18n.t('search')}</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Filter.propTypes = {
    params: PropTypes.object.isRequired,
    onFilter: PropTypes.func.isRequired,
};