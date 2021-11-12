import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
    :root{
        --white: #FFFFFF;
        --gray-100:#dfe6e9;
        --gray-600: #3D3C42;
        --gray-700:#1C1C1C;
        --violet-200:#6c5ce7;
        --violet-300:#7d5fff;
        --violet-400:#483D8B;
        --green-400:#25CD89;
        --green-500:#2ecc71;
        --green-600:#27ae60;
    }    

    html{
        //15px
        @media(max-width: 1120px){
            font-size: 93.75%;
        }

        //14px
        @media(max-width:720px){
            font-size: 87.5%;
        }
    }

    body, button, input, select, textarea{
        font: 400 1rem 'Poppins', sans-serif;
    }

    body{
        background: var(--gray-700);
        color: var(--gray-100);
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    ul{
        list-style: none;
    }
`;
