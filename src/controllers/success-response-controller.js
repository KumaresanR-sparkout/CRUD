export const sendSuccessResponse = (statusCode, message, data) => {
    const responseData = {
        "status_code": statusCode,
        "status": true,
        "message":message,
        "data": data
    }
    return responseData
}




