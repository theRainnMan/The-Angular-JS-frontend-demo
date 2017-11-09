/**
 * Created by George on 2017/10/25.
 */
var express = require('express')
var router = express.Router();

var orders = {
    records: [
        {orderName: "Teriyaki Pork Tenderloin", prescription: "with Basmati Rice and Asparagus", picUrl: "../pic/Teriyaki.jpg", fav: false, grade: 0},
        {orderName: "Tomato & Chorizo Risotto", prescription: "with Orzo, Mozzarella and Spinach", picUrl: "../pic/Tomato.jpg", fav: false, grade: 1},
        {orderName: "Meatloaf Balsamico", prescription: "with Green Beans and Sweet Potato Mash", picUrl: "../pic/Meatloaf.jpg", fav: false, grade: 3},
        {orderName: "Thai Pork Meatballs", prescription: "with Noodles and Haricot Verts", picUrl: "../pic/Thai.jpg", fav: false, grade: 4},
        {orderName: "Creamy Tortellini Gratin", prescription: "with Parmesan, Cream and Kale", picUrl: "../pic/Creamy.jpg", fav: false, grade: 5},
        {orderName: "Honey & Ginger Chicken", prescription: "with Snow Peas and Jasmine Rice", picUrl: "../pic/Honey.jpg", fav: false, grade: 2},
        {orderName: "Cauliflower Mac & Cheese", prescription: "with Pancetta", picUrl: "../pic/Cauliflower.jpg", fav: false, grade: 3},
        {orderName: "Butter-Basted Chicken", prescription: "with Thyme Carrots and Parmesa", picUrl: "../pic/BBQ.jpg", fav: true, grade: 1}
    ]
};

var user = {
    records: [
        {email: "admin@gmail.com", password: "12345678"}
    ]
}

router.get("/", function(req, res) {
    res.json(orders.records);
});

router.put("/", (req, res) => {
    // console.log(req.body.index)
    if(orders.records[req.body.index].fav == false){
        orders.records[req.body.index].fav = true
    }
    else{
        orders.records[req.body.index].fav = false
    }
    res.json(orders.records)
})

router.post("/u", (req, res) => {
    // console.log(req.body.email);
    // console.log(req.body.password);
    if((req.body.email === user.records[0].email) && (req.body.password === user.records[0].password)){
        res.send({successful: "true"})
    }
    else {
        res.send({successful: "false"})
    }
})

module.exports = router;