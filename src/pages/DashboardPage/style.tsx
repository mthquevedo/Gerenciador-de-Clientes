import styled from "styled-components";

export const Dashboard = styled.div`
   background: linear-gradient(180deg, #DFE6F5 0%, #aebcdf 100%);
   min-width: 100vw;
   min-height: 100vh;
`;

export const FormDiv = styled.div`
      display: flex;
      flex-direction: row;
      gap: 1em;
      align-items: center;
      background-color: #39424b;
      padding-left: 0.5em;
      width: 94vw;
      height: 4em;
      margin-top: 2em;
      margin-left: 3vw;
      margin-right: 3vw;
      margin-bottom: 2em;
      border-radius: 5px;
      font-size: 0.9em;
      box-sizing: border-box;

      input{
            margin: 0em 1.5em;
      }

      label{
            color:#ffffff;
      }

      select {
            margin: 0em 1.2em;
      }

      button {
            color:#ffffff;
            padding: 7px 12px;
            border-radius: 5px;
            background-color: #6759C0;
            cursor: pointer;

            &:hover{
                  background-color: #7566d1;  
            }
      }
`;


export const ClientsContainer = styled.div`
   background-color: #c9c9c98f;
   width: 94vw;
   height: 45em;
   padding: 2em;
   margin-left: 3vw;
   margin-right: 3vw;
   border-radius: 5px;
   font-size: 0.9em;
   box-sizing: border-box;

   table{
      width:100%;
      text-align: left;
      vertical-align: center;
   }

   th {
      background-color:#eeeeee99;
      border-collapse: collapse;
      padding: 10px 30px 15px 15px;
      font-weight:700;
      vertical-align: middle;

      span{
            color:#eeeeee99;
      }
   }

   td {
      padding: 10px 30px 10px 15px;
      background-color: #ffffff;
      vertical-align: middle;
      border-bottom:1px solid #dadada99;
   }

   img{
      width:50px;
      height: 50px;
      border-radius:50%;
   }  

   button {
      font-weight:600;
      display:flex;
      align-items:center;
      gap: 5px;
      font-size: 11px;
      border: 2px solid#0F1219;
      padding: 4px;
      border-radius: 5px;

      &:hover{
            cursor:pointer;
            color:#ffffff;
            background-color: #be4362;  
      }
   }
`;