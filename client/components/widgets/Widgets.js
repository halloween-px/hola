import Link from "next/link";

const Widgets = ({ title, list = [], $class}) => {
    const $title = title.split();
    return (
        <div className="widgets-item">
            <h4 className="title">
                {!!title && <><span>{$title[0]}</span> {$title[1]}</>}
            </h4>
            {!!list?.length && <ul className="list flex-column">
                {list.map((item) => {

                    return (
                        <li className={`list-item ${!!item.activeClass && item.activeClass }`} key={item.id}>
                            <Link href={item.link}>
                                <a>
                                    {item.image ? <img
                                        className=''
                                        src={!!item.image && item.image}
                                        alt="#"
                                    /> :
                                        <i className={!!item.icon && item.icon}></i>
                                    }
                                    <span>{item.title}</span>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>}
        </div>
    )
}

export default Widgets;