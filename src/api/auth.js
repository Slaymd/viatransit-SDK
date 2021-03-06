//Imports
const axios = require('axios');

/**
 * viaTransit auth
 * @module viatransit
 */

/**
 * Get jwt_token from API
 * @async
 * @exports viatransit.API.login
 * @param email
 * @param password
 * @param apiUrl
 * @return {Promise<String>}
 */
async function login(/*String*/email, /*String*/password, /*String*/apiUrl)
{
    const url = apiUrl + "/users/login/";
    const data = {email, password};

    return await axios.post(url, data, {timeout: 15000}).then(res => {
        return res.data;
    }).catch(e => {
        return e.response.data;
    });
}

/**
 * Create an user
 * @async
 * @exports viatransit.API.register
 * @param email
 * @param password
 * @param apiUrl
 * @return {Promise<String>}
 */
async function register(/*String*/email, /*String*/password, /*String*/apiUrl)
{
    const url = apiUrl + "/users/register/";
    const data = {email, password};

    return await axios.post(url, data, {timeout: 15000}).then(res => {
        return res.data;
    }).catch(e => {
        return e.response.data;
    });
}

/**
 * Send a request for reset password
 * @async
 * @exports viatransit.API.forgotPassword
 * @param email
 * @param apiUrl
 * @return {Promise<Object>}
 */
async function forgotPassword(/*String*/email, /*String*/apiUrl)
{
    const url = apiUrl + "/users/forgot-password/";
    
    const data = {email};

    return await axios.post(url, data, {timeout: 15000}).then(res => {
        return res.data;
    }).catch(e => {
        return e.response.data;
    });
}

/**
 * Reset the forgot password
 * @async
 * @exports viatransit.API.resetPassword
 * @param id
 * @param password
 * @param apiUrl
 * @return {Promise<Object>}
 */
async function resetPassword(/*String*/id, /*String*/password, /*String*/apiUrl)
{
    const url = apiUrl + "/users/reset-password/";
    
    const data = {id, password};

    return await axios.post(url, data, {timeout: 15000}).then(res => {
        return res.data;
    }).catch(e => {
        return e.response.data;
    });
}

module.exports = { login, register, forgotPassword, resetPassword };