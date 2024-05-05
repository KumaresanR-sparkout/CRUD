export const sendSuccessResponse = (res, statusCode, message, data) => {
    const responseData = {
        "status_code": statusCode,
        "status": true,
        "message": message,
        "data": data
    }
    res.status(statusCode).json(responseData)
}

export const sendErrorResponse = (res, statusCode, message) => {
    const responseData = {
        "status_code": statusCode,
        "status": false,
        "message": message
    }
    res.status(statusCode).json(responseData)
}





