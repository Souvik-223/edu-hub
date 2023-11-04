import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();