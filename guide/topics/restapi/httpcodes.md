---
title: HTTP Response Codes
---
What does Each Response Code mean? Check it out here!

# 1xx: Information

100 Status Codes are not going to be covered in this guide. Most 100 Codes are server side and usually mean something was sent to the server. Due to the amount of 100 Codes and how diverse they can be, we can not display each code. If you need 1xx status code information you can find it [here](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_Informational_response).

# 2xx: Success

## 200: Ok
This code means that your REST API has carried out the action you sent to it. This also means no other 200 code is more appropriate for the action done.

## 201: Created
The REST API has created a resource now. If you receve this you have most likely sent a post request.

## 202: Accepted
This means it is a large request and it has begun processing. Expect a 202 before another code such as 201 or 200.

## 203: Non-Authoritative Information
This means this server is a proxy which means it got a 200 OK from the origin but it is returning modified data.

## 204: No Content
204 is sent when you send a PUT, POST, or DELETE request, but there is no data with the request. No action was taken but it sees your request.

# 3xx: Redirects

## 301: Moved
This means that the model has been redesigned and a new URi has been assigned, Check in with your api to see what has changed.

## 302: Found
This means your Request was redirected, usually you will recieve a url with the proper area to make your request if you recieve a 302.

## 303: See Other
No Data is available for your Redirect. Check your server for more information.

## 304: Not Modified
This is just like 204 except no redirect was sent, instead of no data.

## 307: Temporary Redirect
This means that the API will not process the request, but the client should send the request to the url sent back with this code.

# 4xx: Client Error

## 400: Bad Request
This is the broad error code meaning you did not satisfy what the API requires, or you malformed your syntax.

## 401: Unauthorized
You do not have credientials to make this request or you have not completed a WWW-Authenticate Header

## 403: Forbidden
You formed your request correctly but, The API will not follow through. This means you have authenticated with lower permissions than what is required.

## 404: Not Found
The most common 400 error. This means your request is going to the wrong place, check your url and try again.

## 405: Method Not Allowed
Your using something like GET or POST when you can not in the URL specified.

## 406: Not Acceptable
You did not use the correct media type or used the wrong data format, such as XML instead of JSON.

## 412: Precondition Failed
This means you have incorrect headers, but the API will still try to carry out the request.

## 415: Unsupported Media Type
This means you are using the wrong Content-Type header. Such as `application/xml` in place of `application/json`.

# 5xx: Server Error

## 500: Internal Server Error
The Generic Server Error response. Try your server console for more information.

## 501: Not Implemented
Usually this means the server is not able to fulfill the request yet, but it is going to be available in the future.