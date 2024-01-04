import styled from "styled-components";

export const FullPage = styled.div`
   display: flex;
   flex-direction: row;
`;

export const LeftSec = styled.div`
   position: relative;
   width: 40vw;
   height: 100vh;
   overflow: hidden;

   h1{
      top: 75vh;
      left: 2vw;
      line-height: 1.1em;
      font-size: 2.7em;
      font-weight: 700;
      position: absolute;
      color: #ffffff;
   }

   p{
      top: 95vh;
      left: 2vw;
      font-size: 1em;
      position: absolute;
      color: #ffffff;
   }
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

export const GradientOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: linear-gradient(224deg, rgba(15, 18, 25, 0.60) 0%, rgba(68, 61, 125, 0.60) 80%, rgba(103, 89, 192, 0.60) 100%);
`;

export const RightSec = styled.div`
   width: 60vw;
   height: 100vh;
   background-color: #0F1219;

   img {
      width: 400px;
      height: auto;
      position: absolute;
      top: 3vh;
      right: 2vw;
   }

   h1{
      font-size: 1.7em;
      font-weight: 600;
      color: #ffffff;
      margin-bottom:1em;
   }

   form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height:100vh;
      gap: 0.9em
   }

   input[type="string"]{
      border-radius: 0.4375rem;
      padding: 0.5em;
      width: 25vw;
      border-bottom: 3px solid #6759C0;
      background: #DEE3E9;

      &:focus {
         border-color: #6759C0;
      }
   }

   input[type="string"],input[type="password"]{
      border-radius: 0.4375rem;
      padding: 0.5em;
      width: 25vw;
      border-bottom: 3px solid #6759C0;
      background: #DEE3E9;
   }


   label{
      text-align:left;
      color: #ffffff;
   }


   input[type="submit"]{
      border-radius: 0.4375rem;
      padding: 0.5em;
      width: 25vw;
      background: #6759C0;
   }
`;

