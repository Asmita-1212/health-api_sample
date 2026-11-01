const express = require("express");
 const app = express(); 
 const PORT = 3000; 
app.get("/health", (req, res) => {  
    res.send(`in health... server running on port ${PORT}`);
}); 

app.get("/doctor", (req, res) => {
    res.send('in doctor api');
});
    
app.get("/hospital", (req, res) => {  
    res.send(`in hospital api`);
}); 
app.get("/patient", (req, res) => {  
    res.send(`in patient api`);
}); 
app.listen(PORT, "0.0.0.0", () => {  
    console.log(`Server running on port ${PORT}`);
 });

