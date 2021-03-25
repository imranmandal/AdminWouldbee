import React, { useContext, useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries/user.query';
import { Table } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";


export const getColumnNames = ({tableData, columnNames}) => {
    if (!tableData?.length) {
        return null;
    }
    else {
        const columns = Object.keys(tableData[0]);
        if (columnNames?.length) {
            // for (let name of columnNames) {
            //     assert(columns.includes(name));
            // }
        } else {
            columnNames = columns;
        }
    }
    console.log('columnNames:', columnNames);
    return columnNames;
}


export const DataGridHead = ({ columnNames }) => {
    console.log('4. DatagridHead', columnNames);

    return (
        <thead>
            <tr>
                {columnNames.map(name => <th key={name}>{name}</th>)}
            </tr>
        </thead>
    );
}


export const DataRow = ({ rowData, columnNames }) => {
    console.log('5. DataRow', rowData, columnNames);
    
    if (!rowData) {
        return null;
    }

    const data = columnNames.map(name => rowData[name]);
    console.log('5. DataRow data:', data);


    return (
        <tr>
            {
                columnNames.map(
                    name => <td key={name}>{rowData[name]}</td>
                )
            }
        </tr>
    )
}

const DataGrid = ({ tableData }) => {
    console.log('2. DataGrid, tableData:', tableData);

    if (!tableData?.length) {
        return null;
    }

    const columnNames = getColumnNames({tableData});
    
    console.log('3. columnNames:', columnNames);

    return (
        <div>
            <Table striped bordered hover>
                <DataGridHead columnNames={columnNames} />
                {/* <thead>
                <tr>
                    {columnNames.map(name => <th key={name}>{name}</th>)}
                </tr>
                </thead> */}
                
                <tbody>
                    {
                        tableData.map(
                        rowData => (
                                <DataRow key={ rowData.id } rowData={rowData} columnNames={columnNames} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}


const UsersPage = () => {
    const { data, loading, error } = useQuery(GET_ALL_USERS);
    const history = useHistory();
    const { authState, dispatch } = useContext(AuthContext);

    useEffect(() => {
        if (error) {
            console.log('[users] useEffect on error', error.toString());
            if (error.toString().startsWith('Error: Unauthorized')) {
                dispatch({
                    type: "LOG_OUT",
                });
            }
        }    
    })

    if (error) {
        console.log('error in graphql users page:', error);
        toast.warn('Login expired. Please login again!');
        return null;
    }

    if (loading) return <h5>Loading...</h5>;

    console.log('1. data:', data['userList']['values']);

    // return (
        // data['allUsers'].map(user => (
            // <div key={user.id}>
            //     {JSON.stringify(user)}
            // </div>
        // ))
    // )

    return (<div>
        <h1> Users Page </h1>
        <DataGrid tableData={data['userList']['values']} />
    </div>);
}

export default UsersPage;