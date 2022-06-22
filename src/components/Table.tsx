import React from "react";
import { v4 as uuidv4 } from 'uuid';
// import ServiceItem from "../models/ServiceItem";

interface TableObject {
    col: string[];
    data: any[];
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
                            return <th key={uuidv4()} scope="col">{c}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => {
                        return <tr key={uuidv4()}>{fields.map(f => {
                            return <td key={uuidv4()}>{d[f]}</td>
                        })}
                        <td>
                            {showDelete?<button type="button" className="btn btn-sm btn-danger me-1" onClick={()=>{deleteRow(d)}}><i className="fa-regular fa-trash-can"></i></button>:null}
                            {showEdit?<button type="button" className="btn btn-sm btn-info me-1" onClick={()=>{editRow(d)}}><i className="fa-solid fa-pen"></i></button>:null}
                        </td>
                        </tr>
                    })}
                  
                </tbody>
            </table>
        </>
    )
}


export default Table;