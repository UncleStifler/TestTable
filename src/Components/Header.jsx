import React, {useEffect} from 'react';
import {PageHeader, Divider} from "antd";
import {useDispatch} from "react-redux";
import {setUsersTC} from "../Redux/users-reducer";

const Header = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersTC())
    },[])



    return (
        <div>
            <PageHeader title='Table for testing'/>
            <Divider />
        </div>
    );
};

export default Header;