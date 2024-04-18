export const sendErrorResponse = (statusCode, message) => {
    const responseData={
        "status_code": statusCode,
        "status": false,
        "message": message
    }
    return responseData
}

