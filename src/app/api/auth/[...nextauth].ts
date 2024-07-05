// src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { Adapter } from 'next-auth/adapters';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (user && await bcrypt.compare(String(credentials?.password), user.password)) {
          return user;
        }
        return null;
      }
    })
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.SECRET
});
