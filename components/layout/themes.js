const light = {
    color: "#000",
    bgColor: '#efe7fd',
    bgImage: 'linear-gradient(180deg, #efe7fd 0%, #bdccf7 60%)',
    bgDiv: '#fff',
    bgSubDiv: '#efe7fd'
}

const dark = {
    color: '#fff',
    bgColor: '#333',
    bgImage: 'linear-gradient(180deg, #333 5%, #000000 90%)',
    bgDiv: 'black',
    bgSubDiv: 'rgb(33, 36, 41)'
    
}

const themes = {
    light: light,
    dark: dark,
    
}

// /* Media query for mobile devices */

//   @media (max-width: 576px) {
//     /* Make the font size larger */
//     body {
//       font-size: 16px;
//     }
  
//     /* Reduce the margins */
//     .container {
//       margin: 0 10px;
//     }
//   }



export default themes;