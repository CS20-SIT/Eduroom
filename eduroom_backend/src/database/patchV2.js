/*

Changelog

- Add following constraints:
    section_part > CHECK ( partRole in ('Video', 'Material','Quiz')
    course_log > CHECK ( status in ('Draft', 'In_review', 'Approved', 'Rejected')
    promotioncode > CHECK ( codeType in ('Public', 'Private')
    support_form > CHECK ( priorityType in (1,2,3)
- Change following column to varchar(512) (Was path)
    Course_Section_Part_Video > videopath
    Course_Section_Part_Material > materialpath
    Course_Section_Part_Video > videopath
    Admin_Login > avatar
    Course > coursePicture
    course > sampleVideo
    chat > picture
    kahoot_question > PicturePath
    ad_payment > receipt
    user_profile > avatar
    Sticker_All > stickerImg
    Pack_Sticker > stickerImg
    instructor > avatar
    instructor > wallpaper
    instructor_degree > evidence
    instructor_expert > evidence
- Add foreign_key constraint to the following columns
    instructor > approver (admin_login)
    instructor > userId (User_profile)






*/


const pool = require('../database/db');

const checkConstraint = `

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'section_part'  and constraint_name = 'check_4087')
    then
        alter table if exists section_part
            add CONSTRAINT check_4087 CHECK ( partRole in ('Video', 'Material','Quiz') ) ;
    end if;
end $$;

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'course_log'  and constraint_name = 'check_4088')
    then
        alter table course_log
            add CONSTRAINT check_4088 CHECK ( status in ('Draft', 'In_review', 'Approved', 'Rejected') );
    end if;
end $$;

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'promotioncode'  and constraint_name = 'check_4089')
    then
        alter table promotioncode
            add CONSTRAINT check_4089 CHECK ( codeType in ('Public', 'Private') );
    end if;
end $$;

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'support_form'  and constraint_name = 'check_4090')
    then
        alter table support_form
            add CONSTRAINT check_4090 CHECK ( priorityType in (1,2,3) );
    end if;
end $$;

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'questions'  and constraint_name = 'check_4097')
    then
        alter table if exists questions
            add CONSTRAINT check_4097 CHECK ( ruleType in ('acm' , 'oi') );
    end if;
end $$;

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'contest'  and constraint_name = 'check_4098')
    then
        alter table if exists contest
            add CONSTRAINT check_4098 CHECK ( conruletype in ('acm' , 'oi'));
    end if;
end $$;

`;

const path2varchar = `

alter table if exists questiontestcases
    alter column filepath set data type varchar(512);

alter table if exists Course_Section_Part_Material
    alter column materialpath set data type varchar(512);

alter table if exists Course_Section_Part_Video
    alter column videopath set data type varchar(512);

alter table if exists Admin_Login
    alter column avatar set data type varchar(512);

alter table if exists Course
    alter column coursepicture set data type varchar(512);

alter table if exists course
    alter column samplevideo set data type varchar(512);

alter table if exists chat
    alter column picture set data type varchar(512);

alter table if exists kahoot_question
    alter column picturepath set data type varchar(512);

alter table if exists ad_payment
    alter column receipt set data type varchar(512);

alter table if exists user_profile
    alter column avatar set data type varchar(512);

alter table if exists Sticker_All
    alter column stickerimg set data type varchar(512);

alter table if exists Pack_Sticker
    alter column stickerimg set data type varchar(512);

alter table if exists instructor
    alter column avatar set data type varchar(512);

alter table if exists instructor
    alter column wallpaper set data type varchar(512);

alter table if exists instructor_degree
    alter column evidence set data type varchar(512);

alter table if exists instructor_expert
    alter column evidence set data type varchar(512);

`;

const keyConstraint = `

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'admin_login'  and constraint_name = 'fk_4091')
    then
        alter table instructor
            add  CONSTRAINT fk_4091 FOREIGN KEY ( approver ) REFERENCES Admin_Login ( adminId );
    end if;
end $$;

Do $$
begin
    if not exists (select *
        from information_schema.constraint_column_usage
        where table_name = 'user_profile'  and constraint_name = 'fk_4094')
    then
        alter table instructor
            add  CONSTRAINT fk_4094 FOREIGN KEY ( userId ) REFERENCES User_Profile ( userId );
    end if;
end $$;


`;

const identity = `

Do $$
begin
    if exists (select *
        from information_schema.columns
        where column_name = 'appointmentid'  and is_identity = 'NO')
    then
        alter table if exists instructor_appointments
            alter appointmentid add GENERATED ALWAYS AS IDENTITY (start with 1);
    end if;
end $$;

Do $$
begin
    if exists (select *
        from information_schema.columns
        where column_name = 'logno'  and is_identity = 'NO')
    then
        alter table if exists adminlog
            alter logno add GENERATED ALWAYS AS IDENTITY (start with 1);
    end if;
end $$;

Do $$
begin
    if exists (select *
        from information_schema.columns
        where column_name = 'questions.id'  and is_identity = 'NO')
    then
        alter table if exists questions
            alter id add GENERATED ALWAYS AS IDENTITY (start with 1);
    end if;
end $$;

Do $$
begin
    if exists (select *
        from information_schema.columns
        where column_name = 'coannno'  and is_identity = 'NO')
    then
        alter table if exists contest_announcements
            alter coannno add GENERATED ALWAYS AS IDENTITY (start with 1);
    end if;
end $$;

Do $$
begin
    if exists (select *
        from information_schema.columns
        where column_name = 'tagno'  and is_identity = 'NO')
    then
        alter table if exists questiontag
            alter tagno add GENERATED ALWAYS AS IDENTITY (start with 1);
    end if;
end $$;
`;

const renameColumn = `

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='contest_announcements' and column_name='examannno')
  THEN
      alter table if exists contest_announcements rename column examannno to coannno;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='contest' and column_name='examno')
  THEN
      alter table if exists contest rename column examno to conno;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='contest' and column_name='examruletype')
  THEN
      alter table if exists contest rename column examruletype to conruletype;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='contest_question' and column_name='examquestionno')
  THEN
      alter table if exists contest_question rename column examquestionno to conquestionno;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='contest_question' and column_name='exam_id')
  THEN
      alter table if exists contest_question rename column exam_id to conid;
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS(SELECT *
    FROM information_schema.columns
    WHERE table_name='contest_question' and column_name='exam_id')
  THEN
      alter table if exists contest_attempt rename column examattemptno to conattemptno;
  END IF;
END $$;

`;

const addColumn = `

alter table if exists announcements
    add column if not exists time timestamp not null;

alter table if exists contest_announcements
    add column if not exists time timestamp not null;

`

exports.applyPatchV2 = async () => {
  try{
    await tableAddColumn()
    await tableRenameColumn()
    await tableDatatype()
    await tableAddIdentity()
    await tableCheckConstraint()
    await tableKeyConstraint()
    console.log('Applied Database Patch V2 Successfully');
  } catch (err) {
    console.error(err);
  }

}

const tableCheckConstraint = async () => {
    try {
      const job = await pool.query(checkConstraint);
      console.log('Create Check constraints Successfully');
    } catch (err) {
      console.error(err);
    }
};

const tableKeyConstraint = async () => {
    try {
      const job = await pool.query(keyConstraint);
      console.log('Create key constraints Successfully');
    } catch (err) {
      console.error(err);
    }
};

const tableDatatype = async () => {
    try {
      const job = await pool.query(path2varchar);
      console.log('Change data type path to varchar(512) Successfully');
    } catch (err) {
      console.error(err);
    }
};

const tableAddColumn = async () => {
    try {
      const job = await pool.query(addColumn);
      console.log('Add two columns Successfully');
    } catch (err) {
      console.error(err);
    }
};

const tableRenameColumn = async () => {
    try {
      const job = await pool.query(renameColumn);
      console.log('Rename columns Successfully');
    } catch (err) {
      console.error(err);
    }
};

const tableAddIdentity = async () => {
    try {
      const job = await pool.query(identity);
      console.log('Add identities Successfully');
    } catch (err) {
      console.error(err);
    }
};