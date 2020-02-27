var http = require("http");
var fs = require("fs");
var path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const charset = require("charset");
const iconv = require("iconv-lite");
var sanitizeHtml = require("sanitize-html");
var express = require("express");
var ejs = require("ejs");
//var title = 'Hello';

var port = process.env.PORT || 5000;

var url = [];

var app = express();

app.engine("ejs", ejs.renderFile);

app.get("/", function(req, res) {
  request(
    "https://media.naver.com/press/009?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[0] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/001?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[1] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/088?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[2] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/001?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[3] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/032?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[4] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/015?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[5] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request("https://media.naver.com/press/138", (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      url[6] = $(".press_edit_news_title")[0].children[0].data;
    }
  });
  request(
    "https://media.naver.com/press/277?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[7] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/008?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[8] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/056?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[9] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/021?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[10] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request(
    "https://media.naver.com/press/022?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[11] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  request("https://media.naver.com/press/029", (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      url[12] = $(".press_edit_news_title")[0].children[0].data;
    }
  });
  request(
    "https://media.naver.com/press/366?sid=110",
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        url[13] = $(".press_edit_news_title")[0].children[0].data;
      }
    }
  );
  res.render("template.ejs", {
    title1: url[0],
    title2: url[1],
    title3: url[2],
    title4: url[3],
    title5: url[4],
    title6: url[5],
    title7: url[6],
    title8: url[7],
    title9: url[8],
    title10: url[9],
    title11: url[10],
    title12: url[11],
    title13: url[12],
    title14: url[13]
  });
});

var server = app.listen(port, function() {
  console.log("Server is running!");
});
