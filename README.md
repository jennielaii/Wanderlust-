# Wanderlust-

####Overview 
This project is a planner. FIrst, a user would need to sign up and make an account. Once the account is made, you will be able to add, update, and remove items from your to do list. 

### Wireframe 

![Wireframe](./project2Images/ERD.png)

![Wireframe](./project2Images/Page_0.png)
![Wireframe](./project2Images/Page_1.png)
![Wireframe](./project2Images/Page_2.png)
![Wireframe](./project2Images/Page_3.png)
![Wireframe](./project2Images/Page_4.png)
![Wireframe](./project2Images/Page_5.png)
### User Stories

-When I sign up with a name, email and password, an account should be made. 

-When I try to log in with my email and password, I should be sent to my profile page 

-When I try to post a new item, it should appear in my to do list 

-When I click on the edit buttons next to the items, I should be able to edit them 

When I click on the minus button next to the items, the items should be deleted

### Routes
| Functions              | Detail                                            | URL                         |
| :--------------------: | ------------------------------------------------- | --------------------------- |
| Sign up for an account | 1. User is able to decide whether to register or login| /welcomepage |
| Sign up for an account | 1. User is able to register with Name, Email and Password | /register |
| Log in with email | 1. User can log in using registered email<br>2. User can get a warning message for incorrect password or unregistered account | /login |
| Log out | 1. User can log out of an account<br>2. User can get a reminder for successful logout | /users/logout |
| Create a checklist | 1. User can add a checklist with detail after login<br>2. User can get a warning message for invalid input format | /users/checklist/new |   
| Edit a checklist | User can update detail info of a checklist after login | /users/checklist/edit/:id |
| Delete a checklist | 1. User can delete a checklist after login<br>2. User can receive a warning message before actual delete | /users/checklist/delete/:id |
| Advice | User get to see advice that is given to them for their traveling needs | /users/advice |
| Profile | User can checkout their personal profile such as name and email | /users/profile |

___

### MVP 
-Am I able to create a profile 
-Am I able to login once I have already made a profile
-Am I able to add on to my to do list 
-Am I able to edit my to do list
-Am I able to delete items from my to do list
-Am I able to log out successfully? 
=======

-When I click the log out button, I should not see my page anymore but instead the home screen 

### Routes

-route.post (to register an account)  

-route.post (to log into your account)

-route.post (to posts to to-do list) 

-route.put (to edit posts)

-route.delete (to delete posts)

-route.post (to log out )

### MVP 

-(Am I able to create a profile) 

-(Am I able to login once I have already made a profile)

-(Am I able to add on to my to do list) 

-(Am I able to edit my to do list)

-(Am I able to delete items from my to do list)

-(Am I able to log out successfully?) 
### Stretch Goals 
-Add weather API 

