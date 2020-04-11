function addGreeting() {

    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!'
    } else {
        greeting = 'welcome!';
    }

    return document.write('<h3>' + greeting + '</h3>');
}


function askPreference() {

    var response = prompt('Would you like to shop or view?')
    var message;


    if (response === 'shop') {
        message = 'GoodGood idea if you have money to spend';
    } else if (response === 'view') {
        message = 'Wonderful! Eveeryone should enjoy art for free!';
    } else {
        message = 'Welcome to Krystynas Photography page!';
    }

    return document.write('<p>' + message + '</p>');
}


function askName() {

    var userName =prompt('Whats your name?');
    return document.write('<h3> welcome, ' + userName + '</h3>');

}