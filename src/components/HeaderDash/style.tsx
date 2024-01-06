import styled from "styled-components";

export const HeaderStyle = styled.div`
   display:flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   background-color: #0F1219;
   max-width: 100vw; 
   height: 7em;
   padding: 0 4em;

   img {
      width: 13em;
      height: auto;
   }

   nav{
      color: #ffffff;
      font-size: 1em;
      font-weight:700;

      span{
         color: #A89AFF;
      }


   }

   a {
      padding: 0 1em;

      &:hover{
         color: #A89AFF;
      }
   }
`;

export const AccountData = styled.div`
   display:flex;
   flex-direction: row;
   justify-content: center;
   gap: 10px;
   font-size: 0.95em;
   color: #ffffff;

   img{
      object-fit: cover;
      width: 50px;
      height:50px;
      border: 2px solid #ffffff;
      border-radius: 50%;
   }

   button {
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
      gap: 0.3em;
      color: #beb5fc;

      &:hover{
         cursor: pointer;
         text-decoration: underline;
      }
   }
`;

export const ProfileSec = styled.div`
   display:flex;
   justify-content: center;
   flex-direction: column;
   gap: 10px;
   color: #ffffff;

   span {
      font-weight: 600;
   }
`;