import { useState } from "react";
import { API_URL } from "../../config/url";

const FormMain = () => {

    // const [userName, setUserName] = useState('');
    // const [userPhone, setUserPhonee] = useState('');
    // const [selectGta, setSelectGta] = useState('');

    const [formData, setFormData] = useState({
        userName: '',
        userPhone: '',
        selectGta: '',
    })

    const getChangeInput = field => (e) => {
        setFormData({...formData, [field]: e.target.value})
    }
    

    // const changeUserName = (e) => {
    //     setFormData({
    //         ...formData,
    //         userName: e.target.value
    //     })
    // }

    // const changeUserPhone = getChangeInput('userPhone')

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
            // body: JSON.stringify({
            //     userName,
            //     userPhone,
            //     selectGta
            // })
            // body: JSON.stringify({
            //     user_name: e.target.user_name.value,
            //     user_phone: e.target.user_phone.value,
            //     selectGta: e.target.selectGta.value,
            // })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert(data.message);
        })
    }
    
    return (
        <section className="vg-gta section section-padding">
            <div className="container">
                <div className="vg-gta--item">
                    <div className="image-area">
                        <img src="/images/resource/gta/gta_woman.png" alt="#" />
                    </div>
                    <div className="row row-gap justify-content-between">
                        <div className="col-xl-5 col-lg-8">
                            <div className="vg-gta--info">
                                <div className="section-title section-title--white">
                                    <div className="section-title--wrapper">
                                        <h4 className="title title-red">
                                            <span>Select</span> desired way of learning
                                        </h4>
                                        <h6 className="subtitle">
                                            We have a wide range of courses for the most selective taste!
                                        </h6>
                                    </div>
                                </div>
                                <a href="#" className="link-area">
                                    Learn More <i className="fa-regular fa-right-long" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="vg-gta--form">
                                <form action="#" className="vg-form" method="post" onSubmit={onSubmit}>
                                    <div className="row row-gap-small">
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="vg-form-control w-100"
                                                placeholder="???????? ?????? *"
                                                name="user_name"
                                                required
                                                value={formData.userName}
                                                onChange={getChangeInput('userName')}
                                                // value={userName}
                                                // onChange={(e) => setUserName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="vg-form-control w-100"
                                                placeholder="?????????????? *"
                                                name="user_phone"
                                                required
                                                value={formData.userPhone}
                                                onChange={getChangeInput('userPhone')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <select name="selectGta" data-select id="select1"
                                                value={formData.selectGta}
                                                onChange={getChangeInput('selectGta')}>
                                                <option value="English language">English language</option>
                                                <option value="One">One</option>
                                                <option value="two" disabled>two</option>
                                                <option value="Three">Three</option>
                                            </select>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn w-100 mt-4 btn-dark"
                                            // onClick={(event) => {
                                            //     event.preventDefault();
                                            // }}
                                            >
                                                <span>??????????????????</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vg-gta-infoblock" data-view={800}>
                    <div className="row row-gap">
                        <div className="col-xl-3 col-sm-6">
                            <div className="vg-gta-infoblock--item">
                                <h2 className="count-area" data-value={1502}>
                                    1502
                                </h2>
                                <h6 className="text-area">Of the lessons</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="vg-gta-infoblock--item">
                                <h2 className="count-area" data-value={196}>
                                    196
                                </h2>
                                <h6 className="text-area">Released students</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="vg-gta-infoblock--item">
                                <h2 className="count-area" data-value={5}>
                                    5
                                </h2>
                                <h6 className="text-area">Years working for you</h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="vg-gta-infoblock--item">
                                <h2 className="count-area" data-value={10}>
                                    10
                                </h2>
                                <h6 className="text-area">Teachers</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FormMain;