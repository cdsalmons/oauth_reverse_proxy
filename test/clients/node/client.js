var util = require("util");

var consumer_key = "node-test-key";
var consumer_secret = require("fs").readFileSync("../../keys/8008/8080/" + consumer_key);

var oauth = require("oauth").OAuth;
var oa = new oauth("", "", consumer_key, consumer_secret, "1.0", null, "HMAC-SHA1");

var post_body = {
  posts: "should",
  fun: "kill",
  beans: "either"
};

oa.post("http://localhost:8008/job?do=query&strings=kill&us=or&not=true", "", "",
  post_body, "application/x-www-form-urlencoded",
  function (error, data, response) {
    if (error) {
      console.error("Got error %s", util.inspect(error));
      process.exit(1);
    }
    console.log(data);
  }
);
