/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, Input, Button, Row, Container} from "reactstrap";
import {I18n} from 'react-redux-i18n'
import DateTimePicker from 'react-datetime'

// /api/race?status=%s&racecourse=%d&horse=%d&trainer=%d&jockey=%d&name=%s&date=%d&page=%d

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.onFilter({
            date: new Date(this.date.state.inputValue).getTime(),
            name: this.raceName.value
        });
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
                                    <Input name="raceName"
                                           ref={input => this.raceName = input}
                                           value={name}
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