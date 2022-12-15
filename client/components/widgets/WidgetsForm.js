const WidgetsForm = () => {
    return (
        <form className="vg-form vg-form-widgets">
            <h4>
                Leave a <span>request</span>
            </h4>
            <p>
                Subscribe to our newsletter. We deliver the best health related
                articles to your inbox
            </p>
            <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="your email"
                className="vg-form-control"
            />
            <input
                type="text"
                name="user_phone"
                id="user_phone"
                placeholder="your phone"
                className="vg-form-control"
            />
            <button className="btn btn--primary w-100">Request</button>
        </form>
    )
}

export default WidgetsForm;