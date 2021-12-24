import React from 'react';
import {Button, Input, Table} from "antd";
import {useSelector} from "react-redux";
import {SearchOutlined} from "@ant-design/icons";


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        filterDropdown: ({
                             setSelectedKeys,
                             selectedKeys,
                             confirm,
                             clearFilters,
                         }) => {
            console.log(selectedKeys)
            return (
                <>
                    <Input
                        autoFocus
                        placeholder="Type text here"
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                            confirm({closeDropdown: false});
                        }}
                        onPressEnter={() => {
                            confirm();
                        }}
                        onBlur={() => {
                            confirm();
                        }}
                    />
                    <Button
                        onClick={() => {
                            confirm();
                        }}
                        type="primary"
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => {
                            clearFilters();

                        }}
                        type="danger"
                    >
                        Reset
                    </Button>
                </>
            );
        },
        filterIcon: () => {
            return <SearchOutlined/>;
        },
        onFilter: (value, record) => {
            return record.email.toLowerCase().trim().includes(value.toLowerCase());
        },
    },
    {
        title: 'City',
        dataIndex: ['address', 'city'],
        key: 'city',
        filters: [
            {
                text: 'Wisokyburgh',
                value: 'Wisokyburgh'
            },
            {
                text: 'South Elvis',
                value: 'South Elvis'
            }
        ],
        onFilter: (value, item) => item.address.city.includes(value)
    },
]


const TableTest = () => {


    const data = useSelector((state) => {
        return state.usersReducer.data123
    })

    const dataSource = data.map(item => ({...item, key: item.id}))


    return (
        <Table
            dataSource={dataSource}
            columns={columns}
        />
    );
};

export default TableTest;

