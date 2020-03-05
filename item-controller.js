exports.getWorld = function(req,res){
   res.json({result: "Hello World! From controller 😤😱🥵🤡", data: [
        req.params.foo,
        req.params.bar
    ]});
}  

exports.postWorld = function(req,res){
   res.json({result: "Hello World! From controller 😤😱🥵🤡", data: [
        req.params.foo,
        req.params.bar
    ]});
}  
 