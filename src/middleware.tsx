import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { request } from 'http';


const middleware = async (request: NextRequest, response: NextResponse) => {
      //get token from cookie

      if (request.nextUrl.pathname.startsWith('/Admin') || request.nextUrl.pathname.startsWith('/User')) {
      const token = 'Bearer ' + request.cookies.get('access_token')?.value;
      console.log(token);
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
        };
      
        const apiResponse = await fetch('https://walrus-app-elpr8.ondigitalocean.app/api/user', requestOptions);
        const data = await apiResponse.json();
        console.log(data);
        console.log(data.user.role);
      //get user data from api

  
      if (data.user.role === 'admin' && request.nextUrl.pathname.startsWith('/User')) {
        return NextResponse.redirect(new URL('/Hadeh', request.url));
        };
        if (data.user.role === 'user' && request.nextUrl.pathname.startsWith('/Admin')) {
            return NextResponse.rewrite(new URL('/Hadeh', request.url));
            }
    else {
        return NextResponse.next();
    }
    };
}
    export default middleware;

// export function middleware(request: NextRequest) {
//     // get user data from api
//     const token = 'Bearer ' + request.cookies.get('access_token')?.value;
//       console.log(token);
//       const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json', Authorization: `${token}` },
//         };
      
//         const apiResponse =  fetch('https://walrus-app-elpr8.ondigitalocean.app/api/user', requestOptions);
//         console.log(apiResponse);
//     // if user is admin and the url starts with /user, redirect to /admin
//     // 
    
// }