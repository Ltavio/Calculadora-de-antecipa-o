import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    height: 75vh;
    width: 60vw;

    /* background-color: black; */
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    .formm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 60%;

        background-color: #ffffff;
        border-radius: 10px 0px 0px 10px;

        h1 {
            color: #757575;
        }
    }

    .resultReq {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 40%;

        background-color: #e4e4ff;
        border-radius: 0px 10px 10px 0px;

        h2 {
            color: #5c51ff;
        }

        .separation {
            height: 3px;
            width: 80%;
            margin-top: 12px;
            
            background-color: #cecefb;
        }

        span {
            display: flex;
            justify-content: space-between;

            width: 70%;
            padding: 25px 0px;

            font-size: 18px;
            font-style: italic;
            color: #5c51ff;

            p {
                font-weight: bold;
            }
        }
    }

`