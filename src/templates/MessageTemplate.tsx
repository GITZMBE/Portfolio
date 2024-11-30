import { IFormData } from '@/models';
import { Body, Column, Font, Head, Heading, Html, Img, Row, Section, Tailwind, Text } from '@react-email/components';
import React from 'react';

interface IProps {
  data: IFormData;
};

export const MessageTemplate = ({ data }: IProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Anonymous Pro"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
            format: "woff2",
          }}
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#FFFFFF",
                accent: "#CDCDCD",
                accentDark: "#000000",
              },
              fontFamily: {
                Inter: ['Inter', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Body style={{ fontFamily: "Inter, Arial, sans-serif" }} className="m-0 p-0 w-full text-accent font-Inter">
          <Section className='my-4 px-4'>
            <Row>
              <Img
                src="https://cdn-icons-png.flaticon.com/128/1259/1259122.png"
                alt="Company Logo"
                className="h-[100px]"
              />
              <Heading className='text-5xl text-accentDark uppercase'>Portfolio Meddelande</Heading>
            </Row>            
          </Section>
          <Section className='my-4 px-4'>
            <Row>
              <Column>
                <Heading className='m-0 mb-2 text-2xl text-accentDark'>Subject</Heading>
                <Text className='m-0 text-nowrap'>{data.subject || 'Meddelande'}</Text>
              </Column>
            </Row>
          </Section>
          <Section className='my-4 px-4'>
            <Row>
              <Column>
                <Heading className='m-0 mb-2 text-2xl text-accentDark'>Avsändare</Heading>
                <Text className='m-0 text-nowrap'><strong>Namn: </strong>{data.name}</Text>
                <Text className='m-0 text-nowrap'><strong>Email: </strong>{data.email}</Text>
              </Column>
            </Row>
          </Section>
          <Section className='my-4 px-4'>
            <Row>
              <Column>
                <Heading className='text-2xl text-accentDark'>Meddelande</Heading>
                <Text className='m-0'>{data.message}</Text>
              </Column>
            </Row>
          </Section>
          <Section className='my-4 px-4'>
            <Row>
              <Column>
                <Heading className='m-0 text-xl text-accentDark'>mvh</Heading>
                <Text className='m-0'>{data.name}</Text>
              </Column>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default MessageTemplate;