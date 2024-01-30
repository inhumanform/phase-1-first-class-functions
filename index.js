function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function named() {
        console.log("Chai Spy with my little eye")
    };
    
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("chai-spies");
        
};
}
