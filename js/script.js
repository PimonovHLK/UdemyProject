"use strict";
function learnJS(lang, callback) {
    console.log(`я учу${lang}`);
    callback();
}

function done() {
    console.log('я прошел это урок!');
}

learnJS('JavaScript', done);