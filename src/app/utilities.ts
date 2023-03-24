export const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+8$/;


// export function toParseErrorsApi(response: any): string[] {
//     console.log(response);
//     const result: string[] = [];

//     if(response.error){
//         if(typeof response.error === 'string'){
//             result.push(response.error);
//         }else if(Array.isArray(response.error)){
//             response.error.forEach(error => {result.push(error.description)})
//         }else {
//             const mapErrors = response.error.errors;
//             const inputs = Object.entries(mapErrors);
//             inputs.forEach((arr: any[]) => {
//                 const field = arr[0];
//                 arr[1].forEach((errMesagge: string) => {
//                     result.push(`${field}: ${errMesagge}`)
//                 })
//             })
//         }
//     }
//     return result;

// }