import React, { useEffect, useState } from "react";
import ServiceItem from "../../models/ServiceItem";
import Service from "../../service/Service";
import Loader from "../loader/Loader";
import Table from "../Table";

const ServiceItems = () => {

    const [services, setServices] = useState<ServiceItem[]>([]);
    const [loader, setLoader] = useState(false);
    const [col] = useState(['Service','Options']);
    const [fields] = useState(['ServiceName'])
    const svc = new Service();

    useEffect(() => {
        setLoader(true);
        getServices();
    }, [])



    async function getServices(): Promise<any> {
        let res = await svc.getDataFromList('_Services');
        setServices(res);
        setLoader(false);
    }

    const deleteRow = (delIt:ServiceItem) => {
        console.log(delIt);
        alert('Delete in parent')
    };

    const editRow = (editIt:ServiceItem) => {
        
        alert('Edit')
    }

    return (
        <>
            {loader ? <Loader /> : <Table col={col} data={services} fields={fields} deleteRow={deleteRow} editRow={editRow} showEdit={true} showDelete={true} />}
        </>
    )
}

export default ServiceItems;