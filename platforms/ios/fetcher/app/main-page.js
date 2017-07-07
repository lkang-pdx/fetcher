var fetchModule = require("fetch");
 
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = { };
}
 
exports.pageLoaded = pageLoaded;
 
exports.getRequest = function() {
    fetchModule.fetch("https://www.example.com/test?search=Hello", {
        method: "GET"
    })
    .then(function(response) {
        alert({title: "GET Response", message: JSON.stringify(response), okButtonText: "Close"});
    }, function(error) {
        console.log(JSON.stringify(error));
    })
}
 
exports.postRequest = function() {
    fetchModule.fetch("https://www.example.com/test", {
        method: "POST",
        body: JSON.stringify({username: "lkang", firstname: "Luna", lastname: "Kang"})
    })
    .then(function(response) {
        alert({title: "POST Response", message: JSON.stringify(response), okButtonText: "Close"});
    }, function(error) {
        console.log(JSON.stringify(error));
    })
}