function checkUsersValid (goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function (user) {
       return goodUsers.some(function(u) {
         return u.id === user.id;
       });
    });
  };
}

module.exports = checkUsersValid;