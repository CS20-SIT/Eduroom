const pool = require('../database/db');

const database = `

-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** Whitelist_University

CREATE TABLE IF NOT EXISTS Whitelist_University
(
 universityDomain varchar(50) NOT NULL,
 universityName   varchar(255) NOT NULL,
 CONSTRAINT PK_whitelist_university PRIMARY KEY ( universityDomain )
);








-- ************************************** User_Profile

CREATE TABLE IF NOT EXISTS User_Profile
(
 userId      uuid NOT NULL,
 firstName   varchar(50) NOT NULL,
 lastName    varchar(50) NOT NULL,
 birthDate   date NOT NULL,
 initial     varchar(10) NOT NULL,
 phoneNo     varchar(10) NOT NULL,
 countryCode varchar(5) NOT NULL,
 displayName varchar(25) NOT NULL,
 bio         varchar(255) NOT NULL,
 avatar      path NOT NULL,
 isStudent   boolean NOT NULL,
 createAt    timestamp NOT NULL,
 updateAt    timestamp NOT NULL,
 CONSTRAINT PK_profile PRIMARY KEY ( userId )
);








-- ************************************** TagColor

CREATE TABLE IF NOT EXISTS TagColor
(
 tagId    int NOT NULL,
 codeName varchar(50) NOT NULL,
 CONSTRAINT PK_tagcolor PRIMARY KEY ( tagId )
);








-- ************************************** Sticker_All

CREATE TABLE IF NOT EXISTS Sticker_All
(
 StickerId    int NOT NULL,
 StickerName  varchar(50) NOT NULL,
 StickerType  varchar(50) NOT NULL,
 StickerImg   path NOT NULL,
 StickerPrice int NOT NULL,
 CONSTRAINT PK_sticker_all PRIMARY KEY ( StickerId )
);








-- ************************************** promotionCode

CREATE TABLE IF NOT EXISTS promotionCode
(
 pCode          varchar(10) NOT NULL,
 startTime      timestamp NOT NULL,
 expireTime     timestamp NOT NULL,
 discountAmount numeric(5,2) NOT NULL,
 limit          int NOT NULL,
 minTotal       int NOT NULL,
 codeType       varchar(10) NOT NULL,
 CONSTRAINT PK_promotioncode PRIMARY KEY ( pCode )
);








-- ************************************** problem_types

CREATE TABLE IF NOT EXISTS problem_types
(
 typeId   int NOT NULL,
 typeName varchar(50) NOT NULL,
 CONSTRAINT PK_problem_types PRIMARY KEY ( typeId )
);








-- ************************************** Path

CREATE TABLE IF NOT EXISTS Path
(
 pathId           int NOT NULL,
 Path_Name        varchar(50) NOT NULL,
 Path_Description varchar(100) NOT NULL,
 CONSTRAINT PK_path_detail PRIMARY KEY ( pathId )
);








-- ************************************** Leaderboard_Title

CREATE TABLE IF NOT EXISTS Leaderboard_Title
(
 titleId          int NOT NULL,
 TitleName        varchar(50) NOT NULL,
 TitleDescription varchar(100) NOT NULL,
 CONSTRAINT PK_title PRIMARY KEY ( titleId )
);








-- ************************************** Kahoot_Type

CREATE TABLE IF NOT EXISTS Kahoot_Type
(
 id       int NOT NULL,
 nameType varchar(50) NOT NULL,
 CONSTRAINT PK_tpye PRIMARY KEY ( id )
);








-- ************************************** Kahoot_Question_Topic

CREATE TABLE IF NOT EXISTS Kahoot_Question_Topic
(
 id   int NOT NULL,
 name varchar(50) NOT NULL,
 CONSTRAINT PK_topic PRIMARY KEY ( id )
);








-- ************************************** Instructor

CREATE TABLE IF NOT EXISTS Instructor
(
 InstructorId uuid NOT NULL,
 userId       uuid NOT NULL,
 isVerified   boolean NOT NULL,
 createAt     timestamp NOT NULL,
 approveAt    timestamp NULL,
 approver     uuid NOT NULL,
 CONSTRAINT PK_instructor_information PRIMARY KEY ( InstructorId )
);








-- ************************************** Forum_Type

CREATE TABLE IF NOT EXISTS Forum_Type
(
 typeId   int NOT NULL,
 typeName varchar(10) NOT NULL,
 CONSTRAINT PK_forum_type PRIMARY KEY ( typeId )
);








-- ************************************** Financial_Transaction

CREATE TABLE IF NOT EXISTS Financial_Transaction
(
 transactionId uuid NOT NULL,
 amount        decimal(18,2) NOT NULL,
 description   varchar(100) NOT NULL,
 CONSTRAINT PK_financial PRIMARY KEY ( transactionId )
);








-- ************************************** Category_Type

CREATE TABLE IF NOT EXISTS Category_Type
(
 categoryTypeId int NOT NULL,
 typeName       varchar(50) NOT NULL,
 CONSTRAINT PK_category_type PRIMARY KEY ( categoryTypeId )
);








-- ************************************** Category_Event

CREATE TABLE IF NOT EXISTS Category_Event
(
 typeId   int NOT NULL,
 typeName varchar(20) NOT NULL,
 CONSTRAINT PK_categoryeventt PRIMARY KEY ( typeId )
);








-- ************************************** Categories

CREATE TABLE IF NOT EXISTS Categories
(
 cataId   int NOT NULL,
 cataName varchar(50) NOT NULL,
 CONSTRAINT PK_categories PRIMARY KEY ( cataId )
);








-- ************************************** Badge

CREATE TABLE IF NOT EXISTS Badge
(
 BadgeId int NOT NULL,
 Cost    int NOT NULL,
 Details int NOT NULL,
 CONSTRAINT PK_badge PRIMARY KEY ( BadgeId )
);








-- ************************************** Admin_Login

CREATE TABLE IF NOT EXISTS Admin_Login
(
 adminId     uuid NOT NULL,
 username    varchar(50) NOT NULL,
 password    varchar(255) NOT NULL,
 firstName   varchar(50) NOT NULL,
 lastname    varchar(50) NOT NULL,
 displayname varchar(50) NOT NULL,
 avatar      path NOT NULL,
 role        varchar(10) NOT NULL,
 CONSTRAINT PK_admin_login PRIMARY KEY ( adminId ),
 CONSTRAINT ind_3813 UNIQUE ( username )
);








-- ************************************** Ad_Type

CREATE TABLE IF NOT EXISTS Ad_Type
(
 typeId   int NOT NULL,
 typeName varchar(10) NOT NULL,
 CONSTRAINT PK_adtype PRIMARY KEY ( typeId )
);








-- ************************************** User_XP

CREATE TABLE IF NOT EXISTS User_XP
(
 userId    uuid NOT NULL,
 totalXP   int NOT NULL,
 currentXP int NOT NULL,
 CONSTRAINT PK_user_xp PRIMARY KEY ( userId ),
 CONSTRAINT FK_3763 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3763 ON User_XP
(
 userId
);








-- ************************************** User_Verification

CREATE TABLE IF NOT EXISTS User_Verification
(
 userId     uuid NOT NULL,
 startTime  timestamp NOT NULL,
 endTime    timestamp NOT NULL,
 token      varchar(255) NOT NULL,
 isVerified boolean NOT NULL,
 CONSTRAINT PK_verifyingtime PRIMARY KEY ( userId ),
 CONSTRAINT FK_1057 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_1057 ON User_Verification
(
 userId
);








-- ************************************** User_student_Verification

CREATE TABLE IF NOT EXISTS User_student_Verification
(
 userId          uuid NOT NULL,
 isVerified      boolean NOT NULL,
 token           varchar(255) NOT NULL,
 universityEmail varchar(100) NOT NULL,
 CONSTRAINT PK_user_student_verification PRIMARY KEY ( userId ),
 CONSTRAINT FK_3643 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3643 ON User_student_Verification
(
 userId
);








-- ************************************** User_SearchHistory

CREATE TABLE IF NOT EXISTS User_SearchHistory
(
 userId     uuid NOT NULL,
 keyword    varchar(50) NOT NULL,
 searchTime timestamp NOT NULL,
 CONSTRAINT PK_user_searchhistory PRIMARY KEY ( userId, keyword ),
 CONSTRAINT FK_3463 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3463 ON User_SearchHistory
(
 userId
);








-- ************************************** User_Path

CREATE TABLE IF NOT EXISTS User_Path
(
 userId uuid NOT NULL,
 pathId int NOT NULL,
 CONSTRAINT PK_user_path PRIMARY KEY ( userId, pathId ),
 CONSTRAINT FK_3070 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_925 FOREIGN KEY ( pathId ) REFERENCES Path ( pathId )
);

CREATE INDEX fkIdx_3070 ON User_Path
(
 userId
);

CREATE INDEX fkIdx_925 ON User_Path
(
 pathId
);








-- ************************************** User_loginLog

CREATE TABLE IF NOT EXISTS User_loginLog
(
 userId    uuid NOT NULL,
 loginTime timestamp NOT NULL,
 ip        varchar(15) NOT NULL,
 browser   varchar(50) NOT NULL,
 CONSTRAINT PK_user_loginlog PRIMARY KEY ( userId, loginTime ),
 CONSTRAINT FK_3467 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3467 ON User_loginLog
(
 userId
);








-- ************************************** User_badge

CREATE TABLE IF NOT EXISTS User_badge
(
 BadgeId int NOT NULL,
 userId  uuid NOT NULL,
 CONSTRAINT PK_user_badge PRIMARY KEY ( BadgeId, userId ),
 CONSTRAINT FK_3067 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_945 FOREIGN KEY ( BadgeId ) REFERENCES Badge ( BadgeId )
);

CREATE INDEX fkIdx_3067 ON User_badge
(
 userId
);

CREATE INDEX fkIdx_945 ON User_badge
(
 BadgeId
);








-- ************************************** User_Address

CREATE TABLE IF NOT EXISTS User_Address
(
 userId      uuid NOT NULL,
 addressNo   varchar(100) NOT NULL,
 building    varchar(50) NOT NULL,
 soi         varchar(50) NOT NULL,
 road        varchar(50) NOT NULL,
 subDistrict varchar(50) NOT NULL,
 district    varchar(50) NOT NULL,
 province    varchar(50) NOT NULL,
 zipCode     varchar(50) NOT NULL,
 country     varchar(50) NOT NULL,
 createAt    timestamp NOT NULL,
 updateAt    timestamp NOT NULL,
 CONSTRAINT PK_country PRIMARY KEY ( userId ),
 CONSTRAINT FK_3447 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3447 ON User_Address
(
 userId
);








-- ************************************** Transaction_user

CREATE TABLE IF NOT EXISTS Transaction_user
(
 transactionId uuid NOT NULL,
 userId        uuid NOT NULL,
 CONSTRAINT PK_transaction_user PRIMARY KEY ( transactionId ),
 CONSTRAINT FK_3787 FOREIGN KEY ( transactionId ) REFERENCES Financial_Transaction ( transactionId ),
 CONSTRAINT FK_3799 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3787 ON Transaction_user
(
 transactionId
);

CREATE INDEX fkIdx_3799 ON Transaction_user
(
 userId
);








-- ************************************** Transaction_instructor

CREATE TABLE IF NOT EXISTS Transaction_instructor
(
 transactionId uuid NOT NULL,
 InstructorId  uuid NOT NULL,
 CONSTRAINT PK_transaction_instructor PRIMARY KEY ( transactionId ),
 CONSTRAINT FK_3784 FOREIGN KEY ( transactionId ) REFERENCES Financial_Transaction ( transactionId ),
 CONSTRAINT FK_3796 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3784 ON Transaction_instructor
(
 transactionId
);

CREATE INDEX fkIdx_3796 ON Transaction_instructor
(
 InstructorId
);








-- ************************************** subProblemTypes

CREATE TABLE IF NOT EXISTS subProblemTypes
(
 subProblemId int NOT NULL,
 typeId       int NOT NULL,
 subName      varchar(50) NOT NULL,
 CONSTRAINT PK_sub_problem_types PRIMARY KEY ( subProblemId ),
 CONSTRAINT FK_169 FOREIGN KEY ( typeId ) REFERENCES problem_types ( typeId )
);

CREATE INDEX fkIdx_169 ON subProblemTypes
(
 typeId
);








-- ************************************** Sub_category

CREATE TABLE IF NOT EXISTS Sub_category
(
 subCategoryIId int NOT NULL,
 subTypeName    varchar(50) NOT NULL,
 categoryTypeId int NOT NULL,
 CONSTRAINT PK_sub_category PRIMARY KEY ( subCategoryIId ),
 CONSTRAINT FK_107 FOREIGN KEY ( categoryTypeId ) REFERENCES Category_Type ( categoryTypeId )
);

CREATE INDEX fkIdx_107 ON Sub_category
(
 categoryTypeId
);








-- ************************************** Student_Appointments

CREATE TABLE IF NOT EXISTS Student_Appointments
(
 sAppointmentId int NOT NULL,
 userId         uuid NOT NULL,
 subject        varchar(50) NOT NULL,
 startTime      timestamp NOT NULL,
 endTime        timestamp NOT NULL,
 status         boolean NOT NULL,
 paymentDue     timestamp NULL,
 isPaid         boolean NOT NULL,
 CONSTRAINT PK_instructor_availabilities PRIMARY KEY ( sAppointmentId ),
 CONSTRAINT FK_4053 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_4053 ON Student_Appointments
(
 userId
);








-- ************************************** Sticker_Owner

CREATE TABLE IF NOT EXISTS Sticker_Owner
(
 StickerId int NOT NULL,
 userId    uuid NOT NULL,
 CONSTRAINT PK_sticker_owner PRIMARY KEY ( StickerId, userId ),
 CONSTRAINT FK_140 FOREIGN KEY ( StickerId ) REFERENCES Sticker_All ( StickerId ),
 CONSTRAINT FK_2746 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_140 ON Sticker_Owner
(
 StickerId
);

CREATE INDEX fkIdx_2746 ON Sticker_Owner
(
 userId
);








-- ************************************** Reminder

CREATE TABLE IF NOT EXISTS Reminder
(
 userId         uuid NOT NULL,
 reminder_count int NOT NULL,
 title          varchar(50) NOT NULL,
 description    varchar(50) NOT NULL,
 startDate      date NOT NULL,
 endDate        date NOT NULL,
 startTime      time NOT NULL,
 endTime        time NOT NULL,
 CONSTRAINT PK_reminder PRIMARY KEY ( userId, reminder_count ),
 CONSTRAINT FK_2632 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2632 ON Reminder
(
 userId
);








-- ************************************** questions

CREATE TABLE IF NOT EXISTS questions
(
 id          int NOT NULL,
 title       varchar(50) NOT NULL,
 description text NULL,
 hint        text NULL,
 intputDes   text NULL,
 outputDes   text NULL,
 timeLimit   int NOT NULL,
 memoryLimit int NOT NULL,
 difficulty  varchar(20) NOT NULL,
 visibility  boolean NOT NULL,
 ruleType    varchar(50) NOT NULL,
 adminId     uuid NOT NULL,
 CONSTRAINT PK_questions PRIMARY KEY ( id ),
 CONSTRAINT FK_3839 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3839 ON questions
(
 adminId
);








-- ************************************** Public_Code_Usage

CREATE TABLE IF NOT EXISTS Public_Code_Usage
(
 pCode  varchar(10) NOT NULL,
 userId uuid NOT NULL,
 CONSTRAINT PK_festivalcode PRIMARY KEY ( pCode, userId ),
 CONSTRAINT FK_2960 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_53 FOREIGN KEY ( pCode ) REFERENCES promotionCode ( pCode )
);

CREATE INDEX fkIdx_2960 ON Public_Code_Usage
(
 userId
);

CREATE INDEX fkIdx_53 ON Public_Code_Usage
(
 pCode
);








-- ************************************** Path_node

CREATE TABLE IF NOT EXISTS Path_node
(
 nodeId         int NOT NULL,
 Parent_Node_id int NULL,
 pathId         int NOT NULL,
 node_name      varchar(50) NOT NULL,
 node_desc      varchar(50) NOT NULL,
 CONSTRAINT PK_path_node PRIMARY KEY ( nodeId ),
 CONSTRAINT FK_915 FOREIGN KEY ( pathId ) REFERENCES Path ( pathId ),
 CONSTRAINT FK_922 FOREIGN KEY ( Parent_Node_id ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_915 ON Path_node
(
 pathId
);

CREATE INDEX fkIdx_922 ON Path_node
(
 Parent_Node_id
);








-- ************************************** Package

CREATE TABLE IF NOT EXISTS Package
(
 packageId    uuid NOT NULL,
 packageName  char(50) NOT NULL,
 InstructorId uuid NOT NULL,
 discount     decimal(18,2) NOT NULL,
 isPublic     boolean NOT NULL,
 CONSTRAINT PK_package PRIMARY KEY ( packageId ),
 CONSTRAINT FK_3630 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3630 ON Package
(
 InstructorId
);








-- ************************************** Pack_Sticker

CREATE TABLE IF NOT EXISTS Pack_Sticker
(
 StickerId     int NOT NULL,
 StickerNumber int NOT NULL,
 StickerImg    path NOT NULL,
 CONSTRAINT PK_pack_sticker PRIMARY KEY ( StickerId, StickerNumber ),
 CONSTRAINT FK_147 FOREIGN KEY ( StickerId ) REFERENCES Sticker_All ( StickerId )
);

CREATE INDEX fkIdx_147 ON Pack_Sticker
(
 StickerId
);








-- ************************************** OI_rank

CREATE TABLE IF NOT EXISTS OI_rank
(
 name         varchar(50) NOT NULL,
 totalCorrect int NOT NULL,
 totalSubmit  int NOT NULL,
 userId       uuid NOT NULL,
 CONSTRAINT PK_anwer PRIMARY KEY ( userId ),
 CONSTRAINT FK_3802 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3802 ON OI_rank
(
 userId
);








-- ************************************** OAuth

CREATE TABLE IF NOT EXISTS OAuth
(
 email  varchar(50) NOT NULL,
 token  varchar(255) NOT NULL,
 userId uuid NOT NULL,
 CONSTRAINT PK_oauth PRIMARY KEY ( userId ),
 CONSTRAINT FK_3425 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3425 ON OAuth
(
 userId
);








-- ************************************** Local_Auth

CREATE TABLE IF NOT EXISTS Local_Auth
(
 userId   uuid NOT NULL,
 email    varchar(50) NOT NULL,
 password varchar(255) NOT NULL,
 CONSTRAINT PK_local_auth PRIMARY KEY ( userId ),
 CONSTRAINT FK_3432 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3432 ON Local_Auth
(
 userId
);








-- ************************************** Leaderboard

CREATE TABLE IF NOT EXISTS Leaderboard
(
 userId  uuid NOT NULL,
 titleId int NOT NULL,
 XP      bigint NOT NULL,
 CONSTRAINT PK_leaderboard PRIMARY KEY ( userId ),
 CONSTRAINT FK_3058 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_61 FOREIGN KEY ( titleId ) REFERENCES Leaderboard_Title ( titleId )
);

CREATE INDEX fkIdx_3058 ON Leaderboard
(
 userId
);

CREATE INDEX fkIdx_61 ON Leaderboard
(
 titleId
);








-- ************************************** Kahoot_room

CREATE TABLE IF NOT EXISTS Kahoot_room
(
 id           int NOT NULL,
 name         varchar(50) NOT NULL,
 capacity     int NOT NULL,
 type         varchar(50) NOT NULL,
 typeID       int NOT NULL,
 InstructorId uuid NOT NULL,
 CONSTRAINT PK_room PRIMARY KEY ( id ),
 CONSTRAINT FK_104 FOREIGN KEY ( typeID ) REFERENCES Kahoot_Type ( id ),
 CONSTRAINT FK_2403 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_104 ON Kahoot_room
(
 typeID
);

CREATE INDEX fkIdx_2403 ON Kahoot_room
(
 InstructorId
);








-- ************************************** Kahoot_player

CREATE TABLE IF NOT EXISTS Kahoot_player
(
 userId      uuid NOT NULL,
 nameForPlay char(20) NOT NULL,
 CONSTRAINT PK_player PRIMARY KEY ( userId ),
 CONSTRAINT FK_2398 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2398 ON Kahoot_player
(
 userId
);








-- ************************************** Instructor_Finance

CREATE TABLE IF NOT EXISTS Instructor_Finance
(
 InstructorId uuid NOT NULL,
 accountName  varchar(100) NOT NULL,
 accountNo    varchar(25) NOT NULL,
 accountBank  varchar(100) NOT NULL,
 CONSTRAINT PK_instructor_finance PRIMARY KEY ( InstructorId ),
 CONSTRAINT FK_3770 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3770 ON Instructor_Finance
(
 InstructorId
);








-- ************************************** Instructor_expert

CREATE TABLE IF NOT EXISTS Instructor_expert
(
 InstructorId uuid NOT NULL,
 expertNumber int NOT NULL,
 subjectName  varchar(50) NOT NULL,
 evidence     path NULL,
 date         timestamp NOT NULL,
 CONSTRAINT PK_instructor_expert PRIMARY KEY ( InstructorId, expertNumber ),
 CONSTRAINT FK_117 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_117 ON Instructor_expert
(
 InstructorId
);








-- ************************************** Instructor_degree

CREATE TABLE IF NOT EXISTS Instructor_degree
(
 InstructorId uuid NOT NULL,
 degreeNumber int NOT NULL,
 degree_name  varchar(50) NOT NULL,
 evidence     path NOT NULL,
 date         timestamp NOT NULL,
 CONSTRAINT PK_instructor_degree PRIMARY KEY ( InstructorId, degreeNumber ),
 CONSTRAINT FK_125 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_125 ON Instructor_degree
(
 InstructorId
);








-- ************************************** Instructor_Availabilities

CREATE TABLE IF NOT EXISTS Instructor_Availabilities
(
 InstructorId uuid NOT NULL,
 day          varchar(50) NOT NULL,
 time         time NOT NULL,
 price        decimal(18,2) NOT NULL,
 CONSTRAINT PK_instructor_availabilities PRIMARY KEY ( InstructorId, day, time ),
 CONSTRAINT FK_4059 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_4059 ON Instructor_Availabilities
(
 InstructorId
);








-- ************************************** Instructor_Appointments

CREATE TABLE IF NOT EXISTS Instructor_Appointments
(
 iAppointmentId int NOT NULL,
 startTime      timestamp NOT NULL,
 endTime        timestamp NOT NULL,
 status         boolean NULL,
 price          decimal(18,2) NOT NULL,
 paymentDue     timestamp NULL,
 approveTime    timestamp NOT NULL,
 isPaid         boolean NOT NULL,
 InstructorId   uuid NOT NULL,
 CONSTRAINT PK_instructor_appointments PRIMARY KEY ( iAppointmentId ),
 CONSTRAINT FK_4065 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_4065 ON Instructor_Appointments
(
 InstructorId
);








-- ************************************** Global_Event

CREATE TABLE IF NOT EXISTS Global_Event
(
 EventId    int NOT NULL,
 title      varchar(50) NOT NULL,
 startDate  date NOT NULL,
 endDate    date NOT NULL,
 startTime  time NOT NULL,
 endTime    time NOT NULL,
 detail     varchar(50) NOT NULL,
 place      varchar(50) NOT NULL,
 duration   varchar(50) NOT NULL,
 lastUpdate timestamp NOT NULL,
 typeId     int NOT NULL,
 adminId    uuid NOT NULL,
 CONSTRAINT PK_event PRIMARY KEY ( EventId ),
 CONSTRAINT FK_1519 FOREIGN KEY ( typeId ) REFERENCES Category_Event ( typeId ),
 CONSTRAINT FK_3843 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_1519 ON Global_Event
(
 typeId
);

CREATE INDEX fkIdx_3843 ON Global_Event
(
 adminId
);








-- ************************************** DailyReward_History

CREATE TABLE IF NOT EXISTS DailyReward_History
(
 userId    uuid NOT NULL,
 Date      date NOT NULL,
 CoinDaily int NOT NULL,
 CONSTRAINT PK_code_expired PRIMARY KEY ( userId, Date ),
 CONSTRAINT FK_2743 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2743 ON DailyReward_History
(
 userId
);








-- ************************************** Course

CREATE TABLE IF NOT EXISTS Course
(
 courseId          uuid NOT NULL,
 courseName        varchar(50) NOT NULL,
 courseDescription varchar(1000) NOT NULL,
 coursePicture     path NOT NULL,
 sampleVideo       path NOT NULL,
 price             decimal(18,2) NOT NULL,
 language          varchar(50) NOT NULL,
 certificate       boolean NOT NULL,
 ownerID           uuid NOT NULL,
 CONSTRAINT PK_table_5 PRIMARY KEY ( courseId ),
 CONSTRAINT FK_3859 FOREIGN KEY ( ownerID ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_3859 ON Course
(
 ownerID
);








-- ************************************** contest

CREATE TABLE IF NOT EXISTS contest
(
 examNo       int NOT NULL GENERATED BY DEFAULT AS IDENTITY (
 start 0
 ),
 title        varchar(50) NOT NULL,
 examRuleType varchar(50) NOT NULL,
 description  text NULL,
 startTime    timestamp NOT NULL,
 endTime      timestamp NOT NULL,
 status       boolean NOT NULL,
 adminId      uuid NOT NULL,
 CONSTRAINT PK_table_3 PRIMARY KEY ( examNo ),
 CONSTRAINT FK_3836 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3836 ON contest
(
 adminId
);








-- ************************************** Coin_Owner

CREATE TABLE IF NOT EXISTS Coin_Owner
(
 userId       uuid NOT NULL,
 AmountOfCoin int NOT NULL,
 CONSTRAINT PK_coin_own PRIMARY KEY ( userId ),
 CONSTRAINT FK_2732 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_2732 ON Coin_Owner
(
 userId
);








-- ************************************** Code_owner

CREATE TABLE IF NOT EXISTS Code_owner
(
 pCode  varchar(10) NOT NULL,
 userId uuid NOT NULL,
 isUsed boolean NOT NULL,
 CONSTRAINT PK_usespecificcode PRIMARY KEY ( pCode ),
 CONSTRAINT FK_2963 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_59 FOREIGN KEY ( pCode ) REFERENCES promotionCode ( pCode )
);

CREATE INDEX fkIdx_2963 ON Code_owner
(
 userId
);

CREATE INDEX fkIdx_59 ON Code_owner
(
 pCode
);








-- ************************************** Chat

CREATE TABLE IF NOT EXISTS Chat
(
 chatRoomId int NOT NULL,
 picture    path NOT NULL,
 roomName   varchar(255) NOT NULL,
 date       date NOT NULL,
 Creator    uuid NOT NULL,
 CONSTRAINT PK_chatmember PRIMARY KEY ( chatRoomId ),
 CONSTRAINT FK_3340 FOREIGN KEY ( Creator ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3340 ON Chat
(
 Creator
);








-- ************************************** announcements

CREATE TABLE IF NOT EXISTS announcements
(
 id          int NOT NULL GENERATED ALWAYS AS IDENTITY (
 start 0
 ),
 title       varchar(50) NOT NULL,
 description text NOT NULL,
 adminId     uuid NOT NULL,
 isVisible   boolean NOT NULL,
 CONSTRAINT PK_announcements PRIMARY KEY ( id ),
 CONSTRAINT FK_3827 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3827 ON announcements
(
 adminId
);








-- ************************************** adminLog

CREATE TABLE IF NOT EXISTS adminLog
(
 logNo     int NOT NULL,
 title     varchar(100) NOT NULL,
 detail    text NOT NULL,
 timestamp timestamp NOT NULL,
 adminId   uuid NOT NULL,
 CONSTRAINT PK_adminlog PRIMARY KEY ( logNo ),
 CONSTRAINT FK_3833 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3833 ON adminLog
(
 adminId
);








-- ************************************** Ad

CREATE TABLE IF NOT EXISTS Ad
(
 adId         int NOT NULL,
 type         int NOT NULL,
 adStartTime  timestamp NOT NULL,
 adExpireTime timestamp NOT NULL,
 ownerName    varchar(20) NOT NULL,
 contactNum   varchar(10) NOT NULL,
 email        varchar(50) NOT NULL,
 fileLocation varchar(100) NOT NULL,
 CONSTRAINT PK_ads PRIMARY KEY ( adId ),
 CONSTRAINT FK_73 FOREIGN KEY ( type ) REFERENCES Ad_Type ( typeId )
);

CREATE INDEX fkIdx_73 ON Ad
(
 type
);








-- ************************************** ACM_rank

CREATE TABLE IF NOT EXISTS ACM_rank
(
 name         varchar(50) NOT NULL,
 totalCorrect int NOT NULL,
 totalSubmit  int NOT NULL,
 userId       uuid NOT NULL,
 CONSTRAINT PK_anwer PRIMARY KEY ( userId ),
 CONSTRAINT FK_3805 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3805 ON ACM_rank
(
 userId
);








-- ************************************** User_Wishlist

CREATE TABLE IF NOT EXISTS User_Wishlist
(
 userId   uuid NOT NULL,
 courseId uuid NOT NULL,
 addTime  timestamp NOT NULL,
 CONSTRAINT PK_wishlist PRIMARY KEY ( userId, courseId ),
 CONSTRAINT FK_1060 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_2088 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_1060 ON User_Wishlist
(
 userId
);

CREATE INDEX fkIdx_2088 ON User_Wishlist
(
 courseId
);








-- ************************************** User_Progress

CREATE TABLE IF NOT EXISTS User_Progress
(
 userId      uuid NOT NULL,
 pathId      int NOT NULL,
 nodeId      int NOT NULL,
 progression boolean NOT NULL,
 score       int NOT NULL,
 CONSTRAINT PK_progress PRIMARY KEY ( userId, pathId, nodeId ),
 CONSTRAINT FK_931 FOREIGN KEY ( userId, pathId ) REFERENCES User_Path ( userId, pathId ),
 CONSTRAINT FK_935 FOREIGN KEY ( nodeId ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_931 ON User_Progress
(
 pathId,
 userId
);

CREATE INDEX fkIdx_935 ON User_Progress
(
 nodeId
);








-- ************************************** User_MyCourse

CREATE TABLE IF NOT EXISTS User_MyCourse
(
 userId     uuid NOT NULL,
 addTime    timestamp NOT NULL,
 lastVisit  timestamp NOT NULL,
 isFinished boolean NOT NULL,
 courseId   uuid NOT NULL,
 CONSTRAINT PK_mycourse PRIMARY KEY ( userId, courseId ),
 CONSTRAINT FK_1063 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_3855 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_1063 ON User_MyCourse
(
 userId
);

CREATE INDEX fkIdx_3855 ON User_MyCourse
(
 courseId
);








-- ************************************** User_hideChatRoom

CREATE TABLE IF NOT EXISTS User_hideChatRoom
(
 userId     uuid NOT NULL,
 chatRoomId int NOT NULL,
 hide       boolean NOT NULL,
 CONSTRAINT PK_hidechat PRIMARY KEY ( userId, chatRoomId ),
 CONSTRAINT FK_173 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId ),
 CONSTRAINT FK_3343 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_173 ON User_hideChatRoom
(
 chatRoomId
);

CREATE INDEX fkIdx_3343 ON User_hideChatRoom
(
 userId
);








-- ************************************** User_chatColor

CREATE TABLE IF NOT EXISTS User_chatColor
(
 chatRoomId int NOT NULL,
 userId     uuid NOT NULL,
 color      varchar(50) NULL,
 CONSTRAINT PK_chatcolor PRIMARY KEY ( chatRoomId, userId ),
 CONSTRAINT FK_143 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId ),
 CONSTRAINT FK_3355 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_143 ON User_chatColor
(
 chatRoomId
);

CREATE INDEX fkIdx_3355 ON User_chatColor
(
 userId
);








-- ************************************** support_form

CREATE TABLE IF NOT EXISTS support_form
(
 ticketId     int NOT NULL,
 userId       uuid NOT NULL,
 requestTime  timestamp NOT NULL,
 title        varchar(50) NOT NULL,
 priorityType int NOT NULL,
 description  text NOT NULL,
 subProblemId int NOT NULL,
 CONSTRAINT PK_support_form PRIMARY KEY ( ticketId ),
 CONSTRAINT FK_2324 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_3675 FOREIGN KEY ( subProblemId ) REFERENCES subProblemTypes ( subProblemId )
);

CREATE INDEX fkIdx_2324 ON support_form
(
 userId
);

CREATE INDEX fkIdx_3675 ON support_form
(
 subProblemId
);








-- ************************************** Student_Appointment_Members

CREATE TABLE IF NOT EXISTS Student_Appointment_Members
(
 sAppointmentId int NOT NULL,
 userId         uuid NOT NULL,
 CONSTRAINT PK_instructor_appointment_members PRIMARY KEY ( sAppointmentId, userId ),
 CONSTRAINT FK_4056 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_58 FOREIGN KEY ( sAppointmentId ) REFERENCES Student_Appointments ( sAppointmentId )
);

CREATE INDEX fkIdx_4056 ON Student_Appointment_Members
(
 userId
);

CREATE INDEX fkIdx_58 ON Student_Appointment_Members
(
 sAppointmentId
);








-- ************************************** Student_Appointment_Instructor

CREATE TABLE IF NOT EXISTS Student_Appointment_Instructor
(
 sAppointmentId int NOT NULL,
 status         boolean NOT NULL,
 requestTime    timestamp NOT NULL,
 approveTime    timestamp NOT NULL,
 price          decimal(18,2) NOT NULL,
 InstructorId   uuid NOT NULL,
 CONSTRAINT PK_student_appointment_instructor PRIMARY KEY ( sAppointmentId, InstructorId ),
 CONSTRAINT FK_4068 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId ),
 CONSTRAINT FK_61 FOREIGN KEY ( sAppointmentId ) REFERENCES Student_Appointments ( sAppointmentId )
);

CREATE INDEX fkIdx_4068 ON Student_Appointment_Instructor
(
 InstructorId
);

CREATE INDEX fkIdx_61 ON Student_Appointment_Instructor
(
 sAppointmentId
);








-- ************************************** Review_course

CREATE TABLE IF NOT EXISTS Review_course
(
 userId     uuid NOT NULL,
 courseId   uuid NOT NULL,
 reviewRate decimal(2,1) NOT NULL,
 comment    char(5000) NOT NULL,
 date       date NOT NULL,
 CONSTRAINT PK_review PRIMARY KEY ( userId, courseId ),
 CONSTRAINT FK_2945 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_3621 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_2945 ON Review_course
(
 userId
);

CREATE INDEX fkIdx_3621 ON Review_course
(
 courseId
);








-- ************************************** questionTestCases

CREATE TABLE IF NOT EXISTS questionTestCases
(
 questionId int NOT NULL,
 fileNo     int NOT NULL,
 filePath   path NOT NULL,
 CONSTRAINT PK_testcases PRIMARY KEY ( questionId, fileNo ),
 CONSTRAINT FK_32 FOREIGN KEY ( questionId ) REFERENCES questions ( id )
);

CREATE INDEX fkIdx_32 ON questionTestCases
(
 questionId
);








-- ************************************** questionTag

CREATE TABLE IF NOT EXISTS questionTag
(
 questionId int NOT NULL,
 tagNo      int NOT NULL,
 tagName    varchar(100) NOT NULL,
 CONSTRAINT PK_tag PRIMARY KEY ( questionId, tagNo ),
 CONSTRAINT FK_47 FOREIGN KEY ( questionId ) REFERENCES questions ( id )
);

CREATE INDEX fkIdx_47 ON questionTag
(
 questionId
);








-- ************************************** questionSample

CREATE TABLE IF NOT EXISTS questionSample
(
 questionId int NOT NULL,
 sampleNo   int NOT NULL,
 intput     text NOT NULL,
 output     text NOT NULL,
 CONSTRAINT PK_questionsample PRIMARY KEY ( questionId, sampleNo ),
 CONSTRAINT FK_39 FOREIGN KEY ( questionId ) REFERENCES questions ( id )
);

CREATE INDEX fkIdx_39 ON questionSample
(
 questionId
);








-- ************************************** question_attempt

CREATE TABLE IF NOT EXISTS question_attempt
(
 attemptId  int NOT NULL,
 userId     uuid NOT NULL,
 questionId int NOT NULL,
 attempNo   int NOT NULL GENERATED BY DEFAULT AS IDENTITY (
 start 0
 ),
 score      int NOT NULL,
 when       time NOT NULL,
 status     varchar(50) NOT NULL,
 time       int NOT NULL,
 memory     int NOT NULL,
 language   varchar(50) NOT NULL,
 code       text NOT NULL,
 CONSTRAINT PK_table_3 PRIMARY KEY ( attemptId ),
 CONSTRAINT FK_133 FOREIGN KEY ( questionId ) REFERENCES questions ( id ),
 CONSTRAINT FK_3228 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_133 ON question_attempt
(
 questionId
);

CREATE INDEX fkIdx_3228 ON question_attempt
(
 userId
);








-- ************************************** Package_courses

CREATE TABLE IF NOT EXISTS Package_courses
(
 packageId uuid NOT NULL,
 courseId  uuid NOT NULL,
 CONSTRAINT PK_package_courses PRIMARY KEY ( packageId, courseId ),
 CONSTRAINT FK_3618 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_466 FOREIGN KEY ( packageId ) REFERENCES Package ( packageId )
);

CREATE INDEX fkIdx_3618 ON Package_courses
(
 courseId
);

CREATE INDEX fkIdx_466 ON Package_courses
(
 packageId
);








-- ************************************** Node_Question

CREATE TABLE IF NOT EXISTS Node_Question
(
 nodeId       int NOT NULL,
 questionNo   int NOT NULL,
 questionName varchar(50) NOT NULL,
 description  varchar(500) NOT NULL,
 CONSTRAINT PK_node_question PRIMARY KEY ( nodeId, questionNo ),
 CONSTRAINT FK_3729 FOREIGN KEY ( nodeId ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_3729 ON Node_Question
(
 nodeId
);








-- ************************************** Kahoot_roomHistory

CREATE TABLE IF NOT EXISTS Kahoot_roomHistory
(
 SessionId int NOT NULL,
 roomId    int NOT NULL,
 PIN       int NOT NULL,
 CONSTRAINT PK_roomsession PRIMARY KEY ( SessionId ),
 CONSTRAINT FK_111 FOREIGN KEY ( roomId ) REFERENCES Kahoot_room ( id )
);

CREATE INDEX fkIdx_111 ON Kahoot_roomHistory
(
 roomId
);








-- ************************************** Kahoot_question

CREATE TABLE IF NOT EXISTS Kahoot_question
(
 questionId  int NOT NULL,
 roomId      int NOT NULL,
 QuestionNo  int NOT NULL,
 text        varchar(255) NOT NULL,
 difficulty  char(10) NOT NULL,
 topicId     int NOT NULL,
 time        int NOT NULL,
 point       int NOT NULL,
 picturePath path NOT NULL,
 CONSTRAINT PK_question PRIMARY KEY ( questionId ),
 CONSTRAINT FK_128 FOREIGN KEY ( roomId ) REFERENCES Kahoot_room ( id ),
 CONSTRAINT FK_59 FOREIGN KEY ( topicId ) REFERENCES Kahoot_Question_Topic ( id )
);

CREATE INDEX fkIdx_128 ON Kahoot_question
(
 roomId
);

CREATE INDEX fkIdx_59 ON Kahoot_question
(
 topicId
);








-- ************************************** Instructor_Appointment_Members

CREATE TABLE IF NOT EXISTS Instructor_Appointment_Members
(
 iAppointmentId int NOT NULL,
 userId         uuid NOT NULL,
 score          int NULL,
 description    varchar(255) NULL,
 CONSTRAINT PK_instructor_appointment_members PRIMARY KEY ( iAppointmentId, userId ),
 CONSTRAINT FK_4062 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_55 FOREIGN KEY ( iAppointmentId ) REFERENCES Instructor_Appointments ( iAppointmentId )
);

CREATE INDEX fkIdx_4062 ON Instructor_Appointment_Members
(
 userId
);

CREATE INDEX fkIdx_55 ON Instructor_Appointment_Members
(
 iAppointmentId
);








-- ************************************** help_forum

CREATE TABLE IF NOT EXISTS help_forum
(
 helpForumId  int NOT NULL,
 subProblemId int NOT NULL,
 content      text NOT NULL,
 adminId      uuid NOT NULL,
 CONSTRAINT PK_help_forum PRIMARY KEY ( helpForumId ),
 CONSTRAINT FK_3852 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId ),
 CONSTRAINT FK_455 FOREIGN KEY ( subProblemId ) REFERENCES subProblemTypes ( subProblemId )
);

CREATE INDEX fkIdx_3852 ON help_forum
(
 adminId
);

CREATE INDEX fkIdx_455 ON help_forum
(
 subProblemId
);








-- ************************************** Global_Event_color

CREATE TABLE IF NOT EXISTS Global_Event_color
(
 userId  uuid NOT NULL,
 EventId int NOT NULL,
 tagId   int NOT NULL,
 CONSTRAINT PK_event_color PRIMARY KEY ( userId, EventId ),
 CONSTRAINT FK_1528 FOREIGN KEY ( tagId ) REFERENCES TagColor ( tagId ),
 CONSTRAINT FK_1531 FOREIGN KEY ( EventId ) REFERENCES Global_Event ( EventId ),
 CONSTRAINT FK_2642 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_1528 ON Global_Event_color
(
 tagId
);

CREATE INDEX fkIdx_1531 ON Global_Event_color
(
 EventId
);

CREATE INDEX fkIdx_2642 ON Global_Event_color
(
 userId
);








-- ************************************** Forum_Form

CREATE TABLE IF NOT EXISTS Forum_Form
(
 forumId        int NOT NULL,
 userId         uuid NOT NULL,
 postTime       timestamp NOT NULL,
 titleThread    varchar(100) NOT NULL,
 typeId         int NOT NULL,
 subCategoryIId int NOT NULL,
 content        text NOT NULL,
 CONSTRAINT PK_forum PRIMARY KEY ( forumId ),
 CONSTRAINT FK_104 FOREIGN KEY ( subCategoryIId ) REFERENCES Sub_category ( subCategoryIId ),
 CONSTRAINT FK_2267 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_69 FOREIGN KEY ( typeId ) REFERENCES Forum_Type ( typeId )
);

CREATE INDEX fkIdx_104 ON Forum_Form
(
 subCategoryIId
);

CREATE INDEX fkIdx_2267 ON Forum_Form
(
 userId
);

CREATE INDEX fkIdx_69 ON Forum_Form
(
 typeId
);








-- ************************************** Course_Section

CREATE TABLE IF NOT EXISTS Course_Section
(
 courseId    uuid NOT NULL,
 sectionNo   int NOT NULL,
 sectionName varchar(50) NOT NULL,
 CONSTRAINT PK_section PRIMARY KEY ( courseId, sectionNo ),
 CONSTRAINT FK_1317 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId )
);

CREATE INDEX fkIdx_1317 ON Course_Section
(
 courseId
);








-- ************************************** Course_Log

CREATE TABLE IF NOT EXISTS Course_Log
(
 courseId     uuid NOT NULL,
 logTime      timestamp NOT NULL,
 status       varchar(50) NOT NULL,
 InstructorId uuid NULL,
 adminId      uuid NULL,
 type         varchar(10) NOT NULL,
 CONSTRAINT PK_course_log PRIMARY KEY ( courseId, logTime ),
 CONSTRAINT FK_3489 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_3495 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId ),
 CONSTRAINT FK_3849 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3489 ON Course_Log
(
 courseId
);

CREATE INDEX fkIdx_3495 ON Course_Log
(
 InstructorId
);

CREATE INDEX fkIdx_3849 ON Course_Log
(
 adminId
);








-- ************************************** Course_Event

CREATE TABLE IF NOT EXISTS Course_Event
(
 EventId      int NOT NULL,
 courseId     uuid NOT NULL,
 InstructorId uuid NOT NULL,
 title        varchar(50) NOT NULL,
 startDate    date NOT NULL,
 endDate      date NOT NULL,
 startTime    time NOT NULL,
 endTime      time NOT NULL,
 detail       varchar(50) NOT NULL,
 place        varchar(50) NOT NULL,
 duration     varchar(50) NOT NULL,
 lastUpdate   timestamp NOT NULL,
 typeId       int NOT NULL,
 adminId      uuid NOT NULL,
 CONSTRAINT PK_event PRIMARY KEY ( EventId ),
 CONSTRAINT FK_2635 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_3687 FOREIGN KEY ( typeId ) REFERENCES Category_Event ( typeId ),
 CONSTRAINT FK_3692 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId ),
 CONSTRAINT FK_3846 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_2635 ON Course_Event
(
 courseId
);

CREATE INDEX fkIdx_3687 ON Course_Event
(
 typeId
);

CREATE INDEX fkIdx_3692 ON Course_Event
(
 InstructorId
);

CREATE INDEX fkIdx_3846 ON Course_Event
(
 adminId
);








-- ************************************** Course_Collaborator

CREATE TABLE IF NOT EXISTS Course_Collaborator
(
 courseId     uuid NOT NULL,
 InstructorId uuid NOT NULL,
 CONSTRAINT PK_teacher PRIMARY KEY ( courseId, InstructorId ),
 CONSTRAINT FK_1348 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_2085 FOREIGN KEY ( InstructorId ) REFERENCES Instructor ( InstructorId )
);

CREATE INDEX fkIdx_1348 ON Course_Collaborator
(
 courseId
);

CREATE INDEX fkIdx_2085 ON Course_Collaborator
(
 InstructorId
);








-- ************************************** Course_categories

CREATE TABLE IF NOT EXISTS Course_categories
(
 courseId uuid NOT NULL,
 cataId   int NOT NULL,
 CONSTRAINT PK_course_catagories PRIMARY KEY ( courseId, cataId ),
 CONSTRAINT FK_3501 FOREIGN KEY ( courseId ) REFERENCES Course ( courseId ),
 CONSTRAINT FK_3505 FOREIGN KEY ( cataId ) REFERENCES Categories ( cataId )
);

CREATE INDEX fkIdx_3501 ON Course_categories
(
 courseId
);

CREATE INDEX fkIdx_3505 ON Course_categories
(
 cataId
);








-- ************************************** contest_question

CREATE TABLE IF NOT EXISTS contest_question
(
 id             int NOT NULL GENERATED ALWAYS AS IDENTITY (
 start 0
 ),
 examQuestionNo int NOT NULL,
 exam_id        int NOT NULL,
 questionId     int NOT NULL,
 CONSTRAINT PK_questions PRIMARY KEY ( id ),
 CONSTRAINT FK_96 FOREIGN KEY ( exam_id ) REFERENCES contest ( examNo ),
 CONSTRAINT FK_99 FOREIGN KEY ( questionId ) REFERENCES questions ( id )
);

CREATE INDEX fkIdx_96 ON contest_question
(
 exam_id
);

CREATE INDEX fkIdx_99 ON contest_question
(
 questionId
);








-- ************************************** contest_announcements

CREATE TABLE IF NOT EXISTS contest_announcements
(
 examAnnNo   int NOT NULL,
 title       varchar(50) NOT NULL,
 description text NOT NULL,
 examId      int NOT NULL,
 adminId     uuid NOT NULL,
 isVisible   boolean NOT NULL,
 CONSTRAINT PK_announcements PRIMARY KEY ( examAnnNo ),
 CONSTRAINT FK_148 FOREIGN KEY ( examId ) REFERENCES contest ( examNo ),
 CONSTRAINT FK_3830 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_148 ON contest_announcements
(
 examId
);

CREATE INDEX fkIdx_3830 ON contest_announcements
(
 adminId
);








-- ************************************** Coin_Transaction

CREATE TABLE IF NOT EXISTS Coin_Transaction
(
 userId                  uuid NOT NULL,
 Date                    timestamp NOT NULL,
 AmountOfCoinTransaction int NOT NULL,
 CONSTRAINT PK_coin_usage PRIMARY KEY ( userId, Date ),
 CONSTRAINT FK_124 FOREIGN KEY ( userId ) REFERENCES Coin_Owner ( userId )
);

CREATE INDEX fkIdx_124 ON Coin_Transaction
(
 userId
);








-- ************************************** Chat_systemMessage

CREATE TABLE IF NOT EXISTS Chat_systemMessage
(
 chatRoomId int NOT NULL,
 sendTime   timestamp NOT NULL,
 message    varchar(250) NOT NULL,
 CONSTRAINT PK_systemmessage PRIMARY KEY ( chatRoomId, sendTime ),
 CONSTRAINT FK_100 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId )
);

CREATE INDEX fkIdx_100 ON Chat_systemMessage
(
 chatRoomId
);








-- ************************************** Chat_roomMember

CREATE TABLE IF NOT EXISTS Chat_roomMember
(
 chatRoomId int NOT NULL,
 userId     uuid NOT NULL,
 nickname   varchar(255) NULL,
 CONSTRAINT PK_roommember PRIMARY KEY ( chatRoomId, userId ),
 CONSTRAINT FK_104 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId ),
 CONSTRAINT FK_3346 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_104 ON Chat_roomMember
(
 chatRoomId
);

CREATE INDEX fkIdx_3346 ON Chat_roomMember
(
 userId
);








-- ************************************** Chat_Message

CREATE TABLE IF NOT EXISTS Chat_Message
(
 messageId  int NOT NULL,
 message    text NULL,
 sendTime   timestamp NOT NULL,
 chatRoomId int NOT NULL,
 userId     uuid NOT NULL,
 CONSTRAINT PK_message PRIMARY KEY ( messageId ),
 CONSTRAINT FK_3337 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_58 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId )
);

CREATE INDEX fkIdx_3337 ON Chat_Message
(
 userId
);

CREATE INDEX fkIdx_58 ON Chat_Message
(
 chatRoomId
);








-- ************************************** Chat_invitation

CREATE TABLE IF NOT EXISTS Chat_invitation
(
 invitationId int NOT NULL,
 date         date NOT NULL,
 chatRoomId   int NOT NULL,
 Invitor_ID   uuid NOT NULL,
 CONSTRAINT PK_invitation PRIMARY KEY ( invitationId ),
 CONSTRAINT FK_3349 FOREIGN KEY ( Invitor_ID ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_80 FOREIGN KEY ( chatRoomId ) REFERENCES Chat ( chatRoomId )
);

CREATE INDEX fkIdx_3349 ON Chat_invitation
(
 Invitor_ID
);

CREATE INDEX fkIdx_80 ON Chat_invitation
(
 chatRoomId
);








-- ************************************** Ad_Payment

CREATE TABLE IF NOT EXISTS Ad_Payment
(
 adId          int NOT NULL,
 receipt       path NOT NULL,
 dateTime      timestamp NOT NULL,
 amount        numeric(12,4) NOT NULL,
 paymentStatus boolean NOT NULL,
 CONSTRAINT PK_adpayment PRIMARY KEY ( adId ),
 CONSTRAINT FK_101 FOREIGN KEY ( adId ) REFERENCES Ad ( adId )
);

CREATE INDEX fkIdx_101 ON Ad_Payment
(
 adId
);








-- ************************************** Achievement

CREATE TABLE IF NOT EXISTS Achievement
(
 achieveId      int NOT NULL,
 nodeId         int NOT NULL,
 Achieve_Detail varchar(100) NOT NULL,
 XP_Point       bigint NOT NULL,
 CONSTRAINT PK_achievement PRIMARY KEY ( achieveId ),
 CONSTRAINT FK_956 FOREIGN KEY ( nodeId ) REFERENCES Path_node ( nodeId )
);

CREATE INDEX fkIdx_956 ON Achievement
(
 nodeId
);








-- ************************************** User_hideMessage

CREATE TABLE IF NOT EXISTS User_hideMessage
(
 userId    uuid NOT NULL,
 messageId int NOT NULL,
 hide      boolean NOT NULL,
 CONSTRAINT PK_hidemessage PRIMARY KEY ( userId, messageId ),
 CONSTRAINT FK_178 FOREIGN KEY ( messageId ) REFERENCES Chat_Message ( messageId ),
 CONSTRAINT FK_3352 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_178 ON User_hideMessage
(
 messageId
);

CREATE INDEX fkIdx_3352 ON User_hideMessage
(
 userId
);








-- ************************************** User_Achievement

CREATE TABLE IF NOT EXISTS User_Achievement
(
 achieveId int NOT NULL,
 userId    uuid NOT NULL,
 Completed boolean NOT NULL,
 CONSTRAINT PK_user_achievement PRIMARY KEY ( achieveId, userId ),
 CONSTRAINT FK_3064 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_90 FOREIGN KEY ( achieveId ) REFERENCES Achievement ( achieveId )
);

CREATE INDEX fkIdx_3064 ON User_Achievement
(
 userId
);

CREATE INDEX fkIdx_90 ON User_Achievement
(
 achieveId
);








-- ************************************** Transaction_ad

CREATE TABLE IF NOT EXISTS Transaction_ad
(
 transactionId uuid NOT NULL,
 adId          int NOT NULL,
 CONSTRAINT PK_transaction_ad PRIMARY KEY ( transactionId ),
 CONSTRAINT FK_3781 FOREIGN KEY ( transactionId ) REFERENCES Financial_Transaction ( transactionId ),
 CONSTRAINT FK_3793 FOREIGN KEY ( adId ) REFERENCES Ad_Payment ( adId )
);

CREATE INDEX fkIdx_3781 ON Transaction_ad
(
 transactionId
);

CREATE INDEX fkIdx_3793 ON Transaction_ad
(
 adId
);








-- ************************************** Support_Answer_form

CREATE TABLE IF NOT EXISTS Support_Answer_form
(
 ticketId    int NOT NULL,
 answerTime  timestamp NOT NULL,
 title       varchar(50) NOT NULL,
 description text NOT NULL,
 adminId     uuid NOT NULL,
 CONSTRAINT PK_answer_form PRIMARY KEY ( ticketId ),
 CONSTRAINT FK_3679 FOREIGN KEY ( ticketId ) REFERENCES support_form ( ticketId ),
 CONSTRAINT FK_3824 FOREIGN KEY ( adminId ) REFERENCES Admin_Login ( adminId )
);

CREATE INDEX fkIdx_3679 ON Support_Answer_form
(
 ticketId
);

CREATE INDEX fkIdx_3824 ON Support_Answer_form
(
 adminId
);








-- ************************************** Section_Part

CREATE TABLE IF NOT EXISTS Section_Part
(
 courseId        uuid NOT NULL,
 sectionNo       int NOT NULL,
 partNo          int NOT NULL,
 partName        varchar(50) NOT NULL,
 partDescription varchar(255) NOT NULL,
 partRole        varchar(10) NOT NULL,
 CONSTRAINT PK_part PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_1320 FOREIGN KEY ( courseId, sectionNo ) REFERENCES Course_Section ( courseId, sectionNo )
);

CREATE INDEX fkIdx_1320 ON Section_Part
(
 courseId,
 sectionNo
);








-- ************************************** question_attempt_testcase

CREATE TABLE IF NOT EXISTS question_attempt_testcase
(
 attemptId  int NOT NULL,
 testcaseNo int NOT NULL,
 status     varchar(50) NOT NULL,
 memory     int NOT NULL,
 time       int NOT NULL,
 score      int NOT NULL,
 CONSTRAINT PK_anwer PRIMARY KEY ( attemptId, testcaseNo ),
 CONSTRAINT FK_326 FOREIGN KEY ( attemptId ) REFERENCES question_attempt ( attemptId )
);

CREATE INDEX fkIdx_326 ON question_attempt_testcase
(
 attemptId
);








-- ************************************** Node_Question_choice

CREATE TABLE IF NOT EXISTS Node_Question_choice
(
 nodeId     int NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 answer     varchar(255) NOT NULL,
 CONSTRAINT PK_node_question_answer PRIMARY KEY ( nodeId, questionNo, choiceNo ),
 CONSTRAINT FK_3737 FOREIGN KEY ( nodeId, questionNo ) REFERENCES Node_Question ( nodeId, questionNo )
);

CREATE INDEX fkIdx_3737 ON Node_Question_choice
(
 nodeId,
 questionNo
);








-- ************************************** Kahoot_roomHistoryPlayer

CREATE TABLE IF NOT EXISTS Kahoot_roomHistoryPlayer
(
 SessionId int NOT NULL,
 userId    uuid NOT NULL,
 rank      int NOT NULL,
 CONSTRAINT PK_roomsessionplayer PRIMARY KEY ( SessionId, userId ),
 CONSTRAINT FK_118 FOREIGN KEY ( SessionId ) REFERENCES Kahoot_roomHistory ( SessionId ),
 CONSTRAINT FK_123 FOREIGN KEY ( userId ) REFERENCES Kahoot_player ( userId )
);

CREATE INDEX fkIdx_118 ON Kahoot_roomHistoryPlayer
(
 SessionId
);

CREATE INDEX fkIdx_123 ON Kahoot_roomHistoryPlayer
(
 userId
);








-- ************************************** Kahoot_answer

CREATE TABLE IF NOT EXISTS Kahoot_answer
(
 questionId int NOT NULL,
 answerNo   int NOT NULL,
 text       varchar(50) NOT NULL,
 isCorrect  boolean NOT NULL,
 CONSTRAINT PK_answer PRIMARY KEY ( questionId, answerNo ),
 CONSTRAINT FK_132 FOREIGN KEY ( questionId ) REFERENCES Kahoot_question ( questionId )
);

CREATE INDEX fkIdx_132 ON Kahoot_answer
(
 questionId
);








-- ************************************** Invite_invitees

CREATE TABLE IF NOT EXISTS Invite_invitees
(
 invitationId int NOT NULL,
 InviteeID    uuid NOT NULL,
 CONSTRAINT PK_invitee PRIMARY KEY ( invitationId, InviteeID ),
 CONSTRAINT FK_3358 FOREIGN KEY ( InviteeID ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_89 FOREIGN KEY ( invitationId ) REFERENCES Chat_invitation ( invitationId )
);

CREATE INDEX fkIdx_3358 ON Invite_invitees
(
 InviteeID
);

CREATE INDEX fkIdx_89 ON Invite_invitees
(
 invitationId
);








-- ************************************** Forum_Answer_from

CREATE TABLE IF NOT EXISTS Forum_Answer_from
(
 forumId  int NOT NULL,
 answerNo int NOT NULL,
 userId   uuid NOT NULL,
 ansTime  timestamp NOT NULL,
 answer   text NOT NULL,
 CONSTRAINT PK_answer_from_t PRIMARY KEY ( forumId, answerNo ),
 CONSTRAINT FK_2270 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_445 FOREIGN KEY ( forumId ) REFERENCES Forum_Form ( forumId )
);

CREATE INDEX fkIdx_2270 ON Forum_Answer_from
(
 userId
);

CREATE INDEX fkIdx_445 ON Forum_Answer_from
(
 forumId
);








-- ************************************** Edit_history

CREATE TABLE IF NOT EXISTS Edit_history
(
 forumId    int NOT NULL,
 editTime   timestamp NOT NULL,
 oldContent text NOT NULL,
 CONSTRAINT PK_edit_history PRIMARY KEY ( forumId, editTime ),
 CONSTRAINT FK_113 FOREIGN KEY ( forumId ) REFERENCES Forum_Form ( forumId )
);

CREATE INDEX fkIdx_113 ON Edit_history
(
 forumId
);








-- ************************************** Course_Event_color

CREATE TABLE IF NOT EXISTS Course_Event_color
(
 userId  uuid NOT NULL,
 EventId int NOT NULL,
 tagId   int NOT NULL,
 CONSTRAINT PK_event_color PRIMARY KEY ( userId, EventId ),
 CONSTRAINT FK_1487 FOREIGN KEY ( EventId ) REFERENCES Course_Event ( EventId ),
 CONSTRAINT FK_1490 FOREIGN KEY ( tagId ) REFERENCES TagColor ( tagId ),
 CONSTRAINT FK_2639 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_1487 ON Course_Event_color
(
 EventId
);

CREATE INDEX fkIdx_1490 ON Course_Event_color
(
 tagId
);

CREATE INDEX fkIdx_2639 ON Course_Event_color
(
 userId
);








-- ************************************** contest_attempt

CREATE TABLE IF NOT EXISTS contest_attempt
(
 userId        uuid NOT NULL,
 QuestionID    int NOT NULL,
 examAttemptNo int NOT NULL,
 score         int NOT NULL,
 timeTaken     time NOT NULL,
 CONSTRAINT PK_table_3 PRIMARY KEY ( userId, QuestionID, examAttemptNo ),
 CONSTRAINT FK_3231 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId ),
 CONSTRAINT FK_337 FOREIGN KEY ( QuestionID ) REFERENCES contest_question ( id )
);

CREATE INDEX fkIdx_3231 ON contest_attempt
(
 userId
);

CREATE INDEX fkIdx_337 ON contest_attempt
(
 QuestionID
);








-- ************************************** Chat_Message_Readtime

CREATE TABLE IF NOT EXISTS Chat_Message_Readtime
(
 messageId int NOT NULL,
 readTime  timestamp NOT NULL,
 userId    uuid NOT NULL,
 CONSTRAINT PK_chat_message_readtime PRIMARY KEY ( messageId, userId ),
 CONSTRAINT FK_3866 FOREIGN KEY ( messageId ) REFERENCES Chat_Message ( messageId ),
 CONSTRAINT FK_3870 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3866 ON Chat_Message_Readtime
(
 messageId
);

CREATE INDEX fkIdx_3870 ON Chat_Message_Readtime
(
 userId
);








-- ************************************** Achieve_Problem

CREATE TABLE IF NOT EXISTS Achieve_Problem
(
 achieveId int NOT NULL,
 graderId  int NOT NULL,
 CONSTRAINT PK_achieve_problem PRIMARY KEY ( achieveId ),
 CONSTRAINT FK_3751 FOREIGN KEY ( graderId ) REFERENCES questions ( id ),
 CONSTRAINT FK_97 FOREIGN KEY ( achieveId ) REFERENCES Achievement ( achieveId )
);

CREATE INDEX fkIdx_3751 ON Achieve_Problem
(
 graderId
);

CREATE INDEX fkIdx_97 ON Achieve_Problem
(
 achieveId
);








-- ************************************** User_Interact_Part

CREATE TABLE IF NOT EXISTS User_Interact_Part
(
 userId      uuid NOT NULL,
 courseId    uuid NOT NULL,
 sectionNo   int NOT NULL,
 partNo      int NOT NULL,
 isCompleted boolean NOT NULL,
 score       int NOT NULL,
 CONSTRAINT PK_user_interact_path PRIMARY KEY ( userId, courseId, sectionNo, partNo ),
 CONSTRAINT FK_3600 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3608 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId )
);

CREATE INDEX fkIdx_3600 ON User_Interact_Part
(
 courseId,
 sectionNo,
 partNo
);

CREATE INDEX fkIdx_3608 ON User_Interact_Part
(
 userId
);








-- ************************************** Node_Question_Correct_Answer

CREATE TABLE IF NOT EXISTS Node_Question_Correct_Answer
(
 nodeId     int NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 CONSTRAINT PK_node_question_correct_answer PRIMARY KEY ( nodeId, questionNo, choiceNo ),
 CONSTRAINT FK_3744 FOREIGN KEY ( nodeId, questionNo, choiceNo ) REFERENCES Node_Question_choice ( nodeId, questionNo, choiceNo )
);

CREATE INDEX fkIdx_3744 ON Node_Question_Correct_Answer
(
 nodeId,
 questionNo,
 choiceNo
);








-- ************************************** Kahoot_roomHistory_PlayerAnswer

CREATE TABLE IF NOT EXISTS Kahoot_roomHistory_PlayerAnswer
(
 SessionId  int NOT NULL,
 userId     uuid NOT NULL,
 questionId int NOT NULL,
 answerNo   int NOT NULL,
 CONSTRAINT PK_roomsessionanswerplayer PRIMARY KEY ( SessionId, userId, questionId, answerNo ),
 CONSTRAINT FK_137 FOREIGN KEY ( SessionId, userId ) REFERENCES Kahoot_roomHistoryPlayer ( SessionId, userId ),
 CONSTRAINT FK_141 FOREIGN KEY ( questionId, answerNo ) REFERENCES Kahoot_answer ( questionId, answerNo )
);

CREATE INDEX fkIdx_137 ON Kahoot_roomHistory_PlayerAnswer
(
 SessionId,
 userId
);

CREATE INDEX fkIdx_141 ON Kahoot_roomHistory_PlayerAnswer
(
 answerNo,
 questionId
);








-- ************************************** Course_Section_Part_Video

CREATE TABLE IF NOT EXISTS Course_Section_Part_Video
(
 courseId  uuid NOT NULL,
 videoPath path NOT NULL,
 sectionNo int NOT NULL,
 partNo    int NOT NULL,
 CONSTRAINT PK_course_section_part_video PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3538 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3538 ON Course_Section_Part_Video
(
 courseId,
 sectionNo,
 partNo
);








-- ************************************** Course_Section_Part_Material

CREATE TABLE IF NOT EXISTS Course_Section_Part_Material
(
 courseId     uuid NOT NULL,
 materialPath path NOT NULL,
 sectionNo    int NOT NULL,
 partNo       int NOT NULL,
 CONSTRAINT PK_course_section_part_material PRIMARY KEY ( courseId, sectionNo, partNo ),
 CONSTRAINT FK_3544 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3544 ON Course_Section_Part_Material
(
 courseId,
 sectionNo,
 partNo
);








-- ************************************** Course_Quiz

CREATE TABLE IF NOT EXISTS Course_Quiz
(
 courseId  uuid NOT NULL,
 quizId    uuid NOT NULL,
 sectionNo int NOT NULL,
 partNo    int NOT NULL,
 CONSTRAINT PK_quiz PRIMARY KEY ( quizId ),
 CONSTRAINT ind_3565 UNIQUE ( courseId, partNo, sectionNo ),
 CONSTRAINT FK_3528 FOREIGN KEY ( courseId, sectionNo, partNo ) REFERENCES Section_Part ( courseId, sectionNo, partNo )
);

CREATE INDEX fkIdx_3528 ON Course_Quiz
(
 courseId,
 sectionNo,
 partNo
);








-- ************************************** Quiz_Question

CREATE TABLE IF NOT EXISTS Quiz_Question
(
 quizId       uuid NOT NULL,
 questionNo   int NOT NULL,
 questionName varchar(255) NOT NULL,
 questionType varchar(15) NOT NULL,
 score        int NOT NULL,
 CONSTRAINT PK_quiz_question PRIMARY KEY ( quizId, questionNo ),
 CONSTRAINT FK_3570 FOREIGN KEY ( quizId ) REFERENCES Course_Quiz ( quizId )
);

CREATE INDEX fkIdx_3570 ON Quiz_Question
(
 quizId
);








-- ************************************** Quiz_Question_Choice

CREATE TABLE IF NOT EXISTS Quiz_Question_Choice
(
 quizId     uuid NOT NULL,
 choiceName varchar(255) NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 CONSTRAINT PK_quiz_question_choice PRIMARY KEY ( quizId, questionNo, choiceNo ),
 CONSTRAINT FK_3576 FOREIGN KEY ( quizId, questionNo ) REFERENCES Quiz_Question ( quizId, questionNo )
);

CREATE INDEX fkIdx_3576 ON Quiz_Question_Choice
(
 quizId,
 questionNo
);








-- ************************************** Quiz_Question_Answer

CREATE TABLE IF NOT EXISTS Quiz_Question_Answer
(
 quizId        uuid NOT NULL,
 correctAnswer varchar(255) NOT NULL,
 questionNo    int NOT NULL,
 CONSTRAINT PK_quiz_question_answer PRIMARY KEY ( quizId, questionNo ),
 CONSTRAINT FK_3592 FOREIGN KEY ( quizId, questionNo ) REFERENCES Quiz_Question ( quizId, questionNo )
);

CREATE INDEX fkIdx_3592 ON Quiz_Question_Answer
(
 quizId,
 questionNo
);








-- ************************************** Quiz_Correct_Choice

CREATE TABLE IF NOT EXISTS Quiz_Correct_Choice
(
 quizId     uuid NOT NULL,
 questionNo int NOT NULL,
 choiceNo   int NOT NULL,
 CONSTRAINT PK_quiz_correct_choice PRIMARY KEY ( quizId, questionNo, choiceNo ),
 CONSTRAINT FK_3584 FOREIGN KEY ( quizId, questionNo, choiceNo ) REFERENCES Quiz_Question_Choice ( quizId, questionNo, choiceNo )
);

CREATE INDEX fkIdx_3584 ON Quiz_Correct_Choice
(
 quizId,
 questionNo,
 choiceNo
);


`;

exports.createG00Table = async () => {
  try{
    await createDatabase;
  } catch (err) {
    console.error(err.stack.red);
  }

}

const createDatabase = async () => {
    try {
      const job = await pool.query(database);
      console.log('Create database Successfully');
    } catch (err) {
      console.error(err.stack.red);
    }
};