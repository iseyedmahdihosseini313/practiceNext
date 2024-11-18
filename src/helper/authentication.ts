import * as jose from 'jose';
import mongoose from 'mongoose';
import { NextRequest } from 'next/server';

export const jwtConfig = {
     secret: new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
     expireDate: '1d',
     algo: { alg: 'HS256' },
};
export const encodeToken = async (userId: number) => {
     const jwt = await new jose.SignJWT({ id: userId })
          .setExpirationTime(jwtConfig.expireDate)
          .setProtectedHeader(jwtConfig.algo)
          .sign(jwtConfig.secret);
     return jwt;
};
export const decodeToken = async (token: string) => {
     try {
          const decodedToken = await jose.jwtVerify<{ id: number }>(
               token,
               jwtConfig.secret
          );
          return decodedToken.payload;
     } catch (e) {
          console.error(e);
          return null;
     }
};
export const isAuthenticated = async (req: NextRequest) => {
     const token = req.cookies.get('token')?.value;
     if (!token) return { status: false, message: 'Authorization required' };
     const decodedToken = await decodeToken(token);
     if (!decodedToken)
          return {
               status: false,
               message: 'Authorization required',
          };
     return {
          status: true,
          message: 'Authorization success',
          userId: decodedToken.id,
     };
};

export const getUserID = async (token?: string) => {
     if (!token) return null;
     const data = await decodeToken(token);
     const userId = data?.id;
     return userId;
};

export const getUserInfo = async (req: any) => {
     const auth_status = await isAuthenticated(req);
     if (auth_status.status) {
          const user = await User.findOne({}).select({
               id: 1,
               username: 1,
               fullname: 1,
               phonenumber: 1,
               password: 0,
          });
          return user;
     } else {
          return { status: false, message: auth_status?.message };
     }
};