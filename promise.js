//callback

// console.log('before');

// getUser(12, (user) => {
//    console.log(user)
//    getRepos(user.id, (repos) => {
//     console.log(repos)
//    })
// });

// console.log('after');


// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('get user from database ...');
//         return callback({id: id, name: 'Mohamed IDBRAHIM'});
//     }, 2000);
// }

// function getRepos(idUser, callback) {
//     setTimeout(() => {
//         console.log('get repos from github ...');
//         return callback(['repos1', 'repos2']);
//     }, 2000);
// }

//Promise

//callback

getUser(12)
//    .then(user => {
//        console.log(user);
//        return getRepos(user.id)
//    })
//    .then(repos => console.log(repos))
//    .catch(err => console.log(err)) 


run();

async function run() {
    console.log('before');

    try {
        let user = await getUser(12);
        let repos = await getRepos(user.id)
        console.log(repos);
        console.log('after');
    }catch(e) {
      console.log(e)
    }
   
}

function getUser(id) {
   
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            status = true;
            if(status) {
                return resolve({id: id, name: 'Mohamed IDBRAHIM'});
            }
            else {
                return reject({err: 'user not found'})
            }
        }, 2000);
   })
 
}

function getRepos(idUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

        console.log('get repos from github ...');

        status = false;
            if(status) {
              return resolve(['repos1', 'repos2']);
            }else {
                return reject({err: 'repos not found'})
            }
    }, 2000);
 })
}