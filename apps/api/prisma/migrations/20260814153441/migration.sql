-- CreateTable
CREATE TABLE "ResumeProfile" (
    "id" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "resumePdfPath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResumeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeExperience" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "dateRange" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "title" TEXT,
    "bullets" TEXT[],
    "tags" TEXT[],

    CONSTRAINT "ResumeExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeRole" (
    "id" TEXT NOT NULL,
    "experienceId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "bullets" TEXT[],
    "tags" TEXT[],

    CONSTRAINT "ResumeRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeEducation" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "degree" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "ResumeEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeSkillGroup" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "items" TEXT[],

    CONSTRAINT "ResumeSkillGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ResumeExperience_profileId_sortOrder_idx" ON "ResumeExperience"("profileId", "sortOrder");

-- CreateIndex
CREATE INDEX "ResumeRole_experienceId_sortOrder_idx" ON "ResumeRole"("experienceId", "sortOrder");

-- CreateIndex
CREATE INDEX "ResumeEducation_profileId_sortOrder_idx" ON "ResumeEducation"("profileId", "sortOrder");

-- CreateIndex
CREATE INDEX "ResumeSkillGroup_profileId_sortOrder_idx" ON "ResumeSkillGroup"("profileId", "sortOrder");

-- AddForeignKey
ALTER TABLE "ResumeExperience" ADD CONSTRAINT "ResumeExperience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "ResumeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeRole" ADD CONSTRAINT "ResumeRole_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "ResumeExperience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeEducation" ADD CONSTRAINT "ResumeEducation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "ResumeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeSkillGroup" ADD CONSTRAINT "ResumeSkillGroup_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "ResumeProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
