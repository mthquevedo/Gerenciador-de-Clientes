import styled from "styled-components";

export const Dashboard = styled.div`
   background-color: #DEE3E9;
   min-width: 100vw;
   min-height: 100vh;
`;

export const FormDiv = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #B0B8C0;
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