'use client';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Text } from '@/components';
import { IFormData } from '@/models';
import { sendContactForm } from '@/actions';
import { toast } from 'react-toastify';
import { getFormTimestamps } from '@/storage';
import { formatDistanceStrict } from 'date-fns';
import { sv } from 'date-fns/locale';

export const ContactForm = () => {
  const defaultValues: IFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormData>({ defaultValues });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: IFormData) => {
    try {
      const timestamps = getFormTimestamps();

      if (timestamps.length >= 3) {
        const nextAvailable = new Date(timestamps[0] + 24 * 60 * 60 * 1000);
        return toast.error(`Du kan bara skicka tre formuläret per dag. Försök igen om ${formatDistanceStrict(nextAvailable, Date.now(), {unit: 'hour', locale: sv})}.`);
      }

      setIsLoading(true);

      const res = await sendContactForm(data);

      if (!res) return;

      toast.success('Thank you for your message!');
    } catch(error) {
      console.log(error);
    } finally {
      reset(defaultValues);
      setIsLoading(false);
    }
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[500px] flex flex-col gap-4 z-10'>
      <Text as='h2'>Contact Form</Text>
      <div className="flex flex-col gap-2">
        <label className='text-accentDark dark:text-darkAccent'>Name</label>
        <input type="text" {...register('name', { required: 'Fill out your name' })} className='bg-secondary hover:bg-tertiary focus:bg-tertiary dark:bg-darkSecondary dark:hover:bg-darkTertiary dark:focus:bg-darkTertiary rounded-md py-1 px-2 outline-none' />
        {errors.name && <Text as='p' className='!text-error !text-sm'>This field is required</Text>}
      </div>
      <div className="flex flex-col gap-2">
        <label className='text-accentDark dark:text-darkAccent'>Email</label>
        <input type="email" {...register('email', { required: 'Fill out your email' })} className='bg-secondary hover:bg-tertiary focus:bg-tertiary dark:bg-darkSecondary dark:hover:bg-darkTertiary dark:focus:bg-darkTertiary rounded-md py-1 px-2 outline-none' />
        {errors.email && <Text as='p' className='!text-error !text-sm'>This field is required</Text>}
      </div>
      <div className="flex flex-col gap-2">
        <label className='text-accentDark dark:text-darkAccent'>Subject</label>
        <input type="text" {...register('subject')} className='bg-secondary hover:bg-tertiary focus:bg-tertiary dark:bg-darkSecondary dark:hover:bg-darkTertiary dark:focus:bg-darkTertiary rounded-md py-1 px-2 outline-none' />
      </div>
      <div className="flex flex-col gap-2">
        <label className='text-accentDark dark:text-darkAccent'>Message</label>
        <textarea {...register('message', { required: 'Write a message' })} className='min-h-[100px] max-h-[250px] bg-secondary hover:bg-tertiary focus:bg-tertiary dark:bg-darkSecondary dark:hover:bg-darkTertiary dark:focus:bg-darkTertiary rounded-md py-1 px-2 outline-none' />
        {errors.message && <Text as='p' className='!text-error !text-sm'>This field is required</Text>}
      </div>
      <button type="submit" disabled={isLoading} className='w-fit mt-2 font-semibold text-accentDark hover:text-dark dark:text-darkAccentLight dark:hover:text-darkAccent bg-secondary hover:bg-tertiary dark:bg-darkTertiary dark:hover:bg-darkSecondary py-2 px-4 rounded-md'>{ isLoading ? 'Sending...' : 'Send' }</button>
    </form>
  )
}

export default ContactForm;