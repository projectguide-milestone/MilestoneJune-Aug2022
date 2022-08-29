import React from 'react'
import {Table,} from 'react-bootstrap';

function Sampleadmin() {
  return (
    <div>
       <Table border={3} striped bordered hover className='bb'>
                <thead className="abc1">
                    <tr>
                        
                        <th> Id</th>
                        <th> Train name</th>
                        <th> Train number</th>
                        <th> From</th>
                        <th> To</th>
                        <th>Description</th>
                    </tr>
                </thead></Table>
    </div>
  )
}

export default Sampleadmin
