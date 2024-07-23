export async function onRequestPost(request) {
    // Check for POST request to "/api/login"
    if (request.method !== 'POST' || !request.url.endsWith('/api/login')) {
        return new Response('Not Found:' + request.method + ": " + request.url, { status: 404 });
        }
    
        // Get username and password from request body
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
    
        // Check credentials
        if (username === 'admin' && password === 'admin') {
        return new Response('Login Successful', { status: 200 });
        } else {
        return new Response('Wrong Username or Password', { status: 401 });
        }
}