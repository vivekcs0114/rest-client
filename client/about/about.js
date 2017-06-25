app.controller('aboutCtrl', function($scope){
   $scope.httpCodes = [
      {
         "statusCode": "100",
         "statusMeaning": "Continue",
         "statusDescription": "The server has received the request headers and the client should proceed to send the request body."
      },
      {
         "statusCode": "101",
         "statusMeaning": "Switching Protocols",
         "statusDescription": "The requester has asked the server to switch protocols and the server has agreed to do so."
      },
      {
        "statusCode": "102",
        "statusMeaning": "processing",
        "statusDescription": "This code indicates that the server has received and is processing the request, but no response is available yet."
      },
      {
        "statusCode": "200",
        "statusMeaning": "OK",
        "statusDescription": "Standard response for successful HTTP requests."
      },
      {
        "statusCode": "201",
        "statusMeaning": "Created",
        "statusDescription": "The request has been fulfilled, resulting in the creation of a new resource."
      },
      {
        "statusCode": "202",
        "statusMeaning": "Accepted",
        "statusDescription": "The request has been accepted for processing, but the processing has not been completed."
      },
      {
        "statusCode": "204",
        "statusMeaning": "No Content",
        "statusDescription": "The server successfully processed the request and is not returning any content."
      },
      {
        "statusCode": "304",
        "statusMeaning": "Not Modified",
        "statusDescription": "Indicates that the resource has not been modified"
      },
      {
        "statusCode": "306",
        "statusMeaning": "Switch Proxy",
        "statusDescription": "No longer used."
      },
      {
        "statusCode": "400",
        "statusMeaning": "Bad Request",
        "statusDescription": "The server cannot or will not process the request due to an apparent client error"
      },
      {
        "statusCode": "401",
        "statusMeaning": "Unauthorized",
        "statusDescription": "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided."
      },
      {
        "statusCode": "403",
        "statusMeaning": "Forbidden",
        "statusDescription": "The request was valid, but the server is refusing action."
      },
      {
        "statusCode": "404",
        "statusMeaning": "Not Found",
        "statusDescription": "The requested resource could not be found but may be available in the future."
      },
      {
        "statusCode": "405",
        "statusMeaning": "Method Not Allowed",
        "statusDescription": "A request method is not supported for the requested resource"
      },
      {
        "statusCode": "406",
        "statusMeaning": "Not Acceptable",
        "statusDescription": "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request."
      },
      {
        "statusCode": "407",
        "statusMeaning": "Proxy Authentication Required",
        "statusDescription": "The client must first authenticate itself with the proxy."
      },
      {
        "statusCode": "408",
        "statusMeaning": "Request Timeout",
        "statusDescription": "The server timed out waiting for the request."
      },
      {
        "statusCode": "409",
        "statusMeaning": "Conflict",
        "statusDescription": "Indicates that the request could not be processed because of conflict in the request"
      },
      {
        "statusCode": "415",
        "statusMeaning": "Unsupported Media Type",
        "statusDescription": "The request entity has a media type which the server or resource does not support."
      },
      {
        "statusCode": "500",
        "statusMeaning": "Internal Server Error",
        "statusDescription": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
      },
      {
        "statusCode": "501",
        "statusMeaning": "Not Implemented",
        "statusDescription": "The server either does not recognize the request method, or it lacks the ability to fulfil the request."
      },
      {
        "statusCode": "502",
        "statusMeaning": "Bad Gateway",
        "statusDescription": "The server was acting as a gateway or proxy and received an invalid response from the upstream server."
      },
      {
        "statusCode": "503",
        "statusMeaning": "Service Unavailable",
        "statusDescription": "The server is currently unavailable"
      },
      {
        "statusCode": "504",
        "statusMeaning": "Gateway Timeout",
        "statusDescription": "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
      }
   ]
});

