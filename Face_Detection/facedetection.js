'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '722deedd076a41dba5e13e0f4b350279';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/detect';
const addPerson = 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/roster/persons';
const train = 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/roster/train';
const identify = 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/identify';

const cooper = 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO_BradleyCooper.jpg'
const ellen = 'https://www.out.com/sites/out.com/files/ellen_750x422.jpg'
const groupPicture = 'http://kudago.com/media/images/news/db/4c/db4cb807b24cbf8a058937de7decb199.jpeg'
const personGroupId = 'roster'
const requestPersonGroup = 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/' + personGroupId;

const imageUrl =
    'https://i.pinimg.com/originals/36/17/98/361798a6a334ac49651df3c50420accd.jpg';

    // Request parameters.
    const params = {
        'returnFaceId': 'true',
        'returnFaceAttributes': 'age,gender'
    };

    const groupParam = {
        'personGroupId': 'roster'
    };

    function createGroup() {
        console.log('Creating group')
         const personGroupOptions = {
             uri: requestPersonGroup,
             body: '{name : Group}',
             headers: {
                 'Content-Type': 'application/json',
                 'Ocp-Apim-Subscription-Key' : subscriptionKey
             }
         }
         return new Promise(function(resolve, reject) {
             request.put(personGroupOptions, (error, body) => {
                if (error) {
                  console.log('Error: ', error);
                  return;
                } else {
                    resolve();
                }
            })
        });
    }

    function personCooper() {
        console.log('Creating person')
        const addPersonOptions = {
            uri: 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/roster/persons',
            body: '{"name": "cooper"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        }
        return new Promise(function(resolve, reject) {
            request.post(addPersonOptions, (error, response, body) => {
              if (error) {
                console.log('Error: ', error);
                return;
              } else {
                resolve(JSON.parse(body).personId);
              }
            })
        });
    }

    function person() {
        console.log('Creating person')
        const addPersonOptions = {
            uri: 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/roster/persons',
            body: '{"name": "Ellen"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        }
        return new Promise(function(resolve, reject) {
            request.post(addPersonOptions, (error, response, body) => {
              if (error) {
                console.log('Error: ', error);
                return;
              } else {
                resolve(JSON.parse(body).personId);
              }
            })
        });
    }

    function face(personId) {
        console.log('Creating face', personId)
        const addFaceOptions = {
            uri: 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/roster/persons/'+ personId +'/persistedFaces',
            body: '{"url": ' + '"' + ellen + '"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        }
        return new Promise(function(resolve, reject) {
            request.post(addFaceOptions, (error, response, body) => {
              if (error) {
                console.log('Error: ', error);
                return;
              } else {
                console.log('Done with adding face')
                console.log(body);
                resolve();
              }
            });
        })
    }

    function faceCooper(personId) {
        console.log('Creating face', personId)
        const addFaceOptions = {
            uri: 'https://attendance-tracker.cognitiveservices.azure.com/face/v1.0/persongroups/roster/persons/'+ personId +'/persistedFaces',
            body: '{"url": ' + '"' + cooper + '"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        }
        return new Promise(function(resolve, reject) {
            request.post(addFaceOptions, (error, response, body) => {
              if (error) {
                console.log('Error: ', error);
                return;
              } else {
                console.log('Done with adding face')
                console.log(body);
                resolve();
              }
            });
        })
    }

    function trainModel() {
        console.log('Training')
        const trainOptions = {
            uri: train,
            headers: {
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        }
        return new Promise(function(resolve, reject) {
            request.post(trainOptions, (error, response, body) => {
              if (error) {
                console.log('Error: ', error);
                return;
              } else {
                console.log(body);
                resolve();
              }
            });
        })
    }

      function group() {
        console.log("Group Picture")
        const options = {
            uri: uriBase,
            qs: params,
            body: '{"url": ' + '"' + groupPicture + '"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        };
        return new Promise(function(resolve, reject) {
        console.log('calling to get faces')
            request.post(options, (error, response, body) => {
              if (error) {
                reject(error);
              } else {
              console.log(body)
                resolve(JSON.parse(body));
              }
            });
        })
      }

      function postPromise(faces) {
        let array = JSON.parse(JSON.stringify(faces))
        let result = [];
        for (var i = 0; i < array.length; i++) {
            result[i] = array[i].faceId
        }
        result = JSON.stringify(result);
        console.log(result);
        const addIdentifyOptions = {
            uri: identify,
            body: '{"faceIds": ' + result + ', "personGroupId": "roster"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        };
        console.log(addIdentifyOptions.body);
          request.post(addIdentifyOptions, (error, response, body) => {
            if (error) {
              console.log('Error: ', error);
              return;
            } else {
                console.log(body)
            }
          });
      }
      function main() {
           createGroup().then(person).then(face).then(personCooper).then(faceCooper).then(trainModel).then(group).then(postPromise);
      }

       main();


