var http = require('http')
var bl = require('bl')

/*
This function prints the elements in an array based off of the 
startIdx (inclusive), stopIdx (not inclusive), and the increment. 
*/
function printArray(array, startIdx, stopIdx, increment){
    for(let i = startIdx; i < stopIdx; i+= increment){
        console.log(array[i]);
    }
}
/*
This function will gather multiple data from multiple urls and populate 
an array with the data as strings from each url. The callback function will 
then be executed. The callback function must have the the following format
callback(urlDataArray, startIdx, stopIdx, increment).
*/
function getMultipleUrlsData(numOfUrls, callback){
    let urlData = [];
    let firstUrlIdx = 2;

    // Below doesn't guarantee that all the data has been populated. 
    // for(let i = 0; i < numOfUrls; i++){
    //     http.get(process.argv[firstUrlIdx + i], (response) => {
    //         response.pipe(bl((error, data) => {
    //             if(error) console.error(error);
    //             urlData[i] = data.toString();
    //             if(i === numOfUrls - 1){
    //                 printArray(urlData, 0, numOfUrls, 1)
    //             }
    //         }))
    //     })
    // }

    // solution add a count variable after the data is populated to the array and then execute printArray function once the count is correct
    let count = 0; 
    for(let i = 0; i < numOfUrls; i++){
        http.get(process.argv[firstUrlIdx + i], (response) => {
            response.pipe(bl((error, data) => {
                if(error) console.error(error);
                urlData[i] = data.toString();
                count++; // once the data is appended to the array then update the count so that we can execute appropriate code when appropriate
                if(count === numOfUrls){
                    callback(urlData, 0, numOfUrls, 1);
                }
            }));
        });
    }
}

getMultipleUrlsData(3,printArray);