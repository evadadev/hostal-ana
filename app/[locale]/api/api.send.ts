// import fetch from 'node-fetch';

// export const crearApiKey = async() => {
//     const url = 'https://api.resend.com/api-keys';
//     const token = 're_VzFGwG6D_8V6ak8KUHsYsVdZLqXK5nDsw';
//     const headers = {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//     };
//     const body = JSON.stringify({
//         name: 'Production'
//     });

//     try {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers,
//         body
//     });

//     if (response.ok) {
//         const data = await response.json();
//         console.log('API key creado:', data);
//     } else {
//         console.error('Error al crear la API key:', response.statusText);
//     }
//     } catch (error) {
//         console.error('Error al comunicarse con la API');
//     }
// }