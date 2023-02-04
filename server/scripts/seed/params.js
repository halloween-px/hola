const ParamsInfo = require('../../models/Params');

const params = {
    phone: ['9 (999) 888-99-99'],
    email: ['mail@ourcourses.com'],
    address: ['99 Barnard St - Suite 111 United States GA 22222'],
    social: [
        {
            icon: 'fa-brands fa-twitter',
            link: 'http://twitter.com/#!/evvergus'
        },
        {
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com'
        },
        {
            icon: 'fa-brands fa-facebook-f',
            link: 'https://www.facebook.com'
        },
        {
            icon: 'fa-brands fa-youtube',
            link: 'https://www.youtube.com/watch?v=oFm6rbA5BD8'
        },
    ]
}

const paramsEditing = async () => {
    await ParamsInfo.remove()
    const param = new ParamsInfo(params);
    await param.save()
    process.exit();
}

module.exports = paramsEditing;