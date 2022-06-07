import React from 'react';
import { FormWrapper, Input, Title, Wrapper } from './Form.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//when fields appear in schema, they have to be used !!!
const schema = yup
    .object({
        firstName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().required(),
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
    })
    .required();

const Form = () => {
    //register -define which fields are part of the validations
    //handleSubmit - use in onSubmit in form
    //errors - handle errors  from yup schema
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <Wrapper>
                <FormWrapper>
                    <Title>SignUp</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="firstName" {...register('firstName')} />
                        <p>{errors.firstName && 'Required'}</p>
                        <Input placeholder="email" {...register('email')} />
                        <p>{errors.email && 'Email'}</p>
                        <Input placeholder="age" {...register('age')} />
                        <p>{errors.age && 'Just positive number'}</p>
                        <Input placeholder="password" {...register('password')} />
                        <p>{errors.password && 'min: 4 max: 5 chars'}</p>
                        <Input placeholder="confirm password" {...register('confirmPassword')} />
                        <p>{errors.confirmPassword && 'password needs to be the same'}</p>

                        <Input type="submit" />
                    </form>
                </FormWrapper>
            </Wrapper>
        </>
    );
};

export default Form;
