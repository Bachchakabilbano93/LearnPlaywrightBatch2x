function questionName(input) {

    let answer;
    switch (input) {
        case 200:
            answer = `Status Code : ${input} Result : PASS - OK: Request successful`;
            break;
        case 201:
            answer = `Status Code : ${input} Result : PASS - Created: Resource created successfully`;
            break;
        case 301:
            answer = `Status Code : ${input} Result : WARNING - Moved Permanently: URL has changed`;
            break;
        case 400:
            answer = `Status Code : ${input} Result : FAIL - Bad Request: Check request payload`;
            break;
        case 401:
            answer = `Status Code : ${input} Result : FAIL - Unauthorized: Check auth token`;
            break;
        case 403:
            answer = `Status Code : ${input} Result : FAIL - Forbidden: Insufficient permissions`;
            break;
        case 404:
            answer = `Status Code : ${input} Result : FAIL - Not Found: Check endpoint URL`;
            break;
        case 500:
            answer = `Status Code : ${input} Result :FAIL - Internal Server Error: Backend issue`;
            break;
        default:
            answer = `Status Code : ${input} Result : UNKNOWN - Unhandled status code`;
    }

    return answer;
}

let response = questionName(500);
console.log(response);