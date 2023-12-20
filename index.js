const express = require("express");
const fs = require('fs');
const users = require("./MOCK_DATA.json"); 
const app = express();
const PORT = 8000;

// Middleware - Plugin 
app.use(express.urlencoded({extended:false}));
app.use(express.json()); // Parse JSON requests

//Routes 
app.get('/users', (req , res)=>{
    const html = `
    <ul>
    ${users.map((user) =>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
   });

   // REST API
app.get("/api/users", (req , res)=>{
    return res.json(users);
});

app.route("/api/users/:id").get((req, res) =>{
    const id= Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
}).patch((req, res)=> {
    //Edit user with id 
    const id = Number(req.params.id);
        const updatedUser = req.body;
        
        users.forEach((user, index) => {
            if (user.id === id) {
                users[index] = { ...user, ...updatedUser };
            }
        });

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
            return res.json({ status: "success", updatedUser });
        });
}).delete((req, res)=> {
    //delete  user with id 
    const id = Number(req.params.id);
        const deletedUserIndex = users.findIndex(user => user.id === id);

        if (deletedUserIndex !== -1) {
            const deletedUser = users.splice(deletedUserIndex, 1)[0];

            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
                return res.json({ status: "success", deletedUser });
            });
        } else {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
});
 
app.post("/api/users",(req, res)=>{
    //tOOD:Create new user
    const body=req.body;
    users.push({...body, id:users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        return res.json({status:"success", id:users.length});
    })
    
});
 


app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT}`))