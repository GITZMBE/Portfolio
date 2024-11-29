'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Text } from '@/components';

interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const defaultValues: IFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm<IFormData>({ defaultValues });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: IFormData) => {

    try {
      setIsLoading(true);

      setTimeout(() => {
        console.log(data);
      }, 3000);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log(data);
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Text as='h2'>ContactForm</Text>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input type="text" {...register('name', { required: 'Fill out your name' })} className='bg-light dark:bg-dark rounded-md py-1 px-2 outline-none' />
        {errors.name && <Text as='p' className='!text-error !text-sm'>This field is required</Text>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email', { required: 'Fill out your email' })} className='bg-light dark:bg-dark rounded-md py-1 px-2 outline-none' />
        {errors.email && <Text as='p' className='!text-error !text-sm'>This field is required</Text>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject">Subject</label>
        <input type="text" {...register('subject')} className='bg-light dark:bg-dark rounded-md py-1 px-2 outline-none' />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea {...register('message', { required: 'Write a message' })} className='bg-light dark:bg-dark rounded-md py-1 px-2 outline-none' />
        {errors.message && <Text as='p' className='!text-error !text-sm'>This field is required</Text>}
      </div>
      <button type="submit" disabled={isLoading} className='w-fit mt-2 bg-secondaryLight hover:bg-tertiaryLight dark:bg-tertiaryDark dark:hover:bg-secondaryDark py-2 px-4 rounded-md'>{ isLoading ? 'Sending...' : 'Send' }</button>
    </form>
  )
}

export default ContactForm;