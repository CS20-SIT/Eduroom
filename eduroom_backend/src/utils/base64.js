exports.stringToBase64 = string => {
    const buffer = Buffer.from(string, 'utf-8');
    const base64 = buffer.toString('base64');
    return base64
}

exports.base64ToString = base64 => {
    const buff = Buffer.from(base64, 'base64');
    const string = buff.toString('utf-8');
    return string
}
