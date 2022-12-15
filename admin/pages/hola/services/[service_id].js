import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Service = () => {
    const router = useRouter();
    const [service, setService] = useState();
    const serviceId = router.query.service_id;

    useEffect(() => {
        if(!serviceId) {
            return
        }

        fetch(`http://localhost:3001/services/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            setService(data.item)
        })
    }, [serviceId])

    return (
        <div>
            {!!service && <div className="title">{service.title}</div>}
        </div>
    )
}

export default Service;