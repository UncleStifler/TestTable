import React from 'react';
import './App.css';
import Header from "./Components/Header";
import TableTest from "./Components/Table";
import {Row, Col} from 'antd'


const App = () => {
    return (
        <div>
            <Header/>
            <Row>
                <Col xs={24} md={{span: 12, offset: 6}}>
                    <TableTest/>
                </Col>
            </Row>
        </div>
    );

}

export default App;
