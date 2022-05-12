import React from "react";
import ServiceItem from "../models/ServiceItem";

interface TableObject {
    col: string[];
    data: ServiceItem[];
    fields: string[];
    deleteRow: Function;
    editRow: Function;
    showEdit: boolean;
    showDelete: boolean;
}

const Table = ({ col, data, fields, deleteRow, editRow, showEdit, showDelete }: TableObject) => {


    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {col.map(c => {
                            return <th scope="col">{c}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => {
                        return <tr>{fields.map(f => {
                            return <td>{d.ServiceName}</td>
                        })}
                        <td>
                            {showDelete?<button type="button" className="btn btn-sm btn-danger me-1" onClick={()=>{deleteRow(d)}}><i className="fa-regular fa-trash-can"></i></button>:null}
                            {showEdit?<button type="button" className="btn btn-sm btn-info me-1" onClick={()=>{editRow(d)}}><i className="fa-solid fa-pen"></i></button>:null}
                        </td>
                        </tr>
                    })}
                    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr> */}
                </tbody>
            </table>
        </>
    )
}


export default Table;