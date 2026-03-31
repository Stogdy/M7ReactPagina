import'./time.css';

export function Time(){
    let date = new Date();
    return(
    <h1>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h1>)
}