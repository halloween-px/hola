import { Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const Services = () => {
    const [services, setService] = useState([]);
    const columns = [
        {
            dataIndex: 'title',
            title: 'Название услуги'
        },
        {
            dataIndex: 'image',
            title: 'Картинка'
        },
        {
            dataIndex: '_id',
            title: 'Действие',
            render: (text, record) => {
                return <Link href={`services/${record._id}`}>Открыть</Link>
            }
        },
    ];

    useEffect(() => {
        fetch('http://localhost:3001/services')
        .then(res => res.json())
        .then(data => {
            setService(data.items)
        })
    }, [])
    return (
        <>
            <Table dataSource={services} rowKey={`_id`} columns={columns} pagination={false} />
        </>
    )
}

export default Services;