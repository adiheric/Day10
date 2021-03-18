function getUsername (email) {
var username = '';

switch (email) {

    case 'user1@mail.com':
        username = 'user1';
        break;
        case 'user2@mail.com':
        username = 'user2';
        break;
        case 'user3@mail.com':
        username = 'user3';
        break;
        case 'user4@mail.com':
        username = 'user4';
        break;
        case 'user5@mail.com':
        username = 'user5';
        break;
        case 'user6@mail.com':
        username = 'user6';
        break;

}

return username;
}
getUsername("user2@mail.com");
module.exports = getUsername;










}