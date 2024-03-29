const models = require('../models')
const userController = {}

//FUNCTIONAL FUNCTIONS----------------------------------

//Creating a new user in the database
userController.registerUser = async (req, res) => {
    try{
        await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }) 
        res.render('login');
    }catch(err){
    res.json({err})
    }
}

//Loggin in the user and redirecting them to their home page
userController.loginUser = async (req, res) => {
    try{ 
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })
        const userId = JSON.stringify(user.id)
        console.log(userId)
        if (user.password === req.body.password) {
            console.log(user.name, "logged in")
            
            // localStorage.setItem('userId', userId)
            res.redirect(`/user/${user.id}/home`)
        }else {
            res.status(401)
            res.json({err: 'login failed'})
        }
    }catch (err) {
        res.json({err})
    }
} 

//Adds a new item to the user to do list 
userController.addToDo = async (req,res) => {
    try{
        console.log(req.body)
        console.log('yahoo')
        const newItem = await models.listItem.create({
            description: req.body.description
        })
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        console.log('this is the user', user)
        user.addListItems(newItem);
        res.redirect(`/user/${user.id}/home`);
    }catch(err) {
        console.log(err)
    }
}
//PUT-EDIT CHECKLIST
userController.editItem = async (req,res) => {
    try{ 
        console.log(req.body)
        console.log(req.params.id)
        const itemSelected = await models.listItem.findOne({
            where: {
                id: req.params.id
            }
        });
        const update = req.body
        const updatedItem = await itemSelected.update(update);
        res.redirect(`/user/${updatedItem.userId}/home`);
    }catch(err) {
        res.json({err});
    }
}

//Deletes an item 
userController.deleteItem = async (req,res) => {
    try{ 
        const item = await models.listItem.findOne({
            where:{
                id: req.params.itemId
            }
        })
        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }

        })
        console.log(user.id)
        await item.destroy();
        res.redirect(`/user/${user.id}/home`)
    }catch(err) {
        res.json({err});
    }
}

//Logs out the user and redirects the browser to the homepage
userController.logoutUser = async (req, res) => {
    try{
        // localStorage.removeItem('userId')
        res.redirect('/')
    }catch (err) {
        res.json({err});
    }
}

//Logs out the user and redirects the browser to the homepage
userController.logoutUser = async (req, res) => {
    try{
        res.redirect('/')
    }catch (err) {
        res.json({err});
    }
}

//PRESENTATIONAL FUNCTIONS----------------------------------


//Shows the web page where the user will register a new account
userController.showRegisterUser = async (req,res) => {
    try{
         res.render('register');
    }catch (err) {
        res.json({err})
    }
}

//Shows the webpage where the user will log in
userController.showLoginUser = async (req,res) => {
    try{
        res.render('login')
    }catch(err) {
        res.json({err})
    }
}

//Shows the homepage of the user
userController.viewHome = async (req,res) => {
    try{
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: models.listItem
            },
            order:[[models.listItem, "createdAt", "ASC" ]]
        })
        
        const context = {
            user: user
        };

        res.render('dashboard', context)
        
    }catch(err) {
        res.json({err})
    }
}

//Show the page to edit an item 
userController.showEditItemPage = async (req, res) => {
    try{
        const item = await models.listItem.findOne({
            where: {
                id: req.params.itemId
            },
            include: {
                model: models.user
            }
        })
        console.log(item)
        const context = {
            listItemFromController: item
        }
        res.render('edit', context)
    }catch (err) {
        res.json({err});
    }
}

//Show profile
userController.viewProfile = async (req,res) => {
    try{
        const profile = await models.user.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json(profile);
    }catch(err) {
        res.json({err})
    }
}



module.exports = userController