const HOST = 'http://zmtzwb.oicp.net:8080'

const resolveUrl = function(path){
    path =path.substr(0,1) === '/'? path : '/'+path
    return HOST + path
}

 const requestUrl = resolveUrl('/wx/user/wx6a2fc9c872aeaa09/login');
const getuserInfo  = resolveUrl('/wx/user/wx6a2fc9c872aeaa09/info');
    module.exports = {
        requestUrl,
        getuserInfo
    }