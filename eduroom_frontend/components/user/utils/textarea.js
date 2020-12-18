import React, { Fragment } from 'react';
const TextField = ({
  label,
  name,
  placeholder,
  type,
  handleChange,
  value,
  error,
  errorText,
  style,
  row
}) => {
  const createStyle = {
    padding: style?.padding ?? '0%',
    margin: style?.margin ?? '0%',
  };

  return (
    <Fragment>
      <div className="input-text">
        <span className="label-text">{label ?? ''}</span>
        <textarea
          className={error ? 'textfield error' : 'textfield'}
          name={name ?? ''}
          type={type ?? 'text'}
          placeholder={placeholder ?? ''}
          onChange={handleChange}
          style={createStyle}
          rows={row}
        >{value}</textarea>
        {error ? (
          <div className="error-text">
            {errorText ?? placeholder + ' is Required'}
          </div>
        ) : null}
      </div>
      <style jsx>
        {`
          div.input-text {
            text-align: start;
          }
          .label-text {
            font-size: 1.1em;
            font-weight: 500;
          }
          .error-text {
            font-size: 0.8em;
            color: #ed3f14;
            font-weight: 500;
            margin-bottom: 4px;
          }
          .textfield {
            background: #eff0f6;
            border-radius: 10px;
            width: 100%;
            border: none;
            font-size: 1em;
            color: #3d467f;
          }
          .textfield.error {
            border: 1px solid #ed3f14;
          }
          .textfield ::placeholder {
            color: #3d467f;
            opacity: 0.75;
          }
        `}
      </style>
    </Fragment>
  );
};
export default TextField;
