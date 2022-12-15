import { Pagination, Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const columns = [
        {
            dataIndex: 'name',
            title: 'Имя',
        },

        {
            dataIndex: 'email',
            title: 'Почта',
        },

        {
            dataIndex: '_id',
            title: 'Действие',
            render: (text, record) => {
                return <Link href={`/users/${record._id}`}>Открыть</Link>        
            }
        },
    ];

    const onChange = (page) => {
        setPage(page)
    }

    useEffect(() => {
        const skip = (page - 1) * pageSize; 
        fetch(`http://localhost:3001/users?skip=${skip}&limit=${pageSize}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data.items)
                setTotal(data.count)
            })
    }, [page])

    return (
        <>
            <Pagination current={page} pageSize={pageSize} total={total} onChange={onChange} />
            <Table dataSource={users} columns={columns} rowKey={`_id`} pagination={false} />
        </>
    )
}
export default Users;