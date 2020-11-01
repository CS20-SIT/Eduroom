/*

Changelog

- Add following constraints:
    section_part > CHECK ( partRole in ('Video', 'Material','Quiz')
    course_log > CHECK ( status in ('Draft', 'In_review', 'Approved', 'Rejected')
    promotioncode > CHECK ( codeType in ('Public', 'Private')
    support_form > CHECK ( priorityType in (1,2,3)

*/


const pool = require('../database/db');

const constraint = `

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

`;

exports.applyPatchV2 = async () => {
  try{
    await tableConstraint();
    console.log('Applied Database Patch V2 Successfully');
  } catch (err) {
    console.error(err);
  }

}

const tableConstraint = async () => {
    try {
      const job = await pool.query(constraint);
      console.log('Create constraints Successfully');
    } catch (err) {
      console.error(err);
    }
};