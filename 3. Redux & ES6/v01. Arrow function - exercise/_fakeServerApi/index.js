var _fakeServerApi = {
    // imitate the server API
    increaseCount : ( currentCount, cb ) => {
        setTimeout(function(){
            cb(currentCount + 1);
        }, 1000)
    }
}
