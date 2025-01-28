const  express = require('express');
  const  pool = require('./db');
  const bodyParser=require('body-parser');
  const { body, validationResult }= require('express-validator')
const app=express();
const PORT=5000;
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allows all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
    next();
  });
app.post('/addmenu', async(req, res) => {
    try{
       const { menu_name, menu_price, gid }=req.body;
       // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;;
           const result=await pool.query('insert into menu_item(menu_name, menu_price, gid)values($1, $2, $3) returning *',
[menu_name,menu_price,gid]);
             if(result.rows.length>0){
        res.send({status:"200", message:"valid"})
     }else{({status:"400", message:"invalid"})

     }     
    } 
           catch(err) {
             console.error(err.message);
             res.status(500).send('server error');
       }
   });


   app.put('/updatemenu', 
    
    [
        body('menu_name').notEmpty().withMessage('menu_name is required'),
        body('menu_price').notEmpty().withMessage('menu_price  is required'),
        body('gid').notEmpty().withMessage('gid is required'),
        body('mid').notEmpty().withMessage('mid is required')
   ],
    

    async(req, res) => {
    try{

        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() })
        }else { 
        const { menu_name, menu_price, gid,mid }=req.body;
        const rs=await pool.query('select * from menu_item where mid=$1',[mid]);
        if(rs.rows.length>0){
       // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;;
           const result=await pool.query('update menu_item set menu_name=$1, menu_price=$2, gid=$3 where mid=$4',
[menu_name,menu_price,gid,mid]);

    

res.send({status:"200", message:"update sucess"})  } else{
    res.send({status:"200", message:"update failed"})  }

}

         }   
         catch(err) {
             console.error(err.message);
             res.status(500).send('server error');
       }
   });





   app.delete('/delmenu',[
    body('id').notEmpty().withMessage('id is required')
   ],async(req, res) => {
    try{

        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() })
        } else{
       const { id }=req.body;
       // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;
       console.log("id"+id);
           const rs=await pool.query('select FROM menu_item where mid=$1',[id]);
           if(rs.rows.length>0){
        //    agar length 0 se badii hai to its means result me kuchh likha aaega to wp delete nhi huaa;
        // agar result 0 se chhoti hogi to delete ho gya sab kuchh to delete sucess likha aaega
        await pool.query('delete FROM menu_item where mid=$1',[id]);
               res.send({status:"200", message:"delete sucess"})
            } else{({status:"400", message:"status failed"})
    
         }   
        
        }
           
       }catch(err) {
             console.error(err.message);
             res.status(500).send('server error');
       }
      });

    





      app.get('/menuById/',[ 
         
        body('id').notEmpty().withMessage('id is required')
      ] ,async(req, res) => {
        try{

            const errors=validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }  else{
           const { id }=req.body;
           // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;
           console.log("id"+id);
               const result=await pool.query('SELECT * FROM menu_item where mid=$1',[id]);
               if(result.rows.length>0){
               res.json({status:"200", message:"success",data: result.rows});
               }else{
                res.json({status:"400",message:"No found data"});
               }
            }
       
           }catch(err) {
                 console.error(err.message);
                 res.status(500).send('server error');
           }
       });




       app.get('/menu', async(req, res) => {
        try{
               const result=await pool.query('SELECT * FROM menu_item');
               res.json({status:"200",data:result.rows});
       
           }catch(err) {
                 console.error(err.message);
                 res.status(500).send('server error');
           }
       });




       
       app.get('/foodgroup', async(req, res) => {
        try{
               const result=await pool.query('SELECT * FROM food_group');
               res.json({status:"200",data:result.rows});
       
           }catch(err) {
                 console.error(err.message);
                 res.status(500).send('server error');
           }
       });

       app.get('/foodgroupid/',[ 
         
        body('id').notEmpty().withMessage('id is required')
      ] ,async(req, res) => {
        try{

            const errors=validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }  else{
           const { id }=req.body;
           // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;
           console.log("id"+id);
               const result=await pool.query('SELECT * FROM food_group where gid=$1',[id]);
               if(result.rows.length>0){
               res.json({status:"200", message:"success",data: result.rows});
               }else{
                res.json({status:"400",message:"No found data"});
               }
            }
       
           }catch(err) {
                 console.error(err.message);
                 res.status(500).send('server error');
           }
       });

       app.delete('/delfoodgroup',[
        body('id').notEmpty().withMessage('id is required')
       ],async(req, res) => {
        try{
    
            const errors=validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array() })
            } else{
           const { id }=req.body;
           // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;
           console.log("id"+id);
               const rs=await pool.query('select FROM food_group where gid=$1',[id]);
               if(rs.rows.length>0){
            //    agar length 0 se badii hai to its means result me kuchh likha aaega to wp delete nhi huaa;
            // agar result 0 se chhoti hogi to delete ho gya sab kuchh to delete sucess likha aaega
            await pool.query('delete FROM food_group where gid=$1',[id]);
                   res.send({status:"200", message:"delete sucess"})
                } else{({status:"400", message:"status failed"})
        
             }   
            
            }
               
           }catch(err) {
                 console.error(err.message);
                 res.status(500).send('server error');
           }
          });
    

          app.put('/updatefoodgroup', 
    
            [
                body('group_name').notEmpty().withMessage('group_name is required'),
               
                body('gid').notEmpty().withMessage('gid is required')
           ],
            
        
            async(req, res) => {
            try{
        
                const errors=validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors:errors.array() })
                }else { 
                const { group_name, gid }=req.body;
                const rs=await pool.query('select * from food_group where gid=$1',[gid]);
                if(rs.rows.length>0){
               // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;;
                   const result=await pool.query('update food_group set group_name=$1 where gid=$2',
        [group_name,gid]);
        
            
        
        res.send({status:"200", message:"update sucess"})  } else{
            res.send({status:"200", message:"update failed"})  }
        
        }
        
                 }   
                 catch(err) {
                     console.error(err.message);
                     res.status(500).send('server error');
               }
           });



           app.post('/addfoodgroup',[
            body('id').notEmpty().withMessage('id is required')
      ] ,
        async(req, res) => {
            try{

                const errors=validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors:errors.array() })
                }
               const { group_name }=req.body;
               // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;;
                   const result=await pool.query('insert into food_group(group_name)values($1) returning *',
        [group_name]);
                     if(result.rows.length>0){
                res.send({status:"200", message:"food Group Save Sucess"})
             }else{({status:"400", message:"invalid"})
        
             }     
            } 
                   catch(err) {
                     console.error(err.message);
                     res.status(500).send('server error');
               }
           });



           app.post('/addqnty',[
            body('qty_type').notEmpty().withMessage('qty_type is required')
      ] ,
        async(req, res) => {
            try{

                const errors=validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors:errors.array() })
                }
               const { qty_type }=req.body;
               // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;;
                   const result=await pool.query('insert into qntymast(qty_type)values($1) returning *',
        [qty_type]);
                     if(result.rows.length>0){
                res.send({status:"200", message:"qnty Save Sucess"})
             }else{({status:"400", message:"invalid"})
        
             }     
            } 
                   catch(err) {
                     console.error(err.message);
                     res.status(500).send('server error');
               }
           });






           app.put('/updateqnty', 
    
            [
                body('qty_type').notEmpty().withMessage('qty_type is required'),
               
                body('qid').notEmpty().withMessage('qid is required')
           ],
            
        
            async(req, res) => {
            try{
        
                const errors=validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors:errors.array() })
                }else { 
                const { qty_type,qid }=req.body;
                const rs=await pool.query('select * from qntymast where qid=$1',[qid]);
                if(rs.rows.length>0){
               // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;;
                   const result=await pool.query('update qntymast set qty_type=$1 where qid=$2',
        [qty_type,qid]);
        
            
        
        res.send({status:"200", message:"update sucess"})  } else{
            res.send({status:"200", message:"update failed"})  }
        
        }
        
                 }   
                 catch(err) {
                     console.error(err.message);
                     res.status(500).send('server error');
               }
           });





           app.get('/qnty', async(req, res) => {
            try{
                   const result=await pool.query('SELECT * FROM qntymast');
                   res.json({status:"200",data:result.rows});
           
               }catch(err) {
                     console.error(err.message);
                     res.status(500).send('server error');
               }
           });
    
       




           app.delete('/delqnty',[
            body('qid').notEmpty().withMessage('qid is required')
           ],async(req, res) => {
            try{
        
                const errors=validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors:errors.array() })
                } else{
               const { qid }=req.body;
               // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;
               console.log("qid"+qid);
                   const rs=await pool.query('select  * FROM qntymast where qid=$1',[qid]);
                   if(rs.rows.length>0){
                //    agar length 0 se badii hai to its means result me kuchh likha aaega to wp delete nhi huaa;
                // agar result 0 se chhoti hogi to delete ho gya sab kuchh to delete sucess likha aaega
                await pool.query('delete FROM qntymast where qid=$1',[qid]);
                       res.send({status:"200", message:"delete sucess"})
                    } else{({status:"400", message:"status failed"})
            
                 }   
                
                }
                   
               }catch(err) {
                     console.error(err.message);
                     res.status(500).send('server error');
               }
              });
        







              app.get('/qntyid',[ 
         
                body('qid').notEmpty().withMessage('qid is required')
              ] ,async(req, res) => {
                try{
        
                    const errors=validationResult(req);
        
                    if(!errors.isEmpty()){
                        return res.status(400).json({errors:errors.array()});
                    }  else{
                   const {qid }=req.body;
                   // agar cansole krna hai to kr lo id print hori ki nhi cheack ho jaegi bs;
                   console.log("qid"+qid);
                       const result=await pool.query('SELECT * FROM qntymast where qid=$1',[qid]);
                       if(result.rows.length>0){
                       res.json({status:"200", message:"success",data: result.rows});
                       }else{
                        res.json({status:"400",message:"No found data"});
                       }
                    }
               
                   }catch(err) {
                         console.error(err.message);
                         res.status(500).send('server error');
                   }
               });
        






               app.get('/menucard', async(req, res) => {
                try{
                       const result=await pool.query('select menu_name,menu_price,group_name,qty_type from menu_item, food_group, qntymast where food_group.gid=menu_item.gid and qntymast.qid=menu_item.qid');


                       res.json({status:"200",menucard:result.rows});
               
                   }catch(err) {
                         console.error(err.message);
                         res.status(500).send('server error');
                   }
               });
        
        
        
       
   
   app.listen(PORT, ()=> {
    console.log(`server running on http://localhost:${ PORT }`);
   });
