const Author = ({team}) => {
    return (
        <div className="author-area" key={team._id}>
            <div className="image-area">
                <img src={team.images} alt="#" />
            </div>
            <div className="info-area">
                <div className="name">{team.name}</div>
                <div className="date">14 Aug</div>
            </div>
        </div>
    )
}

export default Author;