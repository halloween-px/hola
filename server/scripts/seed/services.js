const Service = require('../../models/Service');

const services = [{
    "id": "1",
    "image": "/images/resource/courses/1.jpg",
    "flag": "/images/resource/infoblock/flags/1.png",
    "title": "Learning English",
    "text": "<h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis omnis saepe.</h4>\n<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>\n<p>\nCommodi facere natus odio velit! Aperiam, blanditiis fuga incidunt\nnostrum quaerat sed. Commodi facere natus odio velit! Aperiam,\nblanditiis fuga incidunt nostrum quaerat sed.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>"
}, {
    "id": "2",
    "image": "/images/resource/courses/4.jpg",
    "flag": "/images/resource/infoblock/flags/2.png",
    "title": "Learning German",
    "text": "<h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis omnis saepe.</h4>\n<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>\n<p>\nCommodi facere natus odio velit! Aperiam, blanditiis fuga incidunt\nnostrum quaerat sed. Commodi facere natus odio velit! Aperiam,\nblanditiis fuga incidunt nostrum quaerat sed.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>"
}, {
    "id": "3",
    "image": "/images/resource/courses/6.jpg",
    "flag": "/images/resource/infoblock/flags/3.png",
    "title": "Learning Spanish",
    "text": "<h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis omnis saepe.</h4>\n<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>\n<p>\nCommodi facere natus odio velit! Aperiam, blanditiis fuga incidunt\nnostrum quaerat sed. Commodi facere natus odio velit! Aperiam,\nblanditiis fuga incidunt nostrum quaerat sed.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>"
}, {
    "id": "4",
    "image": "/images/resource/courses/russian.jpg",
    "flag": "/images/resource/infoblock/flags/4.png",
    "title": "it works",
    "text": "<h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis omnis saepe.</h4>\n<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>\n<p>\nCommodi facere natus odio velit! Aperiam, blanditiis fuga incidunt\nnostrum quaerat sed. Commodi facere natus odio velit! Aperiam,\nblanditiis fuga incidunt nostrum quaerat sed.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>"
}, {
    "id": "5",
    "image": "/images/resource/courses/5.jpg",
    "flag": "/images/resource/infoblock/flags/5.png",
    "title": "Learning French",
    "text": "<h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis omnis saepe.</h4>\n<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>\n<p>\nCommodi facere natus odio velit! Aperiam, blanditiis fuga incidunt\nnostrum quaerat sed. Commodi facere natus odio velit! Aperiam,\nblanditiis fuga incidunt nostrum quaerat sed.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>"
}, {
    "id": "6",
    "image": "/images/resource/courses/china.jpg",
    "flag": "/images/resource/infoblock/flags/6.png",
    "title": "Learning Chinese",
    "text": "<h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis omnis saepe.</h4>\n<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>\n<p>\nCommodi facere natus odio velit! Aperiam, blanditiis fuga incidunt\nnostrum quaerat sed. Commodi facere natus odio velit! Aperiam,\nblanditiis fuga incidunt nostrum quaerat sed.\n</p>\n<p>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\nadipisci aliquam amet animi atque, culpa cum cumque doloremque fugit\nhic ipsam maiores maxime nihil non officiis optio perferendis\nplaceat quaerat quisquam repudiandae rerum sit, veritatis! Ab\nconsectetur, cupiditate doloremque earum excepturi fuga incidunt\nipsa laboriosam modi mollitia officia omnis tempore.\n</p>"
}]

const editingServices = async () => {
    await Service.remove()
    for(let item of services) {
        const service = new Service(item)
        await service.save()
    }
    process.exit()
}

module.exports = editingServices;