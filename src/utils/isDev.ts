const isDevelopment = process.env.NODE_ENV === 'development';
export function isDev(){
    return isDevelopment;
}