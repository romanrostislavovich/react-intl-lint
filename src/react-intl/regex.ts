const formattedMessageRegExp: string = `(?<=<(?:FormattedMessage|FormattedHTMLMessage)[^>]*?\\bid=(?:\\{?['"]))([^'"]+)(?=['"]\\}?)`;
const formatMessageRegExp: string = `(?<=(?<![A-Za-z0-9])formatMessage\\s*\\(\\s*\\{[^}]*?\\bid\\s*:\\s*['"])([^'"]+)(?=['"])`;

export const reactIntl: string[] = [
    formattedMessageRegExp,
    formatMessageRegExp
];
