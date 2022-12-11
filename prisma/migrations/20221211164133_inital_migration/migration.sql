-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
