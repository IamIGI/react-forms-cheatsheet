import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
`;

export const Title = styled.div`
    font-size: 30px;
    padding-bottom: 20px;
    display: block;
`;

export const FormWrapper = styled.div`
    border: 1px solid grey;
    width: 200px;
    padding: 40px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30%);
`;

export const Input = styled.input`
    font-size: 20px;
    padding-left: 5%;
    border-radius: 10px;
    border: 1px solid grey;
    height: 30px;
    width: 95%;
    margin: 10px auto;
    /* margin-bottom: 10px; */
    display: block;
`;
