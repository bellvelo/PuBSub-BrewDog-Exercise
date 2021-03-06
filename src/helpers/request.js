const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () { // onComplete has been removed.
  return fetch(this.url)
    .then(response => response.json())
}


module.exports = Request;
