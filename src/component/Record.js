import React from 'react';


import {Table, Button} from 'react-bootstrap';


export const Record = () => {
    return (
        <div>
            <div>
            <center><h2>sales Record</h2></center>
            </div>
            <center>
            <Table border={3} striped bordered hover>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Client Id</th>
                        <th>Client Company</th>
                        <th>State</th>
                        <th>Transaction Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abc</td>
                        <td>4558336222</td>
                        <td>ABC co.</td>
                        <td>Active</td>
                        <td>Processing</td>
                        <td>New</td>
                      </tr>
                 </tbody>
                 <tbody>
                    <tr>
                        <td>DEF</td>
                        <td>158541652</td>
                        <td>DEF co.</td>
                        <td>Deactive</td>
                        <td>Pending</td>
                        <td>New</td>
                      </tr>
                 </tbody>
                 <tbody>
                    <tr>
                        <td>GHI</td>
                        <td>25987991</td>
                        <td>GHI co.</td>
                        <td>Deactive</td>
                        <td>Processed</td>
                        <td>New</td>
                      </tr>
                 </tbody>
                 <tbody>
                    <tr>
                        <td>JKL</td>
                        <td>4755567890</td>
                        <td>JKL co.</td>
                        <td>Active</td>
                        <td>Processing</td>
                        <td>New</td>
                      </tr>
                 </tbody>
                 </Table>
                 <br/><br/>
                 <Button>ok 😃</Button>
                 </center>
                 </div>
    )
}

export default Record
